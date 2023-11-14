const albums = [
    {
        "id": 0,
        "nombreAlbum": "Ramones",
        "imagen": "../assets/ramonesAlbum.jpg",
        "canciones": [
            {
                "nombreCancion": "Blitzkrieg Bop",
                "descripcionCancion": "Esta canción es una de las pistas icónicas del álbum y es conocida por su energía cruda y su influencia en la música punk.",
                "duracion": "2:14",
                "vistas": 2100000,
                "id": 0
            },
            {
                "nombreCancion": "I Wanna Be Your Boyfriend",
                "descripcionCancion": "Otra canción destacada del álbum con un sonido melódico y pegajoso.",
                "duracion": "2:24",
                "vistas": 1700000,
                "id": 1
            },
            {
                "nombreCancion": "Now I Wanna Sniff Some Glue",
                "descripcionCancion": "Una canción corta y enérgica que captura la actitud punk del álbum.",
                "duracion": "1:35",
                "vistas": 1200000,
                "id": 2
            }
        ]
    },
    {
        "id": 1,
        "nombreAlbum": "The Beatles",
        "imagen": "../assets/beatlesAlbum.jpg",
        "canciones": [
            {
                "nombreCancion": "While My Guitar Gently Weeps",
                "descripcionCancion": "Una canción emotiva con una destacada interpretación de George Harrison en la guitarra.",
                "duracion": "4:45",
                "vistas": 3200000,
                "id": 0
            },
            {
                "nombreCancion": "Blackbird",
                "descripcionCancion": "Una hermosa balada con guitarra acústica interpretada por Paul McCartney.",
                "duracion": "2:18",
                "vistas": 2500000,
                "id": 1
            },
            {
                "nombreCancion": "Come Together",
                "descripcionCancion": "Una canción emblemática con un ritmo distintivo y letras sugerentes.",
                "duracion": "4:20",
                "vistas": 3800000,
                "id": 2
            },
            {
                "nombreCancion": "Here Comes the Sun",
                "descripcionCancion": "Una canción optimista con la guitarra de George Harrison y armonías vocales encantadoras.",
                "duracion": "3:05",
                "vistas": 2800000,
                "id": 3
            },
            {
                "nombreCancion": "Lucy in the Sky with Diamonds",
                "descripcionCancion": "Una canción psicodélica con letras surrealistas y un sonido distintivo de los Beatles.",
                "duracion": "3:28",
                "vistas": 2900000,
                "id": 4
            }
        ]
    },
    {
        "id": 2,
        "nombreAlbum": "Queen",
        "imagen": "../assets/queenAlbum.jpeg",
        "canciones": [
            {
                "nombreCancion": "Bohemian Rhapsody",
                "descripcionCancion": "La icónica 'Bohemian Rhapsody' es una de las canciones más destacadas del álbum y se ha convertido en un himno del rock. Con una duración de 5 minutos y 55 segundos, esta canción ha acumulado 4,500,000 vistas.",
                "duracion": "5:55",
                "vistas": 4500000,
                "id": 0
            },
            {
                "nombreCancion": "Another One Bites the Dust",
                "descripcionCancion": "Una canción de ritmo pegajoso con un bajo prominente, 'Another One Bites the Dust' es un clásico de Queen. Con una duración de 3 minutos y 36 segundos, ha acumulado 3,200,000 vistas.",
                "duracion": "3:36",
                "vistas": 3200000,
                "id": 1
            },
            {
                "nombreCancion": "We Will Rock You",
                "descripcionCancion": "Este himno del rock es conocido por su poderoso ritmo de palmadas y letras simples pero impactantes. Con una duración de 2 minutos y 2 segundos, ha acumulado 2,800,000 vistas.",
                "duracion": "2:02",
                "vistas": 2800000,
                "id": 2
            },
            {
                "nombreCancion": "Radio Ga Ga",
                "descripcionCancion": "Una canción con un mensaje sobre la importancia de la comunicación y la radio. Con una duración de 5 minutos y 43 segundos, ha acumulado 3,900,000 vistas.",
                "duracion": "5:43",
                "vistas": 3900000,
                "id": 3
            },
            {
                "nombreCancion": "Under Pressure",
                "descripcionCancion": "Una colaboración entre Queen y David Bowie, 'Under Pressure' es conocida por su distintivo bajo y las voces de Freddie Mercury y David Bowie. Con una duración de 4 minutos y 8 segundos, ha acumulado 3,600,000 vistas.",
                "duracion": "4:08",
                "vistas": 3600000,
                "id": 4
            }
        ]
    },
    {
        "id": 3,
        "nombreAlbum": "Red Hot Chili Peppers",
        "imagen": "../assets/redhotAlbum.jpg",
        "canciones": [
            {
                "nombreCancion": "Give It Away",
                "descripcionCancion": "Una de las canciones más icónicas de Red Hot Chili Peppers, 'Give It Away' fusiona el rock alternativo con el funk. Con una duración de 4 minutos y 43 segundos, ha acumulado 2,700,000 vistas.",
                "duracion": "4:43",
                "vistas": 2700000,
                "id": 0
            },
            {
                "nombreCancion": "Under the Bridge",
                "descripcionCancion": "Esta emotiva canción presenta una introspección lírica y una interpretación vocal apasionada. Con una duración de 4 minutos y 25 segundos, ha acumulado 3,100,000 vistas.",
                "duracion": "4:25",
                "vistas": 3100000,
                "id": 1
            },
            {
                "nombreCancion": "Californication",
                "descripcionCancion": "Una canción que aborda temas de la cultura pop y la decadencia de Hollywood. Con una duración de 5 minutos y 29 segundos, ha acumulado 3,500,000 vistas.",
                "duracion": "5:29",
                "vistas": 3500000,
                "id": 2
            },
            {
                "nombreCancion": "By the Way",
                "descripcionCancion": "Un himno enérgico con guitarras vibrantes y letras enigmáticas. Con una duración de 3 minutos y 37 segundos, ha acumulado 2,800,000 vistas.",
                "duracion": "3:37",
                "vistas": 2800000,
                "id": 3
            },
            {
                "nombreCancion": "Scar Tissue",
                "descripcionCancion": "Una canción melódica y emotiva con un toque de blues rock. Con una duración de 3 minutos y 38 segundos, ha acumulado 2,900,000 vistas.",
                "duracion": "3:38",
                "vistas": 2900000,
                "id": 4
            }
        ]
    },
    {
        "id": 4,
        "nombreAlbum": "Foo Fighter",
        "imagen": "../assets/fooFightersAlbum.jpg",
        "canciones": [
            {
                "nombreCancion": "Everlong",
                "descripcionCancion": "Una canción emotiva del álbum 'The Colour and the Shape' de los Foo Fighters. Refleja un proceso creativo emocional para Dave Grohl y la banda. Con una duración de 4 minutos y 10 segundos, ha acumulado 3,800,000 vistas.",
                "duracion": "4:10",
                "vistas": 3800000,
                "id": 0
            },
            {
                "nombreCancion": "My Hero",
                "descripcionCancion": "Una canción con un poderoso mensaje y un distintivo riff de guitarra. Con una duración de 4 minutos y 20 segundos, ha acumulado 3,200,000 vistas.",
                "duracion": "4:20",
                "vistas": 3200000,
                "id": 1
            },
            {
                "nombreCancion": "Learn to Fly",
                "descripcionCancion": "Un himno optimista con un video musical icónico. Con una duración de 3 minutos y 56 segundos, ha acumulado 3,500,000 vistas.",
                "duracion": "3:56",
                "vistas": 3500000,
                "id": 2
            },
            {
                "nombreCancion": "The Pretender",
                "descripcionCancion": "Una canción enérgica con letras introspectivas. Con una duración de 4 minutos y 29 segundos, ha acumulado 3,900,000 vistas.",
                "duracion": "4:29",
                "vistas": 3900000,
                "id": 3
            },
            {
                "nombreCancion": "All My Life",
                "descripcionCancion": "Una canción intensa con un poderoso riff de guitarra. Con una duración de 4 minutos y 23 segundos, ha acumulado 3,600,000 vistas.",
                "duracion": "4:23",
                "vistas": 3600000,
                "id": 4
            }
        ]
    },
    {
        "id": 5,
        "nombreAlbum": "Pink Floyd",
        "imagen": "../assets/pinkFloydAlbum.svg",
        "canciones": [
            {
                "nombreCancion": "Comfortably Numb",
                "descripcionCancion": "Una de las canciones icónicas del álbum conceptual 'The Wall' de Pink Floyd. Con una duración de 6 minutos y 22 segundos, ha acumulado 5,200,000 vistas.",
                "duracion": "6:22",
                "vistas": 5200000,
                "id": 0
            },
            {
                "nombreCancion": "Another Brick in the Wall, Part 2",
                "descripcionCancion": "Parte de la narrativa de 'The Wall', esta canción es conocida por su coro memorable. Con una duración de 3 minutos y 59 segundos, ha acumulado 4,800,000 vistas.",
                "duracion": "3:59",
                "vistas": 4800000,
                "id": 1
            },
            {
                "nombreCancion": "Wish You Were Here",
                "descripcionCancion": "Una balada emocional que refleja la sensación de pérdida y nostalgia. Con una duración de 5 minutos y 34 segundos, ha acumulado 4,600,000 vistas.",
                "duracion": "5:34",
                "vistas": 4600000,
                "id": 2
            },
            {
                "nombreCancion": "Time",
                "descripcionCancion": "Una canción compleja que aborda el paso del tiempo. Con una duración de 6 minutos y 53 segundos, ha acumulado 4,900,000 vistas.",
                "duracion": "6:53",
                "vistas": 4900000,
                "id": 3
            },
            {
                "nombreCancion": "Money",
                "descripcionCancion": "Una canción caracterizada por su riff de saxofón y letras sobre el dinero. Con una duración de 6 minutos y 22 segundos, ha acumulado 5,100,000 vistas.",
                "duracion": "6:22",
                "vistas": 5100000,
                "id": 4
            }
        ]
    },
    {
        "id": 6,
        "nombreAlbum": "Nirvana",
        "imagen": "../assets/colplay.jpg",
        "canciones": [
            {
                "nombreCancion": "Smells Like Teen Spirit",
                "descripcionCancion": "Una de las canciones más influyentes de la historia del rock, 'Smells Like Teen Spirit' cambió la música para siempre. Con una duración de 5 minutos y 2 segundos, ha acumulado 4,200,000 vistas.",
                "duracion": "5:02",
                "vistas": 4200000,
                "id": 0
            },
            {
                "nombreCancion": "Come as You Are",
                "descripcionCancion": "Una canción con un riff de guitarra distintivo y letras introspectivas. Con una duración de 3 minutos y 39 segundos, ha acumulado 3,800,000 vistas.",
                "duracion": "3:39",
                "vistas": 3800000,
                "id": 1
            },
            {
                "nombreCancion": "Lithium",
                "descripcionCancion": "Una canción con un tono melancólico que aborda temas emocionales. Con una duración de 4 minutos y 16 segundos, ha acumulado 3,600,000 vistas.",
                "duracion": "4:16",
                "vistas": 3600000,
                "id": 2
            },
            {
                "nombreCancion": "In Bloom",
                "descripcionCancion": "Una canción que satiriza la cultura del rock. Con una duración de 4 minutos y 14 segundos, ha acumulado 3,500,000 vistas.",
                "duracion": "4:14",
                "vistas": 3500000,
                "id": 3
            },
            {
                "nombreCancion": "Heart-Shaped Box",
                "descripcionCancion": "Una canción con un video musical surrealista y letras evocadoras. Con una duración de 4 minutos y 41 segundos, ha acumulado 3,900,000 vistas.",
                "duracion": "4:41",
                "vistas": 3900000,
                "id": 4
            }
        ]
    },
    {
        "id": 7,
        "nombreAlbum": "U2",
        "imagen": "../assets/colplay.jpg",
        "canciones": [
            {
                "nombreCancion": "With or Without You",
                "descripcionCancion": "Una de las canciones más exitosas de U2, 'With or Without You' es conocida por su emotiva interpretación. Con una duración de 4 minutos y 56 segundos, ha acumulado 2,900,000 vistas.",
                "duracion": "4:56",
                "vistas": 2900000,
                "id": 0
            },
            {
                "nombreCancion": "I Still Haven't Found What I'm Looking For",
                "descripcionCancion": "Una canción con letras espirituales y una emotiva voz. Con una duración de 4 minutos y 38 segundos, ha acumulado 3,100,000 vistas.",
                "duracion": "4:38",
                "vistas": 3100000,
                "id": 1
            },
            {
                "nombreCancion": "Where the Streets Have No Name",
                "descripcionCancion": "Una canción que evoca un sentido de esperanza y libertad. Con una duración de 5 minutos y 37 segundos, ha acumulado 3,400,000 vistas.",
                "duracion": "5:37",
                "vistas": 3400000,
                "id": 2
            },
            {
                "nombreCancion": "Sunday Bloody Sunday",
                "descripcionCancion": "Una canción con un mensaje político y social fuerte. Con una duración de 4 minutos y 41 segundos, ha acumulado 3,200,000 vistas.",
                "duracion": "4:41",
                "vistas": 3200000,
                "id": 3
            },
            {
                "nombreCancion": "Beautiful Day",
                "descripcionCancion": "Una canción optimista que celebra la belleza de la vida. Con una duración de 4 minutos y 5 segundos, ha acumulado 3,700,000 vistas.",
                "duracion": "4:05",
                "vistas": 3700000,
                "id": 4
            }
        ]
    }
]

  localStorage.setItem("informacionArray", JSON.stringify(albums))