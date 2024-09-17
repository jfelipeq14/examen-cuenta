import { Router } from 'express'
import { CuentaController } from '../controllers/cuenta.controller.js' // Se importa el controlador para poder usarlo en las rutas

export const createCuentaRouter = ({ cuentaModel }) => { // Crea el modelo basado en un objeto de los schemas y se usa para crear las rutas
  const cuentaRouter = Router() // Se crea una instancia de Router para crear las rutas

  const cuentaController = new CuentaController({ cuentaModel }) // Se crea una instancia del controlador y se le pasa el modelo para el constructor y poder ser usado en las funciones (comunicar el modelo con el controlador)

  cuentaRouter.get('/', cuentaController.getAll)
  cuentaRouter.get('/:numeroCuenta', cuentaController.getById)
  cuentaRouter.post('/', cuentaController.post)
  cuentaRouter.patch('/:numeroCuenta', cuentaController.patch)
  cuentaRouter.delete('/:numeroCuenta', cuentaController.delete)

  return cuentaRouter // Retorna las rutas creadas
}
