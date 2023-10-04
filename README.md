# Ejercicio en JavaScript: Contador de Caracteres

## Objetivo

El objetivo de este ejercicio es desarrollar una función en JavaScript que cuente cuántas veces aparece un carácter específico en un texto dado.

## Requisitos

1. Crea una función llamada `countCharacterInText` que tome dos parámetros: `text` (el texto en el que se buscará el carácter) y `char` (el carácter que se contará en el texto).

2. La función debe contar cuántas veces aparece el carácter `caracter` en el `texto` y devolver el resultado.

3. Crea una interfaz de usuario (HTML) que incluya:
   - Un campo de entrada de texto donde el usuario pueda ingresar el texto en el que se buscará el carácter.
   - Un campo de entrada donde el usuario pueda ingresar el carácter que desea buscar.
   - Un botón para iniciar la búsqueda.
   - Un área de resultado para mostrar el número de coincidencias.

4. Estiliza la interfaz de usuario utilizando Bootstrap 6 para lograr una apariencia atractiva y amigable.

5. Implementa la lógica en JavaScript para llamar a la función `countCharacter` cuando se haga clic en el botón de búsqueda y muestra el resultado en el área de resultado.

## Ejemplo de Uso

```javascript

const exampleText = "This is an example text for counting characters.";
const characterToCount = "e";

const result = countCharacterInText(exampleText, characterToCount);
console.log(`The character '${characterToCount}' appears ${result} times in the text.`);
```

## Contribución

¡Siéntete libre de contribuir a este proyecto! Puedes mejorar la interfaz de usuario, agregar validaciones adicionales o realizar cualquier otro tipo de mejora que consideres necesaria. Aquí te indicamos cómo puedes hacerlo:

1. **Fork del Repositorio**: Haz un fork de este repositorio haciendo clic en el botón "Fork" en la esquina superior derecha de esta página. Esto creará una copia del repositorio en tu propia cuenta de GitHub.

2. **Clonar el Repositorio**: Clona el repositorio desde tu cuenta de GitHub a tu máquina local. 

3. **Crear una Rama**: Crea una nueva rama en tu repositorio local para realizar tus cambios. Puedes nombrar la rama de acuerdo a la función que estás implementando o cualquier otro nombre descriptivo.

    ```shell
    git checkout -b mi-rama
    ```
4. **Realizar Cambios**: Haz los cambios necesarios en los archivos JavaScript o HTML para implementar mejoras o correcciones. Asegúrate de seguir las mejores prácticas de codificación y prueba tus cambios localmente.

5. **Commit de Cambios**: Realiza un commit de tus cambios con un mensaje descriptivo:

    ```shell
    git add .
    git commit -m "verbo: Agregado funcionalidad de..."
    ```
6. **Push a GitHub**: Sube tus cambios a tu repositorio en GitHub:

    ```shell    
    git push origin mi-rama
    ```
6. **Solicitud de Pull Request (PR)**: Ve a la página de tu repositorio en GitHub y selecciona la rama que has creado. Luego, haz clic en el botón "Pull Request". Describe tus cambios en el PR y envíalo.

7. **Revisión y Comentarios**: Espera a que los colaboradores revisen tu PR. Puede que te pidan hacer ajustes antes de que se apruebe.

8. **Aprobación y Fusión**: Una vez que tus cambios sean aprobados, un colaborador del proyecto fusionará tus cambios con la rama principal.

9. **Limpieza**: Después de que tu PR sea fusionado, puedes eliminar la rama de tu repositorio local y remoto si ya no la necesitas.

    ```shell
    git branch -d mi-rama
    git push origin --delete mi-rama
    ```