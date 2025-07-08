import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS 설정
  app.enableCors();

  // 글로벌 prefix 설정
  app.setGlobalPrefix('api/carbon');

  const port = process.env.PORT || 3003;
  await app.listen(port);

  console.log(`Carbon service is running on: http://localhost:${port}`);
}

bootstrap();
