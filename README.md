# Parqueadero

### Requisitos:

> NodeJs: [NVM for Windows](https://youtu.be/xW3QUu_zhLo?si=cfQ8tgshPdUTfLz7)
>
> VsCode: [VsCode for Windows](https://youtu.be/Dm1kXrFhaeQ?si=TJOHwyByYIBS3tY2)
>
> Adicional (no requisito): [Github Copilot](https://youtu.be/cmg9Dlth_9k?si=w-txBeFj0WOOTnhV)
>
> Alternativa a copilot: [Codeium](https://codeium.com/)
>
> Prettier: [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

---

- Crear fork del repositorio:
[Api](https://github.com/jfelipeq14/taller-parqueadero)

- Clonar el repositorio (debe tener tu nombre de usuario:

      git clone https://github.com/username/taller-parqueadero.git

- Instalar los paquetes necesarios (Primero revisa tu version de node: 20.16.0+):

      npm i

- Crear la rama con tu nombre + caracteristica o componente:

      git checkout -b username/auth

- Realizar los cambios necesarios.

- Subir los cambios:

      git add .
      git commit -m "mensaje del commit"
      git push origin nombreRama

- Realizar el pull request explicando que hizo en sus cambios (corregir errores, agregar funcionalidad, modificar componentes y demás).

- Avisar sobre los cambios y esperar la review.

- Obtener los cambios en el repositorio: Ir a su repositorio de github y actualizar su rama develop.

- Obtener cambios en el proyecto local:

      git fetch origin develop
      git pull origin develop

- Cambiar de rama para realizar la siguiente tarea (cada tarea necesita su rama):

      git checkout develop
      git checkout -b username/task

- Repetir el proceso omitiendo la clonacion y la instalacion de los paquetes.
