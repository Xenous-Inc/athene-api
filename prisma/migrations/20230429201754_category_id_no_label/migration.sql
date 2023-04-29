-- DropForeignKey
ALTER TABLE "Word" DROP CONSTRAINT "Word_categoryId_fkey";

-- AlterTable
ALTER TABLE "Word" ALTER COLUMN "categoryId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Word" ADD CONSTRAINT "Word_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
