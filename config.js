window.addEventListener("scroll", function(){
  const header = document.querySelector("header")
  header.classList.toggle("sticky", window.scrollY > 0)
})

const
  num = (entrada) => {
    if (entrada[0].isIntersecting) {
      const twitch = document.getElementById("twitch-con")
      const twitter = document.getElementById("twitter-con")
      const instagram = document.getElementById("instagram-con")
      const youtube = document.getElementById("youtube-con")
    
      if (twitch.textContent != 2062618) {
        let c = 1
        let r = 1
        let d = 0
        let a = 0
        
        twitch.textContent = setInterval(() => {
          twitch.textContent = c += 2999
          if (c > 2062618) {
            twitch.textContent = 2062618
          }
        }, 1)
        twitter.textContent = setInterval(() => {
          twitter.textContent = r += 2999
          if (r > 1893573) {
            twitter.textContent = 1893573
          }
        }, 1)
        instagram.textContent = setInterval(() => {
          instagram.textContent = d += 2999
          if (d > 1925896) {
            instagram.textContent = 1925896
          }
        }, 1)
        youtube.textContent = setInterval(() => {
          youtube.textContent = a += 2999
          if (a > 2583658) {
            youtube.textContent = 2583658
          }
        }, 1)
      } 
    }
},
  con = new IntersectionObserver(num, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  })
con.observe(document.getElementById("inicio"))

const
  imagen = (entrada) => {
    if (entrada[0].isIntersecting) {
      const img = document.getElementById("img-sm")
      img.classList.add("visible-in")
    }
  },
  info = new IntersectionObserver(imagen, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  })
info.observe(document.getElementById("img-sm"))

