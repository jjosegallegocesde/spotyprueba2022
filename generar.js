//RUTINA PARA CONSUMIR API CON METODO POST}


export async function generarToken(){

    const URIPOST='https://accounts.spotify.com/api/token'

    //2. alamceno los datos que voy a enviar
    let dato1='client_id=c87e5cfef18549158e7252515aa4e3d2'
    let dato2='client_secret=3bf1f55584a940648338be13dca10f09'
    let dato3='grant_type=client_credentials'

    //3 configuro la peticion
    const PETICIONPOST={
        method:"POST",
        headers:{
            "Content-type":"application/x-www-form-urlencoded"
        },
        body:dato1+'&'+dato2+'&'+dato3
    }

    let respuesta=await fetch(URIPOST,PETICIONPOST)
    return respuesta.json()

}
