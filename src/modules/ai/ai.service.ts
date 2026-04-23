import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class AiService {
  private client: OpenAI;

  constructor() {
    this.client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async analyzeText(text: string): Promise<string> {
    const prompt = this.buildPrompt(text);

    const response = await this.client.responses.create({
      model: 'gpt-4.1-mini', // balance costo / calidad
      input: prompt,
    });

    return response.output_text;
  }

  private buildPrompt(text: string): string {
    return `
Eres un corrector de estilo profesional especializado en español de México.

Analiza el siguiente texto sin cambiar la intención del autor.

Debes evaluar:

1. Coherencia narrativa (¿tiene sentido?)
2. Claridad del mensaje
3. Ortografía
4. Puntuación
5. Redundancias o muletillas
6. Fluidez del texto

Responde en formato JSON con esta estructura:

{
  "coherencia": "alta | media | baja",
  "errores_ortograficos": [],
  "errores_puntuacion": [],
  "sugerencias_estilo": [],
  "version_corregida": "texto mejorado"
}

Texto:
"""${text}"""
`;
  }
}
