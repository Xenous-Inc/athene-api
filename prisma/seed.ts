import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
    const antonio = await prisma.user.upsert({
        where: { phone: '+79867345211' },
        update: {},
        create: {
            name: 'Antonio',
            phone: '+79867345211',
        },
    });
    const danila = await prisma.user.upsert({
        where: { phone: '+79287899965' },
        update: {},
        create: {
            name: 'Danila',
            phone: '+79287899965',
        },
    });
    const english = await prisma.language.upsert({
        update: {},
        where: { id: 'f8cb708c-f027-11ed-a05b-0242ac120003' },
        create: { value: 'Английский' },
    });
    const french = await prisma.language.upsert({
        update: {},
        where: { id: 'f8cb73ac-f027-11ed-a05b-0242ac120003' },
        create: { value: 'Французский' },
    });
    const sport = await prisma.category.upsert({
        update: {},
        where: { id: '6a304e79-9c48-428a-94fc-d21532f88a88' },
        create: {
            value: 'Sport',
            authorId: danila.id,
        },
    });
    const animals = await prisma.category.upsert({
        update: {},
        where: { id: '24827660-cd40-4bbc-a5cc-bd42ff6e5a56' },
        create: {
            value: 'Animals',
            authorId: antonio.id,
        },
    });
    const upperClass = await prisma.class.upsert({
        update: {},
        where: { id: 'd03a0cb0-89c0-44fa-bdc7-ab5d0a7655f0' },
        create: {
            title: 'Up Up Up',
            teacher: {
                connect: {
                    id: antonio.id,
                },
            },
            description: 'For high-level guys',
        },
    });
    const upperClassAnimals = await prisma.classToCategory.create({
        data: {
            classId: upperClass.id,
            categoryId: animals.id,
        },
    });

    const upperClassSport = await prisma.classToCategory.create({
        data: {
            classId: upperClass.id,
            categoryId: sport.id,
        },
    });
    const antonioSport = await prisma.categoryToUser.create({
        data: {
            userId: antonio.id,
            categoryId: sport.id,
        },
    });

    const danilaInUpperClass = await prisma.classToUser.create({
        data: {
            classId: upperClass.id,
            userId: danila.id,
        },
    });
    const ball = await prisma.word.upsert({
        update: {},
        where: { id: '20bfd260-cb41-43d4-a493-19c3f9f263fe' },
        create: {
            value: 'ball',
            translation: 'мяч',
            languageId: english.id,
        },
    });
    const danilaBall = await prisma.wordToUser.create({
        data: {
            userId: antonio.id,
            wordId: ball.id,
        },
    });
    const ballIsSport = await prisma.wordToCategory.create({
        data: {
            wordId: ball.id,
            categoryId: sport.id,
        },
    });
    const hockey = await prisma.word.upsert({
        update: {},
        where: { id: '44ba131e-3793-44e5-8ae4-8d01a36dbf64' },
        create: {
            value: 'hockey',
            translation: 'хоккей',
            languageId: english.id,
        },
    });
    const hockeyIsSport = await prisma.wordToCategory.create({
        data: {
            wordId: hockey.id,
            categoryId: sport.id,
        },
    });
    const tiger = await prisma.word.upsert({
        update: {},
        where: { id: '66b4546c-79e4-4593-ab55-0bb03f981755' },
        create: {
            value: 'Tigre',
            translation: 'тигр',
            languageId: french.id,
        },
    });
    const tigerIsAnimals = await prisma.wordToCategory.create({
        data: {
            wordId: tiger.id,
            categoryId: animals.id,
        },
    });
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async e => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
