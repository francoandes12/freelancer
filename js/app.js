document.addEventListener('DOMContentLoaded', () => {
  cargarPortafolio()
})

const cargarPortafolio = () => {
  fetch('datos.json')
    .then((resp) => {
      return resp.json()
    })
    .then((datos) => {
      let html = ''
      datos.portafolio.forEach((portafolio) => {
        //crear el template
        html += `
           <div class="elemento">
           <img src="img/${portafolio.id}.jpg">
           <div class="contenido">
           <h3>${portafolio.nombre} </h3>
           <p>${portafolio.desc} </p>
           </div>
           </div>
           `
      })
      //agregar al html
      const contenedor = document.getElementById('listado')
      contenedor.innerHTML = html
    })
}
