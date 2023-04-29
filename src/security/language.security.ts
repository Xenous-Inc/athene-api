import { Language } from '@prisma/client';

export type TSecuredLanguage = Language;
export const secureLanguage = (language: Language): TSecuredLanguage => language;
