async function listaProductos(){
    const conexion = await fetch("http://localhost:3001/productos",{
        method:"GET",
        headers:{
            "Content-type":"application/json"
        }
    });

    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function crearProducto(nombre,precio,imagen){
    const conexion = await fetch("http://localhost:3001/productos",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen
        })
    })
    if(!conexion.ok){
        throw new Error("No fue posible enviar el producto");
    }
    const conexionConvertida =await conexion.json();

    return conexionConvertida;
}

async function buscarProducto(referencia){
    const conexion = await fetch(`http://localhost:3001/productos?q=${referencia}`);
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

export const conectaAPI = {
    listaProductos,crearProducto,buscarProducto
}
