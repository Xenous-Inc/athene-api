import { Class } from '@prisma/client';

export type TSecuredClass = Class;
export const secureClass = (classy: Class): TSecuredClass => classy;
