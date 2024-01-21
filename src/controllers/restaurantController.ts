import {FastifyRequest, FastifyReply} from 'fastify'
import {CreateRestaurantsService} from '../services/createRestaurants' 

class CreateRestaurantsController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const {name, email} = request.body as { name: string, email: string}
        

        const restaurantService = new CreateRestaurantsService()
        const restaurant = await restaurantService.execute({name, email});

        reply.send(restaurant)
    }
}


export { CreateRestaurantsController}
