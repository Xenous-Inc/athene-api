import { Category } from '.prisma/client';

export type TSecuredCategory = Category;
export const secureCategory = (category: Category): TSecuredCategory => category;
