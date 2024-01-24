import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../../lib/prisma";

export async function listUrls(request: FastifyRequest, reply: FastifyReply) {
  try {
    const urls = await prisma.uRL.findMany({
      where: {
        userId: request.user.sub,
      },
    });

    return reply.status(200).send({ listUrls: urls });
  } catch (error) {
    return reply.status(500).send({ errorMsg: error });
  }
}
