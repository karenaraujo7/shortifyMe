import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../../lib/prisma";

interface IRequestParams {
  id: string;
}

export async function deleteUrl(request: FastifyRequest<{ Params: IRequestParams }>, reply: FastifyReply) {
  try {
    const urlId = request.params.id;
    const userId = request.user.sub;

    await prisma.uRL.delete({
      where: {
        id: urlId,
        userId,
      },
    });

    return reply.status(200).send();
  } catch (error) {
    return reply.status(500).send({ msg: "Unauthorized!" });
  }
}
