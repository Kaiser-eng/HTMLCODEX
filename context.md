Proyecto: Arquitectura Modular de Vistas con EJS
Dirigido a: Estudiantes de 6to. de Secundaria (Desarrollo de Software)

Contexto: Basado en el servidor web funcional con Node.js y Express desarrollado en la práctica anterior.

Objetivo General
Transformar una aplicación web de estructura lineal a una arquitectura modular y escalable, eliminando la duplicidad de código HTML mediante el uso de componentes reutilizables y el paso de datos dinámicos desde el servidor.

Descripción del Desafío
A pesar de que su sitio web actual funciona, el código es ineficiente: cada archivo .ejs repite las mismas líneas para el menú, la cabecera y el pie de página. El reto consiste en refactorizar (reestructurar) el proyecto para que el diseño sea controlado desde archivos únicos y especializados.

1. Segmentación de la Interfaz (Partials)
Debes identificar las secciones comunes de tu sitio web (encabezado técnico, barra de navegación y pie de página) y extraerlas a archivos independientes. Las páginas principales (index, servicios, etc.) ya no deben contener la estructura completa de HTML, sino que deben "armarse" llamando a estos segmentos.

2. Inyección de Datos Dinámicos
El servidor debe ser el encargado de enviar la información que varía en cada página. Debes demostrar que puedes cambiar el contenido de una sección común (como el título que aparece en la pestaña del navegador) enviando variables distintas desde cada ruta del servidor.

3. Componentes de Contenido Repetitivo (Tarjetas)
Para la sección de productos o servicios, no está permitido escribir el código HTML de cada tarjeta manualmente. Debes:

Crear un archivo exclusivo para el diseño de una única tarjeta.

En el servidor, definir una estructura de datos (arreglo de objetos) con la información de los productos o servicios.

Lograr que la página principal recorra esos datos y genere automáticamente las tarjetas necesarias, inyectando la información correspondiente en el componente de tarjeta creado.

Requisitos de Entrega
Cero Redundancia: No debe existir código de estructura HTML (etiquetas head, nav o footer) repetido en los archivos de las vistas principales.

Mantenibilidad: Si se realiza un cambio en el archivo del pie de página, este debe verse reflejado en todas las rutas del sitio sin tocar otros archivos.

Automatización: El listado de productos debe generarse dinámicamente; si se agrega un nuevo objeto al arreglo en el servidor, la interfaz debe mostrar la nueva tarjeta sin modificar el código HTML/EJS.

Investigación: Es responsabilidad del estudiante investigar la sintaxis correcta para la inclusión de archivos y el paso de parámetros entre plantillas en EJS.