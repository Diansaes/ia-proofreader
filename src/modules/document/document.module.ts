import { Module } from '@nestjs/common';
import { DocumentController } from './document.controller';
import { DocumentService } from './document.service';
import { AiModule } from '../ai/ai.module';

@Module({
  controllers: [DocumentController],
  providers: [DocumentService],
  imports: [AiModule],
})
export class DocumentModule {}
