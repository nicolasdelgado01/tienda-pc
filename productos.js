class Producto {
    restarStock(){
        this.stock=this.stock - 1;
    }
    tieneStock(){
        return this.stock > 0
    }
    }
class Procesador extends Producto{
    constructor(id,marca,modelo,precio,stock){
        super();
        this.id=id;
        this.marca=marca;
        this.modelo=modelo;
        this.precio=precio;
        this.stock=stock;
    }
}
class Motherboard extends Producto{
    constructor(id,marca,socket,chipset,precio,stock){
        super();
        this.id=id;
        this.marca=marca;
        this.socket=socket;
        this.chipset=chipset;
        this.precio=precio;
        this.stock=stock;

    }
}
class MemoriaRam extends Producto{
    constructor(id,tipo,marca,tamaño,precio,stock){
        super();
        this.id=id;
        this.tipo=tipo;
        this.marca=marca;
        this.tamaño=tamaño;
        this.precio=precio;
        this.stock=stock;
    }
}
class PlacaVideo extends Producto{
    constructor(id,fabricante,marca,modelo,precio,stock){
        super();
        this.id=id;
        this.fabricante=fabricante;
        this.marca=marca;
        this.modelo=modelo;
        this.precio=precio;
        this.stock=stock;
    }
}
class Fuente extends Producto{
    constructor(id,marca,watts,precio,stock){
        super();
        this.id=id;
        this.marca=marca;
        this.watts=watts;
        this.precio=precio;
        this.stock=stock;
    }
}
class Almacenamiento extends Producto{
    constructor(id,tipo,marca,tamaño,precio,stock){
        super();
        this.id=id;
        this.tipo=tipo;
        this.marca=marca;
        this.tamaño=tamaño;
        this.precio=precio;
        this.stock=stock;
    }
}
class Gabinete extends Producto{
    constructor(id,marca,modelo,precio,stock){
        super();
        this.id=id;
        this.marca=marca;
        this.modelo=modelo;
        this.precio=precio;
        this.stock=stock;
    }
}
//Procesadores 
const pros1 = new Procesador(1,"intel","i3 12300",150,3);
const pros2 = new Procesador(2,"intel","i5 12600",300,4);
const pros3 = new Procesador(3,"intel","i5 13600",400,6);
const pros4 = new Procesador(4,"intel","i7 12700",390,7);
const pros5 = new Procesador(5,"intel","i7 13700",480,3);
const pros6 = new Procesador(6,"intel","i9 12900",500,8);
const pros7 = new Procesador(7,"intel","i9 13900",590,7);
const pros8 = new Procesador(8,"AMD",5500,330,10);
const pros9 = new Procesador(9,"AMD",5700,400,5);
const pros10 = new Procesador(10,"AMD",5900,390,4);
const pros11 = new Procesador(11,"AMD",7500,480,3);
const pros12 = new Procesador(12,"AMD",7700,570,7);
const pros13 = new Procesador(13,"AMD",7900,690,2);
//Motherboards
const mother1 = new Motherboard(14,"Asus",1200,"z690",350,7);
const mother2 = new Motherboard(15,"Asus",1200,"b660",250,6);
const mother3 = new Motherboard(16,"Asus",1200,"h670",270,3);
const mother4 = new Motherboard(17,"Asus",1700,"z790",540,7);
const mother5 = new Motherboard(18,"Asus","am4","a520",240,2);
const mother6 = new Motherboard(19,"Asus","am4","b550",340,17);
const mother7 = new Motherboard(20,"Asus","am4","x570",350,20);
const mother8 = new Motherboard(21,"Asus","am5","z590",490,10);
//memorias ram
const ram1 = new MemoriaRam(22,"ddr4","kingston","8gb",50,50);
const ram2 = new MemoriaRam(23,"ddr4","kingston","16gb",70,65);
const ram3 = new MemoriaRam(24,"ddr4","kingston","24gb",80,20);                      
const ram4 = new MemoriaRam(25,"ddr4","kingston","32gb",120,10);
const ram5 = new MemoriaRam(26,"ddr5","kingston","16gb",95,4);
const ram6 = new MemoriaRam(27,"ddr5","kingston","32gb",150,2);
//placas de videoMemoriaRam
const vid1 = new PlacaVideo(28,"nvidia","msi","3060ti",450,11);
const vid2 = new PlacaVideo(29,"nvidia","msi","3070ti",650,12);
const vid3 = new PlacaVideo(30,"nvidia","msi","3080ti",760,9);
const vid4 = new PlacaVideo(31,"nvidia","msi","3090ti",1200,4);
const vid5 = new PlacaVideo(32,"nvidia","msi","3070",590,12);
const vid6 = new PlacaVideo(33,"nvidia","msi","3090",900,3);
//Fuente 
const fue1 = new Fuente(34,"corsair",650,250,15);
const fue2 = new Fuente(35,"corsair",750,380,14);
const fue3 = new Fuente(36,"corsair",850,460,25);
const fue4 = new Fuente(37,"corsair",1200,580,4);
//Almacenamiento
const al1 = new Almacenamiento(38,"m2","WD","120gb",97,24);
const al2 = new Almacenamiento(39,"m2","WD","480gb",120,58);
const al3 = new Almacenamiento(40,"m2","WD","1020gb",250,15);
const al4 = new Almacenamiento(41,"ssd","WD","256gb",84,547);
const al5 = new Almacenamiento(42,"ssd","WD","480gb",109,320);
const al6 = new Almacenamiento(43,"ssd","WD","1020gb",197,120);
//Gabinete
const gab1 = new Gabinete(44,"thermaltake","s100tg",147,12);
const gab2 = new Gabinete(45,"thermaltake","s100tg white",147,12);
//cargar vector productos
const productos = [pros1,pros2,pros3,pros4,pros5,pros6,pros7,pros8,pros9,pros10,pros11,pros12,pros13,mother1,mother2,mother3,mother4,mother5,mother6,mother7,mother8,ram1,ram2,ram3,ram4,ram5,ram6,vid1,vid2,vid3,vid4,vid5,vid6,fue1,fue2,fue3,fue4,al1,al2,al3,al4,al5,al6,gab1,gab2];

