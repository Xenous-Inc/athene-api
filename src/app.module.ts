import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { validationSchema } from './config/validation';
import { configuration } from './config/configuration';
import { UsersModule } from './modules/users/users.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { LanguagesModule } from './modules/languages/languages.module';
import { WordsModule } from './modules/words/words.module';
import { ClassesModule } from './modules/classes/classes.module';
import { PrismaModule } from './prisma/prisma.module';
@Module({
    imports: [
        ConfigModule.forRoot({
            validationSchema,
            envFilePath: `${process.cwd()}/.${process.env.NODE_ENV}.env`,
            load: [configuration],
            isGlobal: true,
        }),
        UsersModule,
        CategoriesModule,
        LanguagesModule,
        WordsModule,
        ClassesModule,
        PrismaModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
