import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.update({
    where: {
      id: "ab3e303f-4818-4852-b3bc-00112e324bfc",
    },
    data: {
      duration: 100,
      description: "Curso muito excelente de NodeJS"
    },
  });

  console.log(result);
}

main();
