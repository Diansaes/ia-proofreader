import { Injectable } from '@nestjs/common';
import { AiService } from '../ai/ai.service';
import { PdfValidator } from './validators/pdf.validator';

@Injectable()
export class DocumentService {
  constructor(private readonly aiService: AiService) {}

  async processPdf(
    file: Express.Multer.File,
  ): Promise<{ pages: number; analysis: string }> {
    const data = await PdfValidator.validate(file);
    const analysis = await this.aiService.analyzeText(data.text);

    return {
      pages: data.numpages,
      analysis,
    };
  }
}
