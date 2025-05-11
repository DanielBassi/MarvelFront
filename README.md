# Marvel Web Application - Frontend (Angular 19)

## Requisitos Previos
- Node.js v18 o superior
- Angular CLI 19

## Instalación
```bash
git clone https://github.com/DanielBassi/MarvelFront.git
cd MarvelFront
npm install
ng serve
```

## Configuración
Crear archivo `environment.ts` en `src/environments/`:
```ts
export const environment = {
  production: false,
  apiUrl: 'https://localhost:7185/api/'
};
```

## Estructura y Herramientas
- **Angular 19** + **TypeScript**
- **Services** para llamadas HTTP
- **Interceptors** para agregar JWT
- **Resolvers** para precarga de datos
- **Reactive Forms** y Angular Material para UI

## Funcionalidades
- Registro y login de usuarios
- Listado y detalle de cómics
- Agregar y quitar favoritos
- Visualización personalizada de favoritos

## Buenas Prácticas
- Separación por módulos
- Componentes reutilizables
- Manejo de errores HTTP centralizado
- Lazy loading de módulos

---