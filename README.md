<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/img/caudex-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="assets/img/caudex-light.svg">
    <img src="assets/img/caudex-light.svg" width="200" alt="Caudex">
  </picture>
</p>

<h6 align="center">Growing roots for future software.</h6>

<br>

Bienvenido al repositorio del sitio web oficial de **Caudex**.

En este espacio recopilamos y presentamos los proyectos, desarrollos y herramientas en los que trabajamos como equipo.

🔗 **Visita nuestro sitio:** [caudex-nox.github.io](https://caudex-nox.github.io)

---

### 🚀 Stack Tecnológico

* **Framework:** [Astro](https://astro.build/)
* **Gestor de paquetes:** [pnpm](https://pnpm.io/)
* **Tipado:** TypeScript
* **Despliegue:** GitHub Actions & GitHub Pages

---

### 🛠️ Desarrollo Local

Asegúrate de tener instalados **Node.js** (v20 o superior) y **pnpm**.

```bash
# 1. Instalar dependencias
pnpm install

# 2. Iniciar servidor de desarrollo local (con hot reload)
pnpm dev

# 3. Compilar para producción (genera la carpeta dist/)
pnpm build

# 4. Previsualizar la compilación localmente
pnpm preview
```

---

### 🌐 Despliegue en GitHub Pages

El despliegue está automatizado con **GitHub Actions** en `.github/workflows/deploy.yml`.

1. En el repositorio de GitHub, ve a **Settings** > **Pages**.
2. En la sección **Build and deployment**, bajo **Source**, selecciona **GitHub Actions**.
3. Cada push a la rama `main` compilará el sitio con Astro y lo desplegará automáticamente. También puedes activar el despliegue manual desde la pestaña **Actions** (vía `workflow_dispatch`).

---

*Mantenido por el equipo de Caudex.*
