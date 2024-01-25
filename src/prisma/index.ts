//Arquivo para conectar com o Prisma
import {  PrismaClient } from '@prisma/client'
 
//Inicializando
const prismaClient = new PrismaClient();

export default prismaClient;