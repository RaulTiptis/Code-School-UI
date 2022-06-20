import { Component, OnInit, Input } from '@angular/core';
import {ProgressService} from '../progress.service';

@Component({
  selector: 'app-java-module',
  templateUrl: './java-module.component.html',
  styleUrls: ['./java-module.component.css']
})
export class JavaModuleComponent implements OnInit {

  @Input() login;
  currentPosition = 0;
  javaIntro = true;
  javaIOne = false;
  javaITwo = false;
  javaIZeroDoc = false;
  javaIOneDoc = false;
  javaITwoDoc = false;
  exOneArray = ['/.../', '/.../'];
  disableSolution = false;
  nextOne = true;
  exOneCorrect = false;
  changePageArray = [this.javaIntro, this.javaIZeroDoc, this.javaIOneDoc, this.javaITwoDoc, this.javaIOne, this.javaITwo]

    constructor(private progressService: ProgressService) {
  }

  ngOnInit(): void {
    this.progressService.updateProgress(this.login.progress).subscribe();
    localStorage.setItem('currentUser', JSON.stringify(this.login));
  }

  goForward(){
    this.changePageArray[this.currentPosition] = false;
    this.currentPosition++;
    this.changePageArray[this.currentPosition] = true;
    this.progressService.updateProgress(this.login.progress).subscribe();
    localStorage.setItem('currentUser', JSON.stringify(this.login));
  }

  goBack(){
    this.changePageArray[this.currentPosition] = false;
    this.currentPosition--;
    this.changePageArray[this.currentPosition] = true;
    this.progressService.updateProgress(this.login.progress).subscribe();
    localStorage.setItem('currentUser', JSON.stringify(this.login));
  }

  chapterI(){
    this.javaIntro = false;
    this.javaIZeroDoc = true;
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