const productos = {
  0: {
    h2: 'Sudadera negra "HÉROE"',
    des: 'Sudadera con capucha bicolor doble tejido, con cordón ajustable, cubrecosturas en el cuello y bolsillo canguro. Con elástico en puños y cintura. La capucha interior y los cordones son en color gris. La sudadera está impresa en la parte trasera y en el brazo izquierdo.',
    com: '50% algodón / 50% poliéster, felpa perchada, 280 g/m²',
    pre: '€28,92',
    img: 'img/sudaderaheroe.png'
  },
  1: {
    h2: 'Camiseta Blanca "TE GUSTO"',
    des: 'Camiseta de manga corta en color blanco, cuello redondo de 4 capas y cubre costuras reforzado en cuello y hombros. Costuras laterales. La camiseta está impresa en la parte delantera superior izquierda.',
    com: '100% algodón, punto liso, 165 g/m²',
    pre: '€16,52',
    img: 'img/MegtsTgst.png'
  },
  2: {
    h2: 'Camiseta Negra "LOS PROBLEMAS"',
    des: 'Camiseta de manga corta en color negro, cuello redondo de 4 capas y cubre costuras reforzado en cuello y hombros. Costuras laterales. La camiseta está impresa en la parte delantera central.',
    com: '100% algodón, punto liso, 165 g/m²',
    pre: '€18,17',
    img: 'img/problemas.png'
  },
  3: {
    h2: 'Sudadera Negra "LOS PROBLEMAS"',
    des: 'Sudadera con capucha doble tejido, con cordón ajustable, cubrecosturas en el cuello y bolsillo canguro. Puños y cinturilla de punto canalé 1x1 con elastano. La capucha interior y los cordones son en color negro.  La sudadera está impresa en la parte delantera.',
    com: '50% algodón / 50% poliéster, felpa perchada, 280 g/m²',
    pre: '€28,92',
    img: 'img/problemaSu.png'
  },
  4: {
    h2: 'El mundo del roleplay con Perxitaa',
    des: 'Perxitaa, uno de los mayores expertos en roleplay, te ofrece en esta masterclass todo lo que necesitas saber para convertirte en un roleador top: cómo crear personajes interesantes, cómo desarrollar un guion de manera coherente, qué prácticas están permitidas y cuáles no, cómo funcionan los servidores…',
    com: 'Tapa dura',
    pre: '€20,80',
    img: 'img/El Mundo del roleplay con Perxitaa.jpg'
  },
  5: {
    h2: 'El mundo de Violeta',
    des: 'Una Odisea 2.0 en la que Perxitaa es transportado al interior de Minecraft junto con su amiga Violeta; la niña que con su vocecita en off le acompaña en su trolleo y en sus incursiones como gamer.',
    com: 'Tapa blanda',
    pre: '€12,25',
    img: 'img/violeta.jpg'
  }
}
function pro(d) {
  const h2 = document.getElementById('h2')
  const des = document.getElementById('des')
  const com = document.getElementById('com')
  const pre = document.getElementById('pre')
  const producto = document.getElementById('producto')
  if (d == 'der') {
    if (!h2.textContent || h2.textContent === productos[0].h2) {
      h2.textContent = productos[1].h2
      des.textContent = productos[1].des
      com.textContent = productos[1].com
      pre.textContent = productos[1].pre
      producto.src = productos[1].img
      producto.style.paddingLeft = '0'
      producto.style.maxWidth = '100%'
    } else if (h2.textContent === productos[1].h2) {
      h2.textContent = productos[2].h2
      des.textContent = productos[2].des
      com.textContent = productos[2].com
      pre.textContent = productos[2].pre
      producto.src = productos[2].img
      producto.style.paddingLeft = '0'
      producto.style.maxWidth = '100%'
    } else if (h2.textContent === productos[2].h2) {
      h2.textContent = productos[3].h2
      des.textContent = productos[3].des
      com.textContent = productos[3].com
      pre.textContent = productos[3].pre
      producto.src = productos[3].img
      producto.style.paddingLeft = '2rem'
      producto.style.maxWidth = '80%'
    } else if (h2.textContent === productos[3].h2) {
      h2.textContent = productos[4].h2
      des.textContent = productos[4].des
      com.textContent = productos[4].com
      pre.textContent = productos[4].pre
      producto.src = productos[4].img
      producto.style.maxWidth = '50%'
      producto.style.paddingLeft = '5rem'
    } else if (h2.textContent === productos[4].h2) {
      h2.textContent = productos[5].h2
      des.textContent = productos[5].des
      com.textContent = productos[5].com
      pre.textContent = productos[5].pre
      producto.src = productos[5].img
      producto.style.maxWidth = '50%'
      producto.style.paddingLeft = '5rem'
    } else if (h2.textContent === productos[5].h2) {
      h2.textContent = productos[0].h2
      des.textContent = productos[0].des
      com.textContent = productos[0].com
      pre.textContent = productos[0].pre
      producto.src = productos[0].img
      producto.style.paddingLeft = '2rem'
      producto.style.maxWidth = '80%'
    }
  } else if (d == 'iz') {
    if (!h2.textContent || h2.textContent === productos[0].h2) {
      h2.textContent = productos[5].h2
      des.textContent = productos[5].des
      com.textContent = productos[5].com
      pre.textContent = productos[5].pre
      producto.src = productos[5].img
      producto.style.maxWidth = '50%'
      producto.style.paddingLeft = '5rem'
    } else if (h2.textContent === productos[1].h2) {
      h2.textContent = productos[0].h2
      des.textContent = productos[0].des
      com.textContent = productos[0].com
      pre.textContent = productos[0].pre
      producto.src = productos[0].img
      producto.style.maxWidth = '80%'
      producto.style.paddingLeft = '2rem'
    } else if (h2.textContent === productos[2].h2) {
      h2.textContent = productos[1].h2
      des.textContent = productos[1].des
      com.textContent = productos[1].com
      pre.textContent = productos[1].pre
      producto.src = productos[1].img
      producto.style.maxWidth = '100%'
      producto.style.paddingLeft = '0'
    } else if (h2.textContent === productos[3].h2) {
      h2.textContent = productos[2].h2
      des.textContent = productos[2].des
      com.textContent = productos[2].com
      pre.textContent = productos[2].pre
      producto.src = productos[2].img
      producto.style.maxWidth = '100%'
      producto.style.paddingLeft = '0'
    } else if (h2.textContent === productos[4].h2) {
      h2.textContent = productos[3].h2
      des.textContent = productos[3].des
      com.textContent = productos[3].com
      pre.textContent = productos[3].pre
      producto.src = productos[3].img
      producto.style.maxWidth = '80%'
      producto.style.paddingLeft = '2rem'
    } else if (h2.textContent === productos[5].h2) {
      h2.textContent = productos[4].h2
      des.textContent = productos[4].des
      com.textContent = productos[4].com
      pre.textContent = productos[4].pre
      producto.src = productos[4].img
      producto.style.maxWidth = '50%'
      producto.style.paddingLeft = '5rem'
    }
  }
}
$(document).ready(function () {
  $('#suscripcion').submit(function (e) {
    const data = {
      correo: $('#correo').val(),
    };
    $.post("suscripcion.php", data,
      function (response) {
        console.log(response)
        $('#suscripcion').trigger('reset')
      },
    );
    e.preventDefault();
  });
});
