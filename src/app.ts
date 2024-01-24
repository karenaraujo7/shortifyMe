/** @format */

import fastify from "fastify";
import cookie from "@fastify/cookie"
import { usersRoutes } from "./http/controllers/user/routes";
import { urlsRoutes } from "./http/controllers/url/routes";
import { fastifyJwt } from "@fastify/jwt";
import { env } from "./env";

export const app = fastify();

app.register(fastifyJwt, {secret: env.TOKEN_SIGN_SECRET})

app.register(cookie)

app.register(usersRoutes);
app.register(urlsRoutes)
