# Api para la gestión de empleados

Api express js y mysql para gestionar empleados

## Uso

1. - Abrir el proyecto con Visual Studio Code
2. - Crear la base de datos
	1. - Para crear la base datos y sus tablas se debe utilizar el archivo employee.sql
	2. - Cambiar la conexión en el archivo index.js en la linea Sequelize('drawer', 'root', '1234' .....
3. - Iniciar el proyecto
    1. - Ejecutar el comando: node index.js
4. - Consumir el API con Postman
	1. - Exportar los endpoint desde el archivo Employee.postman_collection a tu Postman

### Notas
* Api sin validaciones en los datos que recibe