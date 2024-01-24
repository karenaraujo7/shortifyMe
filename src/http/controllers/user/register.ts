/** @format */

import { FastifyRequest, FastifyReply } from "fastify";
import { hash } from "bcryptjs";
import { z } from "zod";
import { prisma } from "../../../lib/prisma";

export async function register(request: FastifyRequest, reply: FastifyReply) {
  try {
    const registerBodySchema = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string().min(8),
    });

    const { name, email, password } = registerBodySchema.parse(request.body);

    const passwordHash = await hash(password, 10);

    const userWithSameEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userWithSameEmail) {
      return reply.status(409).send();
    }

    await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
      },
    });

    return reply.status(201).send();
  } catch (err) {
    console.error(err);
    return reply.status(500).send({ msg: JSON.stringify(err) });
  }
}
