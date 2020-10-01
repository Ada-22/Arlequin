## Trabajo práctico final del Curso React JS de CoderHouse

## Proyecto E-Commerce Tienda de disfraces Arlequin

```
Realizado por Carmen Mindeguia, contacto: mindeguia84@gmail.com

```
## Descripción
```
Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app).
En el he utilizado Bootstrap 4 para agilizar el desarrollo de los estilos y firebase para almacenar la información que se utiliza en la app.

```

### Instrucciones de instalación 

```
git clone https://github.com/Ada-22/Arlequin.git

npm install

npm start

// Abrir navegador en http://localhost:3000/

```
### Navegacion y componentes

La **navegación** ocurre en todo momento utilizando el router de la librería **react-router-dom** 

La navegacion del e-commerce la determina el componente **Navbar** que esta accesible durante toda la experiencia, este contiene, un **Logo** (que nos lleva al componente **Home**, en la ruta '/'), 
un menu desplegable llamado **Nuestros diseños** que al desplegarse contiene los links a **disfraces**
(que nos lleva al componente **ListItems** en la ruta '/disfraces' ) y a **mascaras**( que nos lleva al componente **ListItemsM** en la ruta '/mascaras') y un carrito de compras **IconCart** (que se encuentra en la ruta '/cart' y nos lleva al componente **Cart**).

**Home** Contiene un header y  un pequeño listado de 6 productos filtrados por el precio (mayor a 2000) y un pequeño **footer**

**ListItems** y **ListItemsM** Contienen las llamadas a firebase filtrando por category y utilizando **ListProducts** para las vistas que son iguales. En estas vistas se muestra un listado de 6 productos. 
Al hacer click en un producto del listado, navega a la ruta /detalle/:id y permite ver su descripción
(imagen, precio, selector de cantidad de productos, un boton para comprar y un boton para volver al home).


**IconCart** Se puede acceder en todo momento y tiene una indicación de la cantidad de items incluidos. Al clickearlo, dirige al componente **Cart**.

**Cart** Contiene el listado de productos seleccionados, la cantidad por producto elegido, la suma del precio de las unidades y la suma total de todos los productos, un boton para confirmar la compra que nos lleva a el componente **Form**, un boton para eliminar todo el listado de productos a comprar, y dos botones mas que nos llevan a **ver + disfraces** o a **ver + mascaras**.

**Form** Es un formulario para confirmar la compra, nos pide nombre y apellido, telefono, email y repetir el email, tiene un boton para confirmar que esta deshabilitado hasta que el usuario llene todos los campos.
Al confirmar se crea un objeto que es almacenado en firebase en la coleccion "ordenes" y da un feedback al usuario en el que se muestra el id de la compra realizada.


### API de Context de React

```
El componente CartContext contiene funciones que se utilizaran en diferentes componentes, por ejemplo: add, 
subtract, clean, total y addItem, que sirven para realizar operaciones sobre la lista de productos que guardamos en el Cart.

```


