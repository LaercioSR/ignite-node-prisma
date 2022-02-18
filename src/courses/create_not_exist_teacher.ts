import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 500,
      name: "Curso de Elixir",
      description: "Novo Curso de Elixir",
      teacher: {
        create: {
          name: "Rafa Camarda"
        }
      }
    },
  });

  console.log(result);
}

main();
