# Pruebas unitarias con Jest y Supertest

Este proyecto tiene como propósito hacer un ejemplo básico de pruebas unitarias con Jest y Supertest.

Jest es un framework de testing para comparar y validar objetos.
Supertest es un módulo de node que se usa para hacer las peticiones al backend para hacer las pruebas.

### Instalar librerías

Express
```
npm install express
```

Jest y supertest
```
npm install -D jest supertest
```

*NOTA: Para que se pueda usar *import* y *export* en los archivos .js se debe agregar la siguiente opción al archivo *package.json*

```json
"type": "module",
```

Con esta instrucción, al importar un nuevo módulo se debe agregar la extensión. Ejm.: import modulo from 'modulo.js'

## Crear los tests
Se puede crear una carpeta llamada *tests* (esto es opcional) para colocar los archivos de testing. Es importante que los archivos terminen en *.spec.js* o *.test.js* para que jest los pueda reconocer como archivos de testing.

Funciones de Jest:
- describe(): Es una sección donde se van a agrupar varios tests.
- test(): determina el test específico que se va a ejecutar.

## Ejecutar tests
Para ejecutar los test se usa la siguiente instrucción:
```
set NODE_OPTIONS=--experimental-vm-modules && jest
```

* El *set NODE_OPTIONS=--experimental-vm-modules* es para que reconozca el uso de import y export.

Lo ideal es colocar ese comando en el package.json, en la parte de *scripts.js*
```json
"scripts": {
    "test": "set NODE_OPTIONS=--experimental-vm-modules && jest"
  }
```

Así, para ejecutar los tests solo sería necesario ejecutar lo siguiente:
```
npm run test
```