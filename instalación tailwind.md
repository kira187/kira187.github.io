1. Instalar Node
2. Inicalizar archivo **package.json** con comando: `npm init`
3. Instalar paquetes necesarios `npm install -D tailwindcss@2.0.3 postcss@8.2.6 autoprefixer@10.2.4 --save-dev`
4. comprobar version de tailwind con `npx tailwindcss --v`

5. Crear directorio **src** donde estaran los estilos sin compilar y la carpeta **styles** que seran los archivos compilados
6. Para compilarlos hay que ejecutar el comando `npx tailwindcss build ./src/styles.css -o ./css/styles.css`

6.1 Si quieres ejecutar el comando de compilado mas corto se puede agregar en el archivo **package.json** dentro de la section **scripts**  el comando del punto 6. Algo como lo siguiente `"build": "tailwindcss build ./src/styles.css -o ./css/styles.css"`
En la terminal deberas de ejecutar con `npm run build`

