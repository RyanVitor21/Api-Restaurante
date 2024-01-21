import prismaClient from "../prisma";

interface CreateRestaurantProps{
    name: string;
    email: string
}

class CreateRestaurantsService {
    async execute({name, email}: CreateRestaurantProps ) { 
        
        if (!name  || !email ) {
            throw new Error("Preencha todos os campos");
        }

        const Restaurante = await prismaClient.customer.create({
            data:{
                name,
                email,
                status: true
            }
        })

        return Restaurante
    }
}

export {CreateRestaurantsService}