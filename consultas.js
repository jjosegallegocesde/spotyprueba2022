export async function consultar(URI,PETICION){

    let respuesta=await fetch(URI,PETICION)
    return respuesta.json()

}