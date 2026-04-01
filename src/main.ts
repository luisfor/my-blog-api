import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * Función principal que arranca la aplicación NestJS.
 */
async function bootstrap() {
  // Crea la instancia de la aplicación recibiendo el módulo raíz (AppModule)
  const app = await NestFactory.create(AppModule);
  
  // Inicia el servidor en el puerto 3000 por defecto o el puerto definido en las variables de entorno
  await app.listen(process.env.PORT ?? 3000);
}

// Llama a la función bootstrap para iniciar la app
bootstrap();
