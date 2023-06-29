## Nombre del proyecto

Proyecto JavaScript para obtener información de una dirección IP.

## Descripción

Este proyecto utiliza JavaScript para realizar una solicitud a la API de RapidAPI para obtener información geográfica sobre una dirección IP específica. La información obtenida se muestra en la página web.

## Instalación

1. Clona el repositorio o descarga los archivos del proyecto.

```shell
git clone <URL_DEL_REPOSITORIO>
```

2. Abre el archivo `index.html` en un navegador web.

## Uso

1. Ingresa una dirección IP en el campo de entrada.
2. Haz clic en el botón "Submit" para enviar la solicitud a la API.
3. La información geográfica correspondiente a la dirección IP se mostrará en la sección de resultados.

## Configuración

El archivo `index.js` contiene la configuración de la solicitud a la API. Asegúrate de que el valor de la clave 'X-RapidAPI-Key' sea válido y esté autorizado para acceder a la API de RapidAPI.

```javascript
const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6275d0b2d5msh980a6cf2a2ab283p1fb68fjsn4e10ec9d9987',
		'X-RapidAPI-Host': 'ip-to-location3.p.rapidapi.com'
	}
};
```

## Dependencias

No se requieren dependencias adicionales para ejecutar este proyecto.

## Contribución

Si deseas contribuir a este proyecto, sigue los pasos:

1. Realiza un fork del repositorio.
2. Crea una nueva rama con tu nueva función o corrección de errores: `git checkout -b mi-funcion`
3. Realiza los cambios necesarios y realiza los commits: `git commit -m 'Agregar nueva función'`
4. Envía tus cambios al repositorio remoto: `git push origin mi-funcion`
5. Crea una solicitud de extracción en el repositorio original.

## Licencia

Este proyecto está bajo la Licencia MIT. Puedes consultar el archivo [LICENSE](LICENSE) para obtener más información.