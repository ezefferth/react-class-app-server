/*
  Warnings:

  - You are about to drop the `Aluno` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Aluno";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "aluno" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT
);
