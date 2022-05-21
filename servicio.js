//PASOS PARA CONSUMIR UN API

//1. PA ONDE VOY? (CONOCER URI DEL SERVICIO O API A CONSUMIR)
const URI='https://api.spotify.com/v1/artists/4jirsf9rymh8ajWTRRnF5g/top-tracks?market=US'


import {consultar} from './consultas.js'
import {generarToken} from './generar.js'


let token=await generarToken()
console.log(token)

//2. ARMO LA PETICION (que vas a hacer ome?)
const TOKEN='Bearer BQADx80xIoJpqNgmA6BbVBgmqekcfh5GmxV6RJy3n3kVOjPpcW_JBxKmWhlr8yXs2X_OlQH6JvZvhwXy3GU0ZAu59M8t-BSK7SOb1NQGmjMcA_0PWBooT1TjT_LC4qszsTA0nRKI6eVo1HHuOf0'
const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN}
}





let canciones= await consultar(URI,PETICION)
console.log(canciones)


//FUNCION PARA PINTAR LA INFO QUE LLEGA DEL API
/*function pintarCanciones(canciones){
   
    let fila=document.getElementById("fila")

    //recorro el arreglo de canciones
    canciones.tracks.forEach(function(cancion){
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)

        //crear una columna para cada cancion
        let columna=document.createElement("div")
        columna.classList.add("col")

        //creo la tarjeta
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100")

        //creo la foto
        let foto=document.createElement("img")
        foto.src=cancion.album.images[0].url
        foto.classList.add("card-img-top")

        //creo el audio
        let audio=document.createElement("audio")
        audio.src=cancion.preview_url
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")

        //PADRES E HIJOS
        tarjeta.appendChild(foto)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })
}*/