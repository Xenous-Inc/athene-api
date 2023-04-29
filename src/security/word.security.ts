import { Word } from '.prisma/client';

export type TSecuredWord = Word;
export const secureWord = (word: Word): TSecuredWord => word;
