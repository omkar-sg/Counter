import { Component } from "@angular/core";
import { counter } from "./counter.service";

@Component({
    selector:"cr-handler",
    templateUrl: './counterhandler.component.html',


})



export class counterHandler{
   
  strt=false;
  stp=true;
  show=true;
  rst=true;
  count:any|number|string="To start Click on Start !";

  

  constructor(private cr:counter){
  
  }

  start(){
    this.cr.start()
    this.count="Counter Started !"
    this.strt=true
    this.stp=false
    
  }

  stop(){
    
    this.cr.stop()
    this.count="Counter Stopped !"
    this.stp=true
    this.show=false
    
  }

  display(){
    this.count=this.cr.timeCount
    this.show=true
    this.rst=false
  }

  reset(){
    this.strt=false
    this.count="To start Click on Start !"
    this.rst=true
  }



}