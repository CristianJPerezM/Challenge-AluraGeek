import { conectaAPI } from "./conectaAPI.js";

const formulario = document.querySelector("[data-formulario]");


async function crearProducto(evento){
    evento.preventDefault();
    const imagen= document.querySelector("[data-nombre-producto]").value;
    const nombre=document.querySelector("[data-precio-producto]").value; 
    const precio=document.querySelector("[data-imagen-producto]").value;

    try{
        await conectaAPI.crearProducto(nombre,precio,imagen);
    
        window.location.href="../pages/envio-concluido.html";
    }catch(e){
        alert(e);
    }
}

formulario,addEventListener("submit",evento=>crearProducto(evento));