(function () {
  const iconos = document.getElementsByClassName("zoomIcon");
  const titulolugar = document.getElementById("titulolugar");
  const parrafolugar = document.getElementById("parrafolugar");
  const imagenlugar = document.getElementById("imagenlugar");
  const mapContainer = document.getElementById('map'); 
  const volverBtn = document.getElementById("volverMapa");

  const imagenes = [
    {
      imagen: 'img/mirage-agua-lugar.jpg',
      titulo: 'Jardines del Oasis',
      parrafo: `En las afueras de la ciudad, más allá del ruido y el caos de las calles de Bagdad, se encuentran los Jardines del Oasis, un santuario escondido donde la naturaleza aún reclama su espacio. El sonido del agua brotando de las fuentes de piedra y el revoloteo de flamencos rosados crean una atmósfera de calma absoluta. Entre columnas erosionadas por el tiempo y faroles que cuelgan como luciérnagas detenidas en el aire, este rincón es tanto un refugio como un lugar de contemplación. <br><br> Las palmeras que enmarcan el cielo ofrecen sombra y frescura, convirtiéndolo en el lugar perfecto para escapar del calor del desierto o de los ojos curiosos de los guardias. Este espacio no solo es estéticamente bello, sino también tácticamente valioso.`,
    },
    {
      imagen: 'img/mirage-carpas-lugar.jpg',
      titulo: ' Mercado de los Tintoreros',
      parrafo: `Un estallido de colores y aromas recibe al visitante del Mercado de los Tintoreros. Las telas colgando entre los edificios, moviéndose como olas con el viento, pintan el espacio de azules intensos, rojos quemados, verdes esmeralda. Cada puesto cuenta su propia historia: comerciantes gritando sus precios, mujeres negociando con firmeza, artesanos trabajando con paciencia en plena calle. <br><br> El suelo está cubierto de alfombras y tapices que amortiguan los pasos, haciendo de este mercado un escondite ideal para quien sabe fundirse entre la multitud. Aquí, la belleza visual no es solo decoración, es camuflaje.`,
    },
    {
      imagen: 'img/mirage-palacio-lugar.jpg',
      titulo: 'Palacio del Gobernador',
      parrafo: `Imponente y majestuoso, el Palacio del Gobernador se alza como símbolo de poder, control y riqueza en el corazón de Bagdad. Sus muros están adornados con mosaicos intrincados, inscripciones en caligrafía árabe y detalles dorados que brillan con la luz del sol. Al interior, los pasillos de mármol blanco y columnas colosales transmiten una sensación de inmensidad y vigilancia constante. El aire huele a incienso y perfume caro, pero bajo esa elegancia se percibe una tensión silenciosa: conspiraciones, alianzas, traiciones. todo sucede entre sus muros. Este palacio no es solo una sede administrativa, es un tablero de ajedrez donde se juegan los destinos de muchos. <br><br> Para el jugador, este lugar representa un desafío de sigilo y estrategia. La seguridad es estricta, con guardias patrullando cada esquina y miradores elevados que dificultan el acceso.`,
    },
    {
      imagen: 'img/mirage-templo-lugar.jpg',
      titulo: 'Templo de Al-Aziz en Bagdad',
      parrafo: `El Templo de Al-Aziz es un lugar emblemático en Assassin's Creed Mirage, ubicado en el corazón de Bagdad. Este templo es un testimonio de la rica historia y la arquitectura impresionante de la ciudad durante la Edad de Oro del Islam. Con sus intrincadas decoraciones geométricas y sus altas cúpulas, el Templo de Al-Aziz es un reflejo de la sofisticación y el esplendor de la cultura islámica en el siglo IX. <br><br> En Assassin's Creed Mirage, el Templo de Al-Aziz es más que un simple lugar de culto; es un centro de saber, política y conspiración. Los jugadores podrán explorar sus pasillos y cámaras secretas, descubriendo los misterios y los secretos que se esconden detrás de sus muros.`,
    },
    {
      imagen: 'img/mirage-tiendas-lugar.jpg',
      titulo: 'El Sendero del Desaparecido',
      parrafo: `Entre las sombras de los muros agrietados y las alfombras que cuelgan como testigos mudos del paso del tiempo, se oculta el Callejón del Fugitivo. Este estrecho pasaje, casi perdido entre la maraña de callejuelas del distrito, es famoso por haber sido el escenario de incontables persecuciones.<br><br>
      Durante el día, el callejón cobra vida con el bullicio del mercado vecino, donde los comerciantes exponen sus productos en improvisadas mesas de madera y los niños juegan entre las sombras. Pero al caer la noche, su atmósfera cambia: las luces se atenúan, las voces se apagan, y el aire se vuelve espeso con rumores.`,
    }
  ];

  for (let i = 0; i < iconos.length; i++) {
    iconos[i].addEventListener('click', function () {
      titulolugar.innerHTML = imagenes[i].titulo;
      parrafolugar.innerHTML = imagenes[i].parrafo;
      imagenlugar.src = imagenes[i].imagen;

      mapContainer.classList.add('zoomed');
      volverBtn.style.zIndex = 1000;

      for (let j = 0; j < iconos.length; j++) {
        iconos[j].style.display = "none";
      }

      volverBtn.style.display = "flex"; // Mostramos el botón como flex
    });
  }

  // Este listener va fuera del bucle
  volverBtn.addEventListener("click", () => {
    mapContainer.classList.remove("zoomed");

    for (let i = 0; i < iconos.length; i++) {
      iconos[i].style.display = "block";
    }

    volverBtn.style.display = "none";
  });
})();
