<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Individual Project - Henry Dogs

![2022-06-06 (5)](https://user-images.githubusercontent.com/96741070/172275241-434ff75b-91b8-488c-8887-1b45ed35a4dc.png)


## Objetivos del Proyecto / Project's Goals

- Construir una App utlizando React, Redux, Node y Sequelize. / Build an App using React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera. / Use all concepts learned in the Bootcamp.
- Aprender mejores prácticas. / Learn better coding practices.
- Aprender y practicar el workflow de GIT. / Learn the GIT's workflow.
- Usar y practicar testing. / Practice testing on the app.

## Enunciado / Statement

La idea general fue crear una aplicación en la cual se puedan ver distintas razas de perro junto con información relevante de las mismas utilizando una api externa [the dog api](https://thedogapi.com/) y a partir de ella poder, entre otras cosas:

  - Buscar perros
  - Filtrarlos / Ordenarlos
  - Agregar nuevos perros

__IMPORTANTE__: Para las funcionalidades de filtrado y ordenamiento NO se usaron los endpoints de la API externa, sino que los mismos fueron realizados desde el frontend y el backend.

### Endpoints utilizados / Endpoints used

  - GET https://api.thedogapi.com/v1/breeds
  - GET https://api.thedogapi.com/v1/breeds/search?q={raza_perro}

### Tecnologías empleadas:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - PostgreSQL

### Frontend

Se desarrolló una aplicación de React/Redux que contiene las siguientes pantallas/rutas.

__Página inicial__: landing page que contiene
- [ ] Alguna imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

__Ruta principal__: contiene
- [ ] Input de búsqueda para encontrar razas de perros por nombre
- [ ] Área donde se verá el listado de razas de perros. Se muestra:
  - Imagen
  - Nombre
  - Temperamento
  - Peso
- [ ] Opciones para filtrar por:
    - Temperamento 
    - Raza existente (es decir las que vienen de la API) o agregadas (creadas mediante un formulario)
- [ ] Opciones para ordenar tanto ascendentemente como descendentemente las razas de perro por:
    - Orden alfabético 
    - Peso
- [ ] Paginado para ir buscando y mostrando las siguientes razas.

__Ruta de detalle de raza de perro__: contiene
- [ ] Los campos imagen, nombre y temperamento
- [ ] Altura
- [ ] Peso
- [ ] Años de vida

__Ruta de creación de raza de perro__: contiene
- [ ] Un formulario controlado con JS con los siguientes campos:
  - Nombre
  - Altura
  - Peso
  - Años de vida
- [ ] Posibilidad de seleccionar uno o más temperamentos
- [ ] Botón para crear una nueva raza de perro

 
### Base de datos

El modelo de la base de datos contiene las siguientes entidades:

- [ ] Raza con las siguientes propiedades:
  - ID
  - Nombre
  - Altura
  - Peso
  - Años de vida
- [ ] Temperamento con las siguientes propiedades:
  - ID
  - Nombre


### Backend

Se desarrolló un servidor en Node/Express con las siguientes rutas:

- [ ] __GET /dogs__:
  - Obtiene un listado de las razas de perro
  - Devuelve sólo los datos necesarios para la ruta principal
- [ ] __GET /dogs?name="..."__:
  - Obtiene un listado de las razas de perro que contienen la palabra ingresada como query parameter
  - Si no existe una raza de perro se muestra un mensaje adecuado
- [ ] __GET /dogs/{idRaza}__:
  - Obtiene el detalle de una raza de perro en particular
- [ ] __GET /temperament__:
  - Obtiene todos los temperamentos posibles
- [ ] __POST /dog__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro y crea una raza de perro en la base de datos
 
### Funcionamiento / How it works
Puedes clonar este repositorio y luego realizar npm install tanto en la sección Api como en la Client. Luego ejecuta npm start en ambas secciones.
You can clone this repository and then run npm install in Api and Client sections. After that run npm start in both sections
