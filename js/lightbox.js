const imagenes = document.querySelectorAll('.img-galeria')
const imagenlight = document.querySelector('.agregar-imagen')
const contenedorlight = document.querySelector('.imagen-light')
const desplegable1 = document.querySelector('.desplegable');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
        
    })
})

contenedorlight.addEventListener('click', (e)=>{
    if(e.target !== imagenlight){
        contenedorlight.classList.toggle('show')
        imagenlight.classList.toggle('showImage')
        desplegable1.style.opacity = '1'
    }
})

const aparecerImagen = (imagen)=>{
    imagenlight.src = imagen;
    contenedorlight.classList.toggle('show')
    imagenlight.classList.toggle('showImage')
    desplegable1.style.opacity = '0'

}
