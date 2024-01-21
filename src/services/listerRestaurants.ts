import prismaClient from "../prisma";

class ListRestaurantsService{
    async execute() {

        const Restairant = await prismaClient.customer.findMany()

        return Restairant
    }
}

export {ListRestaurantsService}




