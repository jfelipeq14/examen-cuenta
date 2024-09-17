// Controla la informacion desde el frontend (postman || rapidapi) y recibe la informacion del backend (model & schema)

export class CuentaController {
  // #region Constructor: construye el modelo que vamos a usar y se asigna desde el app (inicio de la aplicacion)
  constructor ({ cuentaModel }) { // recibe el modelo como un objeto
    this.cuentaModel = cuentaModel // cuentaModel es el modelo que se le asigna al controller para que lo use
  }
  // #endregion

  // #region Metodos de la clase

  // getAll: obtener la informacion de todas las cuentas
  getAll = async (req, res) => {
    const data = await this.cuentaModel.getAll() // Se obtiene la informacion de todas las cuentas

    // Responer con un formato json la data encontrada
    res.status(200).json(data)
  }

  // getById: obtener la informacion de una cuenta en especifico
  getById = async (req, res) => {
    const data = await this.cuentaModel.getById(req.params.numeroCuenta) // req.params.numeroCuenta es el valor que se le envia desde la url como parametro para identificar la cuenta que va a buscar

    // Responer con un formato json la data encontrada (una sola cuenta)
    res.status(200).json(data)
  }

  // post: crear una nueva cuenta
  post = async (req, res) => {
    const data = await this.cuentaModel.post(req.body) // req.body es la informacion que se le envia desde el json en el postman (rapidapi) esta basado en los parametros obligatorios del schema

    // Responer con un formato json la data creada
    res.status(201).json(data)
  }

  // patch: actualizar la informacion de una cuenta
  patch = async (req, res) => {
    // Se obtiene la informacion de la cuenta
    const value = await this.cuentaModel.getById(req.params.numeroCuenta) // req.params.numeroCuenta es el valor que se le envia desde la url como parametro para identificar la cuenta

    // Se valida si se va a realizar un retiro
    if (value.saldo > 0 && req.body.retiro && req.body.retiro > 0) {
      // Modifica el valor del saldo de la cuenta (retira dinero)
      value.saldo = value.saldo - req.body.retiro
      // value.saldo es el saldo actual de la cuenta (traido de la base de datos con la linea 39)
      // req.body.retiro es el valor que se le envia desde el json del postman (rapidapi)

      // Valida si el saldo de la cuenta es menor a 0 para evitar que se retire más de lo que se tiene
      if (value.saldo < 0) {
        res.status(400).json({
          message:
            'No se puede realizar el retiro, el monto es mayor al saldo de la cuenta'
        })
      }
    }

    // Se valida si se va a realizar un deposito y se suma al saldo de la cuenta
    if (req.body.deposito && req.body.deposito > 0) {
      value.saldo = value.saldo + req.body.deposito
      // value.saldo es el saldo actual de la cuenta (traido de la base de datos con la linea 31)
      // req.body.deposito es el valor que se le envia desde el json del postman (rapidapi)
    }

    // Se actualiza la informacion de la cuenta enviando la informacion necesaria al modelo para que haga todo en base de datos
    const data = await this.cuentaModel.patch(req.params.numeroCuenta, value)
    // req.params.numeroCuenta es el valor que se le envia desde la url como parametro para identificar la cuenta
    // value es la informacion de la cuenta que se va a actualizar

    // Responer con un formato json la data actualizada
    res.status(200).json(data)
  }

  // delete: eliminar una cuenta
  delete = async (req, res) => {
    // Se obtiene la informacion de la cuenta
    const value = await this.cuentaModel.getById(req.params.numeroCuenta)

    // Valida si la cuenta tiene saldo para evitar que se elimine
    if (value.saldo > 0) {
      res.status(400).json({
        message: 'No se puede eliminar la cuenta, tiene saldo pendiente'
      })
    }

    // Se elimina la cuenta enviando la informacion necesaria al modelo para que haga todo en base de datos
    const data = await this.cuentaModel.delete(req.params.numeroCuenta) // req.params.numeroCuenta es el valor que se le envia desde la url como parametro para identificar la cuenta
    res.status(200).json(data)
  }
  // #endregion
}
