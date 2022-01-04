import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient();

export const allUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
}

export const getUser = async (id: number) => {
    const user = await prisma.user.findFirst({ where: { id } });
    return user;
}

export const storeUser = async (data: User) => {
    const user = await prisma.user.create({ data });
    return user;
}

export const updateUser = async (data: User, id: number) => {
    const user = await prisma.user.update({ where: { id }, data });
    return user;
}

export const deleteUser = async (id: number) => {
    const user = await prisma.user.delete({ where: { id } });
    return user;
}