import { FastifyRequest, FastifyReply } from "fastify";
import { ListRestaurantsService } from "../services/listerRestaurants";


class RestaurantController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listRestaurantsService = new ListRestaurantsService()

        const Restaurante = await listRestaurantsService.execute()

        reply.send(Restaurante)
    }
}

export { RestaurantController}