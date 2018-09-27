
# SalaDeJuegos
https://octaviovillegas.github.io/TP_LAV4_2017/

Versiones:
npm -v: 6.4.0
ng version: 6.1.5

npm install -g npm@latest

npm install -g @angular/cli

Herramientas:
https://github.com/angular/angular-cli/wiki

ng serve --open

Host:
https://cpanel.hostinger.com.ar
Filezilla

Implementación:
ng build

El contenido de la carpeta dist copiar en el ftp (filezilla) directamente en public_html y funca:
http://pizzatppizza.esy.es/

Cambio el favi.ico:
https://www.favicon-generator.org

Para generar un componente:

ng g component componentes/piedra-papel-tijera

Desarrollo del nuevo juego: 
componente fanticos
menu-card
clases: juego-fanaticos.ts 


Creación de tabla inteligente

https://www.npmjs.com/package/ng2-smart-table

npm install --save ng2-smart-table

(Se crea en el package.json:  "ng2-smart-table": "^1.3.5")

Si tira error al ng2 smart al compiltar la siguiente linea :
npm install ng2-completer --save-dev


Cuando tira error de versiones:

npm uninstall ng2-smart-table

luego agrega la versión específica

npm install ng2-smart-table@1.2.0

npm install
