interface ParsedPdfText {
  text: string;
}

export class PdfParser {
  static extractText(parsedPdf: ParsedPdfText): string {
    return parsedPdf.text.replace(/\s+/g, ' ').trim();
  }
}
