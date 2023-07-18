
const id = document.getElementById('id');
const mensaje = document.getElementById('mensaje');



const options = {method: 'GET'};

function crearConsejo(){
    fetch('https://api.adviceslip.com/advice', options)
  .then(response => response.json())
  .then(data => consejo(data))
  .catch(err => console.error(err));
}

function consejo(consejo) {
  const h2 = document.createElement('h2');
  h2.textContent = "ADVICE #"+consejo.slip.id
  id.appendChild(h2)

  const p = document.createElement('p');
  p.textContent = consejo.slip.advice;
  mensaje.appendChild(p)
    
}

crearConsejo();

