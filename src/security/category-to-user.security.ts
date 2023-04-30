import { CategoryToUser } from '.prisma/client';

export type TSecuredCategoryToUser = CategoryToUser;
export const secureCategoryToUser = (categoryToUser: CategoryToUser): TSecuredCategoryToUser => categoryToUser;
