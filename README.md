# shopping cart

¡Bienvenido al repositorio del proyecto final de mi curso en CODERHAUSE! En este proyecto, he creado un carrito de compras utilizando tecnologías como **React**, **React-Bootstrap**, **Firebase** y **React-Router-DOM**, con la configuración inicial del proyecto realizada mediante **Create-React-App**.

## Description

Nuestro proyecto se enfocó en desarrollar una plataforma de compras en línea que ofrece una interfaz de usuario intuitiva y amigable. Los usuarios pueden explorar fácilmente un amplio listado de productos con información detallada para tomar decisiones informadas. Además, se implementó la capacidad de agregar productos al carrito de forma rápida y sencilla.

Una de las características destacadas es la actualización en tiempo real de la cantidad de productos en el carrito. Esto permite a los usuarios realizar un seguimiento preciso de su selección y ajustarla según sea necesario. También se facilita la eliminación de productos del carrito con solo unos pocos clics.

La plataforma ofrece la funcionalidad de generar órdenes de compra, y los usuarios pueden acceder a ellas en cualquier momento para revisar los detalles y realizar un seguimiento de sus compras. Para garantizar la seguridad y la persistencia de los datos, hemos integrado la potente tecnología de Firebase, que asegura que la información de los usuarios y las órdenes se mantengan seguras y accesibles en todo momento.

En resumen, nuestro proyecto ofrece una experiencia de compra en línea mejorada, con una interfaz intuitiva, capacidad de agregar productos fácilmente, actualizaciones en tiempo real, generación de órdenes de compra y una sólida persistencia de datos respaldada por Firebase.



### Techs

- **HTML,CSS**
-**JAVASCRIPT**
- **React**
- **React-Bootstrap**
- **Firebase**: Firebase es una plataforma de desarrollo de aplicaciones de Google que ofrece características como autenticación de usuarios, almacenamiento en la nube y base de datos en tiempo real. Es fácil de integrar y confiable para la gestión de datos. En resumen, Firebase simplifica el desarrollo de aplicaciones.

### Install

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. Clona este repositorio en tu máquina local utilizando el siguiente comando:

git clone 'https://github.com/Ariel1795/proyectoFinal-March.git'
2. Navega al directorio raíz del proyecto:

cd proyecto-final-march

3. Instala las dependencias del proyecto: 

npm install

4. Para comenzar a utilizar Firebase, es necesario configurar tus credenciales. Asegúrate de tener una cuenta de Firebase creada y un proyecto nuevo configurado. Luego, simplemente sigue estos pasos:

   a. Abre el archivo `services/db.js` en tu editor de texto.

   b. Reemplaza el contenido actual con la siguiente configuración de Firebase:

```javascript
// Importa las funciones que necesitas de los SDK que requieras
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};

// Inicializa Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
```

Recuerda reemplazar `"TU_API_KEY"`, `"TU_AUTH_DOMAIN"`, `"TU_PROJECT_ID"`, `"TU_STORAGE_BUCKET"`, `"TU_SENDER_ID"`, y `"TU_APP_ID"` con las credenciales correctas de tu proyecto de Firebase. Espero que esto sea de ayuda.

5. Inicia la aplicación: 

npm start

La aplicación estará disponible en http://localhost:3000.

