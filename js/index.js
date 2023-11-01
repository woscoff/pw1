const albumesArray = [
    {
        nombreAlbum: "Ramones",
        nombreCancion: "Blitzkrieg Bop",
        descripcion: "El álbum 'Ramones' es el debut de la banda de punk rock Ramones, lanzado el 23 de abril de 1976. Esta canción, 'Blitzkrieg Bop', es una de las pistas icónicas del álbum y es conocida por su energía cruda y su influencia en la música punk.",
        duracion: "2:14",
        vistas: 2100000
    },
    {
        nombreAlbum: "The Beatles",
        nombreCancion: "While My Guitar Gently Weeps",
        descripcion: "El álbum homónimo de The Beatles, también conocido como el Álbum Blanco, fue lanzado en 1968. Esta canción, 'While My Guitar Gently Weeps', es una de las pistas destacadas del álbum y presenta una emotiva interpretación de George Harrison en la guitarra.",
        duracion: "4:45",
        vistas: 3200000
    },
    {
        nombreAlbum: "Queen",
        nombreCancion: "Bohemian Rhapsody",
        descripcion: "El álbum homónimo de Queen fue lanzado en 1973 y marca el inicio de la carrera de la banda. La icónica 'Bohemian Rhapsody' es una de las canciones más destacadas del álbum y se ha convertido en un himno del rock.",
        duracion: "5:55",
        vistas: 4500000
    },
    {
        nombreAlbum: "Red Hot Chili Peppers",
        nombreCancion: "Give It Away",
        descripcion: "El álbum 'Blood Sugar Sex Magik' de los Red Hot Chili Peppers, lanzado en 1991, destacó por su fusión de rock alternativo y funk. 'Give It Away' es una de las pistas más famosas del álbum y ganadora de un premio Grammy.",
        duracion: "4:43",
        vistas: 2700000
    },
    {
        nombreAlbum: "Foo Fighters",
        nombreCancion: "Everlong",
        descripcion: "El álbum 'The Colour and the Shape' de los Foo Fighters, lanzado en 1997, incluye la emotiva canción 'Everlong'. La canción refleja un proceso creativo emocional para Dave Grohl y la banda.",
        duracion: "4:10",
        vistas: 3800000
    },
    {
        nombreAlbum: "Pink Floyd",
        nombreCancion: "Comfortably Numb",
        descripcion: "El álbum conceptual 'The Wall' de Pink Floyd, lanzado en 1979, incluye la icónica 'Comfortably Numb'. El proceso creativo para este álbum fue ambicioso y reflexivo, y la canción ha perdurado como un clásico del rock.",
        duracion: "6:22",
        vistas: 5200000
    },
    {
        nombreAlbum: "U2",
        nombreCancion: "With or Without You",
        descripcion: "El álbum 'The Joshua Tree' de U2, lanzado en 1987, incluye el éxito 'With or Without You'. La creación de este álbum fue una experiencia espiritual para la banda, y su música continúa inspirando a muchas generaciones.",
        duracion: "4:56",
        vistas: 2900000
    },
    {
        nombreAlbum: "Nirvana",
        nombreCancion: "Smells Like Teen Spirit",
        descripcion: "El álbum 'Nevermind' de Nirvana, lanzado en 1991, cambió la música para siempre. 'Smells Like Teen Spirit' es una de las canciones más influyentes de la historia del rock, y el proceso creativo fue un viaje emocional para Kurt Cobain y la banda.",
        duracion: "5:02",
        vistas: 4200000
    },
    {
        nombreAlbum: "Nirvana",
        nombreCancion: "Smells Like Teen Rolling",
        descripcion: "El álbum 'Nevermind' de Nirvana, lanzado en 1991, cambió la música para siempre. 'Smells Like Teen Spirit' es una de las canciones más influyentes de la historia del rock, y el proceso creativo fue un viaje emocional para Kurt Cobain y la banda.",
        duracion: "5:02",
        vistas: 4200000
    }
];



const estrellaAmarilla= document.getElementsByClassName("favAlbumSonando")
for(let i =0; i< estrellaAmarilla.length;i++){
 const getLocalStorage = localStorage.getItem("listaFavorita");
    const objetoLocal = JSON.parse(getLocalStorage);
    let estrellaSrc = estrellaAmarilla[i].parentElement.children[0].children[0]?.src;

    
    if (estrellaSrc) {
     
        for(let j in objetoLocal){
            if(objetoLocal[j].imgCancion === estrellaSrc){
              
                estrellaAmarilla[i].parentElement.children[0].parentElement.children[1].src= "../assets/estrellaAmarilla.png"
            }
        }
  
    }


  

    estrellaAmarilla[i].addEventListener("click", ()=>{
        if(estrellaAmarilla[i].src === "http://127.0.0.1:5500/assets/estrella1.png"){
            const img=estrellaAmarilla[i].parentElement.children[0].children[0].src
            const getLocalStorage= localStorage.getItem("listaFavorita")
            if(getLocalStorage){
                const objetoLocal= JSON.parse(getLocalStorage)
                objetoLocal.push({imgCancion:img, ...albumesArray[i]})
                localStorage.setItem("listaFavorita", JSON.stringify(objetoLocal))
                estrellaAmarilla[i].src="../assets/estrellaAmarilla.png"
            }else{
                const setLocalStorage=[{imgCancion:img, ...albumesArray[i]}]
                localStorage.setItem("listaFavorita", JSON.stringify(setLocalStorage))
                estrellaAmarilla[i].src="../assets/estrellaAmarilla.png"
            }
        }else{
            const getLocalStorage= localStorage.getItem("listaFavorita")
            const objetoLocal= JSON.parse(getLocalStorage)
            const nuevoArray =objetoLocal.filter(el=>el.nombreCancion !== albumesArray[i].nombreCancion)
            localStorage.setItem("listaFavorita", JSON.stringify(nuevoArray))
            estrellaAmarilla[i].src = "assets/estrella1.png"
        }

    })
}