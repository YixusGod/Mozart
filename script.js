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
    const tracklist = document.getElementById("track-list")
    //recorriendo la lista de canciones
    songList.map((song) => {
        console.log(song)

        const div = document.createElement("div")
        div.classList.add("canciones")
        div.innerHTML = `
            <button><img src="${song.path.front}" alt=""></button>
            <p><b>${song.title}</b></p>
            <p>${song.author}</p>
        `
        //antes de agregar el elemento 
        //agregarle la interactividad 

        div.addEventListener('click', () => {
            //lo que se escriba aparecera en el evento
            document.getElementById('portada').setAttribute('src', song.path.front)
            document.getElementById('nombre').innerHTML = song.tittle
            document.getElementById('artista').innerHTML = song.author
            const audio = document.getElementById('audio')
            document.getElementById('audio').setAttribute('src', song.path.audio)

            document.getElementById('duracion').innerHTML = song.duration

            document.getElementById('paused').addEventListener('click', () => {
                if (audio.paused) {
                    audio.play()
                }
                else {
                    audio.pause()
                }
            })
        })
        tracklist.appendChild(div)
    })
})