import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeAuthenticateUseCase } from "../../../use-case/make-authenticate-use";

export async function login(request: FastifyRequest, reply: FastifyReply) {
  try {
    const loginBodySchema = z.object({
        email: z.string().email(),
        password: z.string().min(8),
      });
  
      const {email, password } = loginBodySchema.parse(request.body);

      const authenticateUseCase = makeAuthenticateUseCase()

      const { user } = await authenticateUseCase.execute({
        email,
        password
      })

      const token = await reply.jwtSign({}, {sign: {sub: user.id}},)

      return reply.status(200).send({token})








  
    //   const user  = await prisma.user.findUnique({
    //     where: {
    //       email
    //     }
    //   })

    // if(!user) {
    //     return reply.status(401).send({error: 'Invalid credentials!'})
    // }

    // if(await compare(password, user.passwordHash)) {
    //     const token = generateToken(user)

    //   return reply.status(200).send({
    //     token,
    //     user: {
    //       name: user.name,
    //       email: user.email,
    //       id: user.id
    //     }
    //   })
    // }else {
    //   return reply.status(401).send({ msg: "Invalid password or email!" });
    // }
    
  } catch (err) {
    return reply.status(500).send({ msg: JSON.stringify(err)});
  }
}
