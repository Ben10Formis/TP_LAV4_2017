import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
  @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;
  private subscription: Subscription;
  Mensajes:string;
 // aux : boolean;

  ngOnInit() { }

  constructor() {
     this.ocultarVerificar=true;
     this.Tiempo=10; 
    this.nuevoJuego = new JuegoAgilidad("Agilidad Aritmetica",false);
    console.info("Inicio agilidad: estoy en el constructor"); 
    console.info("1111111111"); 
  }
/*  NuevoJuego() {
    this.ocultarVerificar=false;
    this.repetidor = setInterval(()=>{ 
      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar=true;
        this.Tiempo=5;
      }
    }, 900);
  }*/
  NuevoJuego() {
    this.ocultarVerificar=false; //como inicia el juego necesito que el usuario cheque si gano o no.
    console.info("2222222222");
    this.nuevoJuego.generarOperacion();
    this.repetidor = setInterval(()=>{ 
      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar=true;
        this.Tiempo=15;
      }
    }, 900);
  }
/*  verificar()  {
    this.ocultarVerificar=false;
    clearInterval(this.repetidor);
  }*/
  verificar()  {
    console.info("333333333");
    this.ocultarVerificar=false;
    clearInterval(this.repetidor);
   // if(this.nuevoJuego.gano){
  if(this.nuevoJuego.verificar()){
    // this.aux = true;
    this.MostarMensaje("Ganaste!!!",true);
  }
  else{
    //this.aux = false;
    this.MostarMensaje("Casi pero nop. Perdiste!",false); 
  }
  this.ocultarVerificar = true;
  this.Tiempo = 7;
  this.enviarJuego.emit(this.nuevoJuego);
  //this.limpiarIntervalo();
  console.info("dentro del 3 el 55555555555555");
  this.nuevoJuego = new JuegoAgilidad("Agilidad Aritmetica",false);//para borrar el anterior
  } 
  limpiarIntervalo() {
    console.info("limpiarIntervalo");
    console.info("55555555555555");
    clearInterval(this.repetidor);
    this.ocultarVerificar=true;
    this.Tiempo=10;
    console.info("new JuegoAgilidad(Agilidad Aritmetica");
    this.nuevoJuego = new JuegoAgilidad("Agilidad Aritmetica",false);//para borrar el anterior
  }
  MostarMensaje(mensaje:string="fc MostrarMensaje()",gano:boolean=false) {
    console.info("44444444444444444");
    this.Mensajes = mensaje;    
    var x = document.getElementById("snackbar");
    if(gano)
    {
      x.className = "show Ganador";
    }else{
      x.className = "show Perdedor";
    }

    var modelo = this;
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
      modelo.ocultarVerificar=false;
    }, 3000);
    console.info("objeto",x);
  
   }
}