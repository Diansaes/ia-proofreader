import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DocumentModule } from './modules/document/document.module';
import { AiModule } from './modules/ai/ai.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AiModule, DocumentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
