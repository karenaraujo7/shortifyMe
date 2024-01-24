import { FastifyInstance } from "fastify";
import { shortedUrl } from "./shortenUrl";
import { verifyJwt } from "../../middlewares/verify";
import { listUrls } from "./list";
import { deleteUrl } from "./deleteUrl";


export async function urlsRoutes(app: FastifyInstance) {
    app.post("/shorted",{ preHandler: verifyJwt }, shortedUrl);
    app.get("/list",{ onRequest: [verifyJwt] }, listUrls);
    app.delete("/deleteUrl/:id",{ onRequest: [verifyJwt] } , deleteUrl);
    app.patch("/update/:id", updatedUrl);
}