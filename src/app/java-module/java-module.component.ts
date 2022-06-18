import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-java-module',
  templateUrl: './java-module.component.html',
  styleUrls: ['./java-module.component.css']
})
export class JavaModuleComponent implements OnInit {

  exercisesDone
  javaIntro = true;
  javaIOne = false;
  javaITwo = false;
  exOneArray = ['/.../', '/.../'];
  disableSolution = false;
  nextOne = true;
  exOneCorrect = false;

  constructor() {
  }

  ngOnInit(): void {
    if(this.exOneCorrect){
      this.nextOne = false;
    }
  }

  chapterI(){
    this.javaIntro = false;
    this.javaIOne = true;
  }

  goToTwo(){
    this.javaIOne = false;
    this.javaITwo = true;
  }

  exOne(){
    if(this.exOneArray[0] == '-1' && this.exOneArray[1] == '3'){
      this.nextOne = false;
      this.exOneCorrect = true;
    }
  }

  undo() {
    for (let i = this.exOneArray.length - 1; i >= 0; i--) {
      if (this.exOneArray[i] != '/.../') {
        this.exOneArray[i] = '/.../';
        this.disableSolution = false;
        break;
      }
    }
  }

  addSolution(solution: any){
    for (let i = 0; i < this.exOneArray.length; i++){
      if(this.exOneArray[i] == '/.../'){
        this.exOneArray[i] = solution;
        if(!this.exOneArray.includes('/.../')){
          this.disableSolution = true;
        }
        break;
      }
    }
  }

}
