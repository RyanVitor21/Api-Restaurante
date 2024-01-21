import prismaClient from "../prisma";

interface DeleteRestaurantProps {
    id: string;
}

class DeleteRestaurantService {
    async execute({ id }: DeleteRestaurantProps) {
        if (!id) {
            throw new Error("Solicitação inválida");
        }

        const findRestaurant = await prismaClient.customer.findFirst({
            where: {
                id: id,
            },
        });

        if (!findRestaurant) {
            throw new Error("Cliente não existe!");
        }

        await prismaClient.customer.delete({
            where: {
                id: id,
            },
        });

        return { message: "Deletado com sucesso" };
    }
}

export { DeleteRestaurantService };

   
    
