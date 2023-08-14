import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as fs from 'fs';
import * as path from 'path';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  // let httpsOptions = {};

  // httpsOptions = {
  //   cors:{
  //     origin:'https://localhost:3000',
  //     credentials: true
  //   },

  //   key: fs.readFileSync('/Users/hyewon/files/localhost-key.pem'),
  //   cert: fs.readFileSync('/Users/hyewon/files/localhost.pem'),
  // };
  // const app = await NestFactory.create(AppModule, { httpsOptions });

  // const port = 8080;
  // const hostname = 'localhost';
  // await app.listen(port, hostname, () => {
  //   const address = 'https://localhost:8080';
  //   Logger.log('Listening at ' + address);
  // });

  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: 'https://gamer-profile-nextjs.vercel.app',
      // origin: 'http://localhost:3000',
      credentials: true,
    },
  });

  app.listen(8080);
}

bootstrap();
