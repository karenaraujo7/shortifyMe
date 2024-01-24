/** @format */

import { FastifyInstance } from "fastify";
import { register } from "./register";
import { login } from "./login";
import { profile } from "./profile";
import { verifyJwt } from "../../middlewares/verify";


export async function usersRoutes(app: FastifyInstance) {
  app.post("/users", register);
  app.post("/login", login)


  app.get("/profile",{ onRequest: [verifyJwt] }, profile)
}
