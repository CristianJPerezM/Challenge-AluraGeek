import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("[data-lista]");

export default function construyeCard(nombre,precio,imagen) {
    const producto = document.createElement("li");
    producto.className = "articles_item";

    producto.innerHTML = `<iframe class="image_product" src="${imagen}" title="${nombre}" frameborder="0" ></iframe>
                        <div class="articles_description">
                            <h3>${nombre}</h3>
                            <h3>${precio}</h3>
                            <img src="./img/delete_icon.svg" alt="Papelera">
                        </div>`;

    return producto;
}

async function listaProductos() {
    try{
        const listaAPI = await conectaAPI.listaProductos();
        listaAPI.forEach(element => lista.appendChild(construyeCard(element.nombre,element.precio,element.imagen)));
    }catch{
        lista.innerHTML = `<h2 class="mensaje__nombre">Ha ocurrido un problema con la conexion :(</h2>`;
    }
}

listaProductos();