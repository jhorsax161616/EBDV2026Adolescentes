# EBDV 2026 - Puerto Seguro

Este proyecto es una aplicación web estática construida con **Astro** y **Tailwind CSS** para gestionar los puntos y asistencia de la EBDV 2026 "Puerto Seguro".

## Características

- **Diseño Temático**: Estilo playero/náutico basado en "Puerto Seguro".
- **Datos Estáticos**: La información se gestiona desde un archivo local, sin necesidad de base de datos.
- **Puntuación Automática**: Los puntos grupales se calculan automáticamente sumando los puntos de los integrantes.
- **Control de Asistencia**: Visualización de asistencia de Lunes a Viernes.

## Instalación y Uso

1.  **Instalar dependencias**:
    ```bash
    npm install
    ```

2.  **Iniciar servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    Abre tu navegador en `http://localhost:4321`.

3.  **Construir para producción**:
    ```bash
    npm run build
    ```
    Los archivos generados estarán en la carpeta `dist/`.

## Gestión de Datos

Para actualizar los grupos, integrantes, asistencia y puntos, edita el archivo:
`src/data/groups.ts`

El formato es el siguiente:

```typescript
export const groups = [
  {
    name: "Nombre del Grupo",
    members: [
      {
        name: "Nombre del Integrante",
        points: 50, // Puntos individuales
        attendance: { 
            monday: true,   // Asistió el Lunes
            tuesday: true,  // Asistió el Martes
            wednesday: false, // Faltó el Miércoles
            thursday: true, 
            friday: true 
        }
      },
      // ... más integrantes
    ]
  },
  // ... más grupos
];
```

## Despliegue en GitHub Pages

1.  Sube este código a un repositorio de GitHub.
2.  Configura GitHub Pages para desplegar desde la rama `main` (o la que uses) y la carpeta raíz, o utiliza una GitHub Action para construir Astro.
3.  **Importante**: Si tu repositorio no está en la raíz de tu dominio (ej. `tu-usuario.github.io/mi-proyecto`), necesitas configurar la propiedad `base` en `astro.config.mjs`:

    ```javascript
    export default defineConfig({
      site: 'https://tu-usuario.github.io',
      base: '/mi-proyecto', // El nombre de tu repositorio
      integrations: [tailwind()],
    });
    ```
