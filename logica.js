function agregarAlCarro(elemento){
    if (elemento.tieneStock()){
        carrito.push(elemento);
        console.log(carrito);
        elemento.restarStock();
    }else{
        alert("no hay stock del producto");
    } 
}
function buscarProcesador(){
    let proce=" ";
    const nombre=prompt("ingrese marca del procesador intel/AMD");
    const vector=["intel","AMD"];
    console.log(vector);
    if (vector.includes(nombre)){
        const listaintel=productos.filter((procesador)=> procesador.marca==nombre);
        console.log(listaintel);
        proce=parseInt(prompt("Elija el procesador por su id"));
        
    }else{
        alert("esa marca no existe");
        item1=buscarProcesador();
    }
    return proce;
}
function agregarMother(procesador1){
    if (procesador1.marca=="intel"){
        const listaMotherintel=productos.filter((motherboard)=>motherboard.socket>=1200);
        console.log(listaMotherintel);
    }
    if((procesador1.marca=="AMD")&&(procesador1.modelo<7500)){
        const listaMotherAMD=productos.filter((motherboard)=>motherboard.socket=="am4");
        console.log(listaMotherAMD);
        }
    if ((procesador1.marca=="AMD")&&(procesador1.modelo>7500)){
        const listaMotherAMD=productos.filter((motherboard)=>motherboard.socket=="am4");
        console.log(listaMotherAMD);
        }
    item2=parseInt(prompt("Elija la placa madre por su id"));
    return item2;
}
function buscarRam(mother){
    if (mother.socket!="am5"){
        const listaRam=productos.filter((memoriaRam)=>memoriaRam.tipo=="am4");
    }else if (mother.socket=="am5"){
        const listaRam=productos.filter((memoriaRam)=>memoriaRam.tipo=="am5");
    }
    item3=parseInt(prompt("Elija la ram por su id"));
    return item3;
}
function buscarProducto(tipo){
    switch (tipo){
        case "fuente":
            item4=parseInt(prompt("Elija la fuente por su id"));
            return item4;
        case "almacenamiento":
            item5=parseInt(prompt("Elija el almacenamiento por su id"));
            return item5;
        case "gabinete":
            item6=parseInt(prompt("Elija el gabinete por su id"));
            return item6;
        case "placaVideo":
            item7=parseInt(prompt("Elija la placa de video por su id"));
            return item7;
    }
}
//--------------------------------------------------

//--------------------------------------------------------PRINCIPAL----------------
console.log(productos);
const carrito = [];
    let item1,item2,item3,item4,tipo;
    let procesador1,mother,ram,fuente1,almacenamiento1,gabinete1,placaVideo1;
    do{
        item1=buscarProcesador();
        procesador1=productos.find((procesador)=>procesador.id==item1);
        agregarAlCarro(procesador1);
    }while(procesador1.tieneStock()==false);
    do{
        item2=agregarMother(procesador1);
        mother=productos.find((motherboard)=>motherboard.id==item2);
        agregarAlCarro(mother);  
    }while(mother.tieneStock()==false);
    do{
        item3=buscarRam(mother);
        ram=productos.find((memoriaRam)=>memoriaRam.id==item3);
        agregarAlCarro(ram);  
    }while(ram.tieneStock()==false);
    do{
        item4=buscarProducto(tipo="fuente");
        fuente1=productos.find((fuente1)=>fuente1.id==item4);
        agregarAlCarro(fuente1);
    }while(fuente1.tieneStock()==false);
    do{
        item5=buscarProducto(tipo="almacenamiento");
        almacenamiento1=productos.find((almacenamiento1)=>almacenamiento1.id==item5);
        agregarAlCarro(almacenamiento1);
    }while(almacenamiento1.tieneStock()==false);
    do{
        item6=buscarProducto(tipo="placaVideo");
        placaVideo1=productos.find((placaVideo1)=>placaVideo1.id==item6);
        agregarAlCarro(placaVideo1);
    }while(placaVideo1.tieneStock()==false);
    do{
        item6=buscarProducto(tipo="gabinete");
        gabinete1=productos.find((gabinete1)=>gabinete1.id==item7);
        agregarAlCarro(gabinete1);
    }while(gabinete1.tieneStock()==false);
const total=carrito.reduce((sumador,productos)=>sumador+productos.precio,0);
console.log(carrito);
console.log(total);
alert("su Pc tiene un valor de :"+total+"USD");
