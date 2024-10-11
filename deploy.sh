#!/bin/bash

# Asegurarse de que el script se detenga si ocurre un error
set -e

# Paso 1: Crear el build de producción
echo "Generando el build de producción..."
npm run build

# Paso 2: Cambiar a la rama gh-pages o crearla si no existe
echo "Cambiando a la rama gh-pages..."
git checkout gh-pages || git checkout --orphan gh-pages

# Paso 3: Eliminar todos los archivos antiguos
echo "Eliminando archivos antiguos de gh-pages..."
git rm -rf .

# Paso 4: Copiar los archivos del directorio build
echo "Copiando archivos del build a la rama gh-pages..."
git --work-tree build add --all

# Paso 5: Hacer commit del contenido del build
echo "Haciendo commit del nuevo build..."
git --work-tree build commit -m "Deploy React app to GitHub Pages"

# Paso 6: Subir los cambios a GitHub en la rama gh-pages
echo "Subiendo los cambios a GitHub..."
git push origin gh-pages --force

# Paso 7: Volver a la rama principal (main o master)
echo "Volviendo a la rama principal..."
git checkout main  # O "git checkout master" si tu rama principal es master

echo "¡Despliegue completado!"
