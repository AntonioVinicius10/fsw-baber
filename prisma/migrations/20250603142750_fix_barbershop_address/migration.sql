/*
  Warnings:

  - You are about to drop the column `addrees` on the `Barbershop` table. All the data in the column will be lost.
  - The `phones` column on the `Barbershop` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `address` to the `Barbershop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Barbershop" DROP COLUMN "addrees",
ADD COLUMN     "address" TEXT NOT NULL,
DROP COLUMN "phones",
ADD COLUMN     "phones" TEXT[];
