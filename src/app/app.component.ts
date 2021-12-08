import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website';
  status = "start"
  editmode = true
  editimg = "../assets/images/gear.svg"
  toggleEdit(){
    if(this.status=='start'){
    this.editmode=!this.editmode
    if(this.editmode==true){
      this.editimg = "../assets/images/gear.svg"
    }else{this.editimg = "../assets/images/check.svg"}}
  }
  timer = document.getElementsByClassName("timer")
  counting
  end(){
    clearInterval(this.counting)
    this.timer[0].classList.add("end")
    this.status='start'
  }
  countdown(){
    if(this.editmode==true){
    if(this.status=='stop'){
      this.status='start'
    }else{
      this.status='stop'
    }
    if(this.status=='stop'){
      this.timer[0].classList.remove("end")
      this.counting = setInterval(()=>{
        let sec:any=(<HTMLInputElement>document.getElementById("sec")).value
        let min:any=(<HTMLInputElement>document.getElementById("min")).value
        if(sec!=="0"&&this.status=='stop'){
          sec-=1;
          (<HTMLInputElement>document.getElementById("sec")).value=sec
          if(min==0&&sec==0){
            this.end()
          }
        }else if(min!=="0"&&this.status=='stop'){
          min-=1;
          (<HTMLInputElement>document.getElementById("min")).value=min;
          (<HTMLInputElement>document.getElementById("sec")).value="59"
        }else if(min==0&&sec==0){
          this.end()
        }
      },1000)
      
    }else{clearInterval(this.counting)}
  }}
}
