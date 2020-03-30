import {join} from 'path';
import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {NestExpressApplication} from '@nestjs/platform-express';

const PORT = process.env.PORT || 3000;
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    origin: [
      `http://localhost:${PORT}`,
    ],
  });
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.enableCors();
  await app.listen(PORT);
  console.log(`Listening at: http://localhost:${PORT}`);
}
bootstrap().then(r => null);
