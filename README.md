# Adivina el número

Juego en el navegador hecho con **HTML, CSS y JavaScript puro** (sin librerías).
La computadora piensa un número al azar y tenés **10 intentos** para adivinarlo.

## Cómo se juega

1. Elegí una dificultad: **1-10**, **1-100** o **1-500**.
2. Escribí un número y apretá **adivinar** (o Enter).
3. El juego te da una pista: **más alto** o **más bajo**.
4. Si lo encontrás antes de los 10 intentos, ganás. Si no, te muestra cuál era.
5. Con **reiniciar** empezás una partida nueva.

## Funcionalidades

- Número secreto aleatorio con `Math.random()`
- Tres niveles de dificultad
- Pistas en cada intento
- Contador de intentos con un máximo de 10
- Validación del input vacío
- Botón para reiniciar sin recargar la página

## Tecnologías

- HTML5
- CSS3
- JavaScript (vanilla)

## 🚀 Cómo probarlo

Descargá el repositorio y abrí `index.html` en el navegador. No hace falta instalar nada.

```bash
git clone https://github.com/nazareno11414/adivina-el-numero.git
```

## Qué aprendí

- Manejar el **DOM**: seleccionar elementos, cambiar textos y activar o desactivar botones.
- Usar **eventos** (`click` y `submit`) y `preventDefault()` en formularios.
- Registrar cada listener **una sola vez** y en el evento que corresponde.
- Guardar datos en el HTML con atributos **`data-*`**.
- Separar el **estado** del juego (variables) de lo que se muestra en pantalla.
- Encontrar errores con la **consola del navegador**.

---

Proyecto 1 de mi plan de estudio para ser desarrollador full stack.
