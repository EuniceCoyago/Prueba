//Crear una clase
class miClase1{
	constructor(primero,segundo){
		this.uno = primero;
		this.dos = segundo;
		this.tres = "Hola";
	};
	miMetodoUno(){
		/*var a=50;
		var b=15;
		var c=a+b;
		return c;
		document.write(this.uno); */
		return this.uno;
	};
	miMetodoDos(parametroUno,parametroDos){
		document.write("El parametro uno es: "+parametroUno+"<br>El parametro dos es: "+parametroDos);		
	};
};
/*
//Crear un objeto - Instanciar
var objeto1=new miClase1("Eunice",22);

//Recuperar datos
//document.write(objeto1.miMetodoUno());
objeto1.miMetodoDos("Pamela",20);
*/

class miClase2 extends miClase1{
	constructor(uno,dos,cuarto){
		super(uno,dos)
		this.cuatro=cuarto;
	};
};

var objeto3=new miClase2("Saara","Arce",53);
document.write(objeto3.cuatro);
