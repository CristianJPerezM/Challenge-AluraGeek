import { conectaAPI } from "./conectaAPI.js";
import construyeCard from "./mostrarProductos.js";

async function buscarProducto(evento){
    evento.preventDefaul();
    const datosDeBusqueda = document.querySelector("data-busqueda").value;

    const busqueda = await conectaAPI.buscarProducto(datosDeBusqueda);

    const listaDeBusqueda=document.querySelector("[data-lista]");

    listaDeBusqueda.replaceChildren();

    busqueda.forEach(elemento => listaDeBusqueda.appendChild(construyeCard(elemento.nombre,elemento.precio,elemento.Image)));

    if(busqueda.length==0){
        listaDeBusqueda.innerHTML=`<h2 class="mensaje__nombre">No encontramos el producto ${datosDeBusqueda}</h2>`;
    }
}   

const botonBusqueda=document.querySelector("[data-boton-busqueda]");

botonBusqueda.addEventListener("click",evento=>buscarProducto(evento))