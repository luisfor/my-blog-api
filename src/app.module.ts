import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';

/**
 * Módulo raíz de la aplicación que organiza la estructura del proyecto.
 */
@Module({
  // Módulos que esta clase necesita (como TypeORM, Auth, etc)
  imports: [],
  // Controladores que manejan las rutas HTTP
  controllers: [AppController, UsersController],
  // Servicios (providers) para la lógica de negocio y acceso a datos
  providers: [AppService],
})
export class AppModule {}
