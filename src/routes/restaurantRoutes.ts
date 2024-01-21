import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateRestaurantsController } from "../controllers/restaurantController";
import { RestaurantController } from "../controllers/listerRestaurantsControllers";
import { DeleteRestaurantController } from "../controllers/deleterestaurantsControllers";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return {ok: true}
    })

    fastify.post("/restaurant", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateRestaurantsController().handle(request, reply)
    })

    fastify.get("/restaurants", async (request: FastifyRequest, reply: FastifyReply) => {
        return new RestaurantController().handle(request, reply) //não esta funcionando
    })

    fastify.delete("/restaurant", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteRestaurantController().handle(request, reply) //não esta funcionando
    })
}