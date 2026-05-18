# Rick & Morty Explorer 🛸

Aplicación web en React que consume la [API pública de Rick and Morty](https://rickandmortyapi.com/) para visualizar y explorar los personajes de la serie.

## 🚀 Características

- ✅ Listado de todos los personajes con paginación
- ✅ Filtrado por especie (Human, Alien, Robot, etc.)
- ✅ Búsqueda por nombre con debounce
- ✅ Detalle individual de personaje
- ✅ Navegación con React Router v6
- ✅ Diseño responsivo (mobile, tablet, desktop)
- ✅ Manejo de estados de carga y errores
- ✅ Página 404 personalizada

## 🛠️ Tecnologías

- **React 18** — Framework principal
- **React Router DOM v6** — Gestión de rutas
- **JavaScript ES6+** — Lenguaje base
- **CSS Modules / CSS puro** — Estilos
- **Rick and Morty API** — `https://rickandmortyapi.com/api`

## 📦 Instalación y ejecución

### Prerrequisitos

- Node.js >= 14
- npm >= 6

### Pasos

```bash
# 1. Clona el repositorio
git clone https://github.com/tu-usuario/rick-and-morty-app.git

# 2. Entra al directorio
cd rick-and-morty-app

# 3. Instala las dependencias
npm install

# 4. Inicia el servidor de desarrollo
npm start
```

La aplicación estará disponible en `http://localhost:3000`

### Build para producción

```bash
npm run build
```

## 🗂️ Estructura del proyecto

```
src/
├── components/         # Componentes reutilizables
│   ├── Navbar.jsx      # Barra de navegación
│   ├── CharacterCard.jsx
│   ├── CharacterGrid.jsx
│   ├── LoadingSpinner.jsx
│   └── Pagination.jsx
├── hooks/
│   └── useCharacters.js  # Custom hooks para la API
├── pages/
│   ├── HomePage.jsx       # Todos los personajes
│   ├── FilterPage.jsx     # Filtrado por especie
│   ├── SearchPage.jsx     # Búsqueda por nombre
│   ├── CharacterDetailPage.jsx
│   └── ErrorPage.jsx      # Página 404
├── styles/
│   └── index.css          # Estilos globales
└── App.jsx                # Router principal
```

## 🌐 Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Todos los personajes (paginado) |
| `/filter` | Filtrar por especie |
| `/search` | Búsqueda por nombre |
| `/character/:id` | Detalle de un personaje |
| `*` | Página 404 |

## 📡 API utilizada

- Base URL: `https://rickandmortyapi.com/api/character`
- Documentación: [rickandmortyapi.com/documentation](https://rickandmortyapi.com/documentation)
