import { BadRequestException } from '@nestjs/common';
import { PDFParse } from 'pdf-parse';

export interface PdfValidationResult {
  numpages: number;
  text: string;
  name: string;
}

export class PdfValidator {
  static async validate(
    file: Express.Multer.File,
  ): Promise<PdfValidationResult> {
    if (file.mimetype !== 'application/pdf') {
      throw new BadRequestException('Only PDF files are allowed');
    }

    const parser = new PDFParse({ data: file.buffer });

    try {
      const result = await parser.getText();

      const data: PdfValidationResult = {
        numpages: result.total,
        text: result.text,
        name: file.originalname,
      };

      if (data.numpages > 10) {
        throw new BadRequestException(
          `PDF exceeds maximum allowed pages (10). Found: ${data.numpages}`,
        );
      }

      return data;
    } finally {
      await parser.destroy();
    }
  }
}
