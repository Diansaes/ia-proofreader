import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(3000);
  console.log(
    `[BOOTSTRAP_SUCCESS] Application is running on: ${await app.getUrl()}`,
  );
}

bootstrap().catch((err: unknown) => {
  if (err instanceof Error) {
    console.error('[BOOTSTRAP_ERROR]', {
      message: err.message,
      stack: err.stack,
    });
  } else {
    console.error('[BOOTSTRAP_ERROR]', err);
  }

  process.exit(1);
});
