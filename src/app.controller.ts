import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * Controlador principal que maneja las solicitudes básicas.
 */
@Controller()
export class AppController {
  // Inyección de dependencia del servicio AppService
  constructor(private readonly appService: AppService) {}

  /**
   * Maneja las peticiones GET a la ruta raíz (/)
   * @returns Un saludo desde el servicio
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
