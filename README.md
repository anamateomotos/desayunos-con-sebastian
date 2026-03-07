# Desayunos con Sebastián

## Setup local

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` en el navegador.

## Añadir capítulos

Edita `src/data/chapters.js` — simplemente añade más objetos al array.

## Deploy en Vercel

1. Sube este proyecto a un repo de GitHub
2. Ve a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub
3. Haz clic en "Add New Project" → selecciona tu repo
4. Vercel detecta Vite automáticamente. Haz clic en "Deploy"
5. Cada push a `main` hace redeploy automático
