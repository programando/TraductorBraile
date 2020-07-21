const BraileArray = [
   { name: 'a'     , img: 'images/a.png' },
   { name: 'b'     , img: 'images/b.png' },
   { name: 'c'     , img: 'images/c.png' },
   { name: 'd'     , img: 'images/d.png' },
   { name: 'e'     , img: 'images/e.png' },
   { name: 'f'     , img: 'images/f.png' },
   { name: 'g'     , img: 'images/g.png' },
   { name: 'h'     , img: 'images/h.png' },
   { name: 'i'     , img: 'images/i.png' },
   { name: 'j'     , img: 'images/j.png' },
   { name: 'k'     , img: 'images/k.png' },
   { name: 'l'     , img: 'images/l.png' },
   { name: 'm'     , img: 'images/m.png' },
   { name: 'n'     , img: 'images/n.png' },
   { name: 'o'     , img: 'images/o.png' },
   { name: 'p'     , img: 'images/p.png' },
   { name: 'q'     , img: 'images/q.png' },
   { name: 'r'     , img: 'images/r.png' },
   { name: 's'     , img: 'images/s.png' },
   { name: 't'     , img: 'images/t.png' },
   { name: 'u'     , img: 'images/u.png' },
   { name: 'v'     , img: 'images/v.png' },
   { name: 'w'     , img: 'images/w.png' },
   { name: 'x'     , img: 'images/x.png' },
   { name: 'y'     , img: 'images/y.png' },
   { name: 'z'     , img: 'images/z.png' },
]


grid = document.querySelector('.grid');

document.getElementById('texto').addEventListener('keyup', MostrarTexto);

function MostrarTexto( ) {
  let TextoInicial = document.getElementById('texto').value;
  imgs = document.querySelector('.grid');
  imgs.innerHTML = '';
  showLetters(TextoInicial)
}

function showLetters(Texto) {
  let ArrayLetras = Texto.split("");
  for (i = 0; i < ArrayLetras.length; i++) {
    let img = BraileArray.find(element => element.name == ArrayLetras[i]);
    if (img != undefined) {
      var newImage = document.createElement("img");
      newImage.setAttribute('src', img.img);
      grid.appendChild(newImage);
    }
  }

  

 /* document.getElementById("preview").innerHTML="<img src='"+img.img+"'>"; */
}
