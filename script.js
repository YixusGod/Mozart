// const tipoNumber = 2024
// // para guardar constanstante o variable se utiliza el comando cons junto con el nombre de la variable. los tipo number son cons que contienen numero
// const tipoString = "holi" // este tipo de constante tipo son de texto
// const tipoBoolean = true // el tipo de dato booleano es aquel que maneja verdadero o falso
// const tipoUndefinet = undefined // sinonimo de error
// const tipoNull = null // que no existe pero no signica que haya algun error 
// const tipoArray = ["mundo, holi"] // tipo lista 

// console.log(tipoArray.concat(tipoString))

// const tipoObjeto = {
//     raza: "kacri",
//     edad: 10,
//     dueno: "carlos",
//     hambre:false,
// } 

// const funciontipoflecha = () => {
//     //aqui va el codigo
// }

axios.get("https://leonardoapi.onrender.com/songs").then((res) => {
    //guardo la lista de canciones
    const songList = res.data.songs

    

    //recorriendo la lista de canciones
    songList.map((song) => {
        console.log(song)
    })
})