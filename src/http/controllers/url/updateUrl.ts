import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../../lib/prisma";

interface IRequestParams {
    id: string;
  }

export async function updatedUrl(request: FastifyRequest<{ Params: IRequestParams }>, reply: FastifyReply) {
    try {
        const urlId = request.params.id
        const userId = request.user.sub

        await prisma.uRL.findUnique({
            where:{
                id:urlId,
                userId,
            }
        })


    } catch (error) {
        return 
    }
}