import { CuentaSchema } from '../schemas/cuenta.schema.js'

export class CuentaModel {
  // get: obtener la informacion de todas las cuentas
  async get () { // async: funcion asincrona
    // Se obtiene la informacion de todas las cuentas usando el schema (informacion de la base de datos)
    const data = await CuentaSchema.find() // await: espera a que la funcion termine para continuar

    // Retorna las cuentas encontradas
    return data
  }

  // getById: obtener la informacion de una cuenta en especifico
  async getById (numeroCuenta) { // numeroCuenta es el parametro que se le envia a la funcion (desde el controller)
    // Se obtiene la informacion de la cuenta usando el schema (informacion de la base de datos)
    const data = await CuentaSchema.findOne({ numeroCuenta })
    // retorna la cuenta encontrada
    return data
  }

  // post: crear una nueva cuenta
  async post (obj) { // obj es el parametro que se le envia a la funcion (desde el controller) en este caso un objeto
    // Se crea una nueva cuenta en la base de datos usando el schema (informacion de la base de datos)
    const data = await new CuentaSchema(obj).save() // se crea una nueva instancia de CuentaSchema y se guarda en la base de datos con el metodo save() de mongoose

    // Retorna la cuenta creada
    return data
  }

  // pacth: actualizar la informacion de una cuenta
  async patch (numeroCuenta, obj) { // numeroCuenta y obj son los parametros que se le envian a la funcion (desde el controller)
    // Se actualiza la informacion de la cuenta en la base de datos usando el schema (informacion de la base de datos)
    const data = await CuentaSchema.findOneAndUpdate({ numeroCuenta }, obj) // se busca la cuenta por el numero de cuenta y se actualiza con la informacion del objeto

    // Retorna la cuenta actualizada
    return data
  }

  // delete: eliminar una cuenta
  async delete (numeroCuenta) { // numeroCuenta es el parametro que se le envia a la funcion (desde el controller)
    // Se elimina la informacion de la cuenta en la base de datos usando el schema (informacion de la base de datos)
    const data = await CuentaSchema.findOneAndDelete({ numeroCuenta }) // se busca la cuenta por el numero de cuenta y se elimina

    // Retorna la cuenta eliminada
    return data
  }
}
