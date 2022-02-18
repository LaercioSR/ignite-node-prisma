import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 500,
      name: "Curso de React Native",
      description: "Novo Curso de React Native",
      teacher: {
        connect: {
          id: "426b062b-db76-41a0-95d6-bf055c76e00e"
        }
      }
    },
  });

  console.log(result);
}

main();
