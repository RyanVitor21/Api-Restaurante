import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteRestaurantService } from "../services/deleteRestaurants";


class DeleteRestaurantController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: string}

        const restaurantService = new DeleteRestaurantService();

        const restaurant = await restaurantService.execute({id})

        reply.send(restaurant)
    }
}

export {DeleteRestaurantController}





/*import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteRestaurantService } from "../services/deleteRestaurants";

class DeleteRestaurantController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: string };

        if (!id) {
            reply.status(400).send({ error: "ID não fornecido na URL" });
            return;
        }

        const restaurantService = new DeleteRestaurantService();

        try {
            const result = await restaurantService.execute({ id });
            reply.send(result);
        } catch (error: any) {
            // Adicionamos ": any" para informar ao TypeScript que estamos tratando um erro.
            reply.status(500).send({ error: error.message });
        }
    }
}

export { DeleteRestaurantController };*/