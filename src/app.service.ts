import { Injectable } from '@nestjs/common';

/**
 * Servicio encargado de la lógica de negocio básica de la aplicación.
 */
@Injectable()
export class AppService {
  /**
   * Retorna un mensaje de saludo.
   * @returns "Hello World!"
   */
  getHello(): string {
    return 'Hello World!';
  }
}
