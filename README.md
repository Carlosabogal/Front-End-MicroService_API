# Ventana de Detalles del Medicamento

Esta es una aplicación Angular que muestra la venta y la informacion de los detalles de un medicamento atra vez de un crud


## Prerequisitos
### Instalación y Ejecución

1. Clone este repositorio y este [ https://github.com/Carlosabogal/Back-End-MicroService_API-Konex ] en su máquina local.

2. Navegue a la carpeta del proyecto.

3. Ejecute el siguiente comando para instalar las dependencias:

Ve la terminal e inyecta el comando ng serve para ejecutar el proyecto Front End Valida que la etiqueta "@CrossOrigin(origins = "http://localhost:4200")" tenga el mismo puerto que el abierto por el angular

# Ventana de Detalles del Medicamento

Esta es una aplicación Angular que muestra los detalles de un medicamento según su ID.

## Instrucciones

1. Ingrese el ID del medicamento en el campo proporcionado y haga clic en "Buscar Medicamento".
   
3. Se mostrarán los detalles del medicamento, incluyendo su ID, nombre, laboratorio, fecha de fabricación, fecha de vencimiento, cantidad en stock y valor unitario.

## Requisitos

- Node.js y Angular CLI deben estar instalados en su sistema.

## Instalación y Ejecución

1. Clone este repositorio en su máquina local.

2. Navegue a la carpeta del proyecto.

3. Ejecute el siguiente comando para instalar las dependencias:
" npm install "

4. Luego, inicie la aplicación con el siguiente comando:
"ng serve "

5. Abra su navegador web y vaya a `http://localhost:4200/` para ver la aplicación en funcionamiento.
## Funcionamiento

1. Al entrar al puerto veran una barra de navegacion con los campos dea actualizar, crear medicamento, Buscar y eliminar

2. En la venta " Buscar y Eliminar"  debe ingresar el ID del medicamento deseado en el campo correspondiente y haga clic en el botón "Buscar Medicamento".

3. La aplicación realizará una solicitud a una API para obtener los detalles del medicamento asociado al ID proporcionado.
Una vez recibida la respuesta de la API, la aplicación mostrará los detalles del medicamento en la interfaz de usuario.
Los detalles que se muestran incluyen:
` ID del medicamento.

Nombre del medicamento.

Laboratorio que fabricó el medicamento.

Fecha de Fabricación del medicamento.

Fecha de Vencimiento del medicamento.

Cantidad en stock del medicamento.

Valor unitario del medicamento.
`
5. Si se desea eliminar el boton eliminar borrar el id del medicamento buscado.

## Crear Medicamento

1. En la bara de navegacion se genera el campo para crear medicamentos , la aplicación proporciona una interfaz de usuario con campos para ingresar los detalles del medicamento a crear.
Los campos requeridos son:
" Nombre del medicamento.

Laboratorio que fabricó el medicamento.

Fecha de Fabricación (en formato dd/mm/aaaa).

Fecha de Vencimiento (en formato dd/mm/aaaa).

Cantidad en stock del medicamento.

Valor unitario del medicamento.

Ingresar Detalles del Medicamento:
"
2. El usuario completa los campos requeridos en la interfaz de usuario.
   
    Ingresa el nombre del medicamento en el campo "Nombre".
    Ingresa el laboratorio fabricante en el campo "Laboratorio".
    Ingresa la fecha de fabricación en el campo "Fecha de Fabricación" en formato dd/mm/aaaa.
    Ingresa la fecha de vencimiento en el campo "Fecha de Vencimiento" en formato dd/mm/aaaa.
    Ingresa la cantidad disponible en stock del medicamento en el campo "Cantidad en Stock".
    Ingresa el valor unitario del medicamento en el campo "Valor Unitario".
    
Validación de los Datos:

3. Antes de continuar con la creación del medicamento, la aplicación realiza una validación para asegurarse de que los campos requeridos estén completados y que los datos ingresados sean válidos.
   
3. Si hay algún campo faltante o datos inválidos, la aplicación muestra un mensaje de error y solicita al usuario que complete los campos correctamente.

# Creación del Medicamento:
5. Una vez que todos los campos requeridos están completos y los datos son válidos, el usuario hace clic en el botón "Crear Medicamento".

6. La aplicación procesa la solicitud y crea un nuevo registro en la base de datos con los detalles del medicamento ingresados.

7.El medicamento se agrega a la lista de medicamentos disponibles en la base de datos.

## Actualizar Medicamento

# Actualizar Medicamento
1. La funcionalidad "Actualizar Medicamento" permite a los usuarios modificar los detalles de un medicamento existente en la base de datos.

2. La aplicación proporciona una interfaz de usuario con campos para ingresar los detalles actualizados del medicamento.

ID: Identificador único del medicamento que se desea actualizar.
Campos para editar:

Nombre: Nombre actual del medicamento.

Laboratorio: Laboratorio que fabricó el medicamento.

Fecha de Fabricación: Fecha de fabricación actual del medicamento (formato dd/mm/aaaa).

Fecha de Vencimiento: Fecha de vencimiento actual del medicamento (formato dd/mm/aaaa).

Cantidad en Stock: Cantidad disponible en stock del medicamento.

Valor Unitario: Valor unitario actual del medicamento.

3. Una vez que los campos se completan y validan correctamente, el usuario hace clic en el botón "Actualizar Medicamento".
La aplicación procesa la solicitud y actualiza el registro del medicamento en la base de datos con la nueva información ingresada.

# Ventas

## Realizar Ventas

# Ventas - Funcionamiento
1. La funcionalidad de "Ventas" permite a los usuarios realizar ventas de medicamentos ingresando los detalles de la venta. La aplicación proporciona una interfaz de usuario con campos para ingresar los detalles de la venta.

2. ## Campos requeridos:
  Medicamento ID: Identificador único del medicamento que se va a vender.
  Cantidad: Cantidad de medicamentos a vender.
3. Realizar Venta

    El usuario ingresa el ID del medicamento que se va a vender en el campo "Medicamento ID".
    
    El usuario ingresa la cantidad de medicamentos que se van a vender en el campo "Cantidad".
    
    La aplicación valida que ambos campos estén completados y que los datos ingresados sean válidos.
    
4. Si hay algún campo faltante o datos inválidos, la aplicación muestra un mensaje de error y solicita al usuario que complete los campos correctamente.
5. 
4. Una vez que los campos se completan y validan correctamente, el usuario hace clic en el botón "Realizar Venta".

## Actualizar Ventas

1. Actualizar Venta - Funcionamiento: La funcionalidad de "Actualizar Venta" permite a los usuarios modificar los detalles de una venta existente en la base de datos.

2. Interfaz de Usuario - La aplicación proporciona una interfaz de usuario con campos para ingresar los detalles actualizados de la venta.
Campos requeridos:
  
   Venta ID: Identificador único de la venta que se desea actualizar.
  Medicamento ID: Identificador único del medicamento vendido en la venta.
  Cantidad: Cantidad de medicamentos vendidos en la venta.
3. Actualizar Venta
  El usuario ingresa el ID de la venta que desea actualizar en el campo "Venta ID".

  El usuario ingresa el ID del medicamento vendido en la venta en el campo "Medicamento ID".
  
  El usuario ingresa la cantidad de medicamentos vendidos en la venta en el campo "Cantidad".
  
Una vez que los campos actualizados se completan y validan , el usuario hace clic en el botón "Actualizar Venta".

5. La aplicación procesa la solicitud y actualiza el registro de la venta en la base de datos con la nueva información ingresada.
6. 
7. Se actualizan los detalles de la venta, como el medicamento vendido y la cantidad, en la base de datos.

## Buscar Ventas por Rango de Fechas - Funcionamiento
1. La funcionalidad de "Buscar Ventas por Rango de Fechas" permite a los usuarios obtener un listado de ventas realizadas dentro de un período específico.

# Interfaz de Usuario
2. La aplicación proporciona una interfaz de usuario con campos para ingresar el rango de fechas de inicio y fin para la búsqueda de ventas.

3. Campos requeridos:

  Fecha de Inicio: Fecha de inicio del rango de fechas en el que se buscarán las ventas (formato dd/mm/aaaa).
  Fecha de Fin: Fecha de fin del rango de fechas en el que se buscarán las ventas (formato dd/mm/aaaa).
4. Buscar Ventas
  El usuario ingresa la fecha de inicio del rango de fechas en el campo "Fecha de Inicio".
  
  El usuario ingresa la fecha de fin del rango de fechas en el campo "Fecha de Fin".
  
5. La aplicación valida que ambos campos estén completados y que los datos ingresados sean válidos.

6. Una vez que los campos se completan y validan correctamente, el usuario hace clic en el botón "Buscar Ventas".
7. 
8. La aplicación procesa la solicitud y muestra un listado de todas las ventas realizadas dentro del rango de fechas especificado.
9. 
10. Cada venta en el listado mostrará detalles como el ID de la venta, el medicamento vendido, la cantidad vendida y el valor total de la venta.
11. 
12. Adicionalmente, la aplicación proporciona un botón "Obtener Todas las Ventas". Si el usuario hace clic en este botón sin ingresar fechas de inicio y fin, la aplicación mostrará un listado con todas las ventas registradas, sin restricciones de fechas.
