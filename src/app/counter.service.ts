import { Injectable } from "@angular/core";

@Injectable()
export class counter {
    
        private time: any|number|string;
        private st: number=0;
        private stp: number=0;
      
        start() {
          this.st = Math.floor(Date.now()/1000);
          // this.time="Counter Started !";
        }
      
        stop() {
          this.stp = Math.floor(Date.now()/1000);
          this.time=this.stp - this.st;
          this.st=0
          // this.time="Counter Stopped !";
        }
      
        get timeCount(){
          if(this.time<60){
            this.time="Your time is: 0 hr 0 min "+this.time+" sec"
            return this.time
        
        }
          if(60 < this.time && this.time<3600){
            this.time="Your time is: 0 hr "+Math.floor(this.time/60)+" min "+this.time%60+" sec"
            return this.time
          }
          if(this.time>3600){
            this.time="Your time is:"+Math.floor(this.time/3600)+" hr "+Math.floor((this.time%3600)/60)+" min "+this.time%60+" sec"
            return this.time
        }
        }
      
}