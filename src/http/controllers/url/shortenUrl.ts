/** @format */

import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import generateShortURL from "./generateShortURL";
import { prisma } from "../../../lib/prisma";

export async function shortedUrl(request: FastifyRequest, reply: FastifyReply) {
  try {
    const shortenUrlBodySchema = z.object({
      fullUrl: z.string(),
    });

    const { fullUrl } = shortenUrlBodySchema.parse(request.body);
    const shortenedUrl = generateShortURL(fullUrl);

   

    
      const userId = request.user.sub;

      const resultURL = await prisma.uRL.create({
        data: {
          userId,
          fullUrl,
          shortUrl: shortenedUrl,
        },
      });

      return reply.status(201).send({ data: resultURL });
  
  } catch (error) {
    return reply
      .status(500)
      .send({ msg: "This url has already been shortened!" });
  }
}
