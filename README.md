# PathWise - E-Learning Intergeneracional

## Descripción del Proyecto

PathWise (nombre temporal basado en los mockups) es una plataforma e-learning diseñada con el objetivo de **conectar generaciones a través del aprendizaje** y romper la brecha digital.

La aplicación permite a:

- **Profesores (adultos mayores):** Crear y gestionar actividades o cursos, compartir su sabiduría y experiencia vital, y responder preguntas de los alumnos.
- **Alumnos (jóvenes):** Explorar e inscribirse en actividades, aprender de los mayores, hacer preguntas y participar en la comunidad.
- **Administradores:** Gestionar usuarios y supervisar la plataforma.

Se busca construir una sociedad más unida, donde la tecnología facilite la creación de vínculos reales entre generaciones.

## Tecnologías Utilizadas

- **Frontend:**
  - React
  - TypeScript
  - Vite
  - Tailwind CSS
  - React Router
  - Redux Toolkit (para gestión de estado)
- **Backend:**
  - Node.js
  - Express
  - MongoDB (con Mongoose)
  - JWT (para autenticación)

## Funcionalidades Principales (Frontend)

- Registro e Inicio de Sesión (con roles: alumno, profesor, admin)
- Visualización de Actividades
- Creación de Actividades (profesores)
- Inscripción en Actividades (alumnos)
- Sistema de Preguntas y Respuestas dentro de las actividades
- Gestión de Usuarios (administradores)
- Página "About" describiendo el proyecto
- Página de Bienvenida/Homepage
- Perfil de Usuario (básico)

## Configuración y Puesta en Marcha

### Prerrequisitos

- Node.js (v18 o superior recomendado)
- npm o yarn
- Una instancia de MongoDB (local o en la nube)

### Backend

1.  Navega al directorio `backend`:
    ```bash
    cd backend
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    # o
    # yarn install
    ```
3.  Crea un archivo `.env` en el directorio `backend` basado en `.env.example` (si existe) y configura las variables de entorno, especialmente:
    - `MONGODB_URI`: Tu connection string de MongoDB.
    - `JWT_SECRET`: Un secreto seguro para firmar los tokens JWT.
    - `PORT`: El puerto donde correrá el servidor (e.g., 5000).
4.  Inicia el servidor backend:
    ```bash
    npm run dev
    # o
    # yarn dev
    ```

### Frontend

1.  Navega al directorio `frontend`:
    ```bash
    cd ../frontend
    # o desde la raíz: cd frontend
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    # o
    # yarn install
    ```
3.  Asegúrate de que la URL del backend esté correctamente configurada (generalmente en los slices de Redux o en un archivo de configuración de API).
4.  Inicia la aplicación frontend:
    ```bash
    npm run dev
    # o
    # yarn dev
    ```

La aplicación frontend debería estar disponible en `http://localhost:5173` (o el puerto que indique Vite) y comunicarse con el backend.

## Próximos Pasos / Mejoras (Opcional)

- Implementar Dropdowns en Navbar.
- Mejorar gestión de errores y feedback al usuario.
- Añadir tests unitarios y de integración.
- Optimizar rendimiento y accesibilidad.
- Refinar el diseño UI/UX.
