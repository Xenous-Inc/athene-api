import { User } from '@prisma/client';

export type TSecuredUser = Omit<User, 'createdAt' | 'updatedAt'>;
export const secureUser = (user: User): TSecuredUser => {
    const { createdAt, updatedAt, ...sUser } = user;
    return { ...sUser };
};
