import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 300,
      name: "Curso de ReactJS",
      description: "Novo Curso de ReactJS",
      fk_id_teacher: "e8de2f06-9a95-4edb-b77f-072feb6dcfd1"
    },
  });

  console.log(result);
}

main();
