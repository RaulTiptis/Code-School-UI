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
  javaIOneEx = false;
  javaITwoEx = false;
  javaIThreeEx = false;
  javaIZeroDoc = false;
  javaIOneDoc = false;
  javaITwoDoc = false;
  exTwoArray = ['/.../', '/.../'];
  disableSolution = false;
  nextOne = true;
  exTwoCorrect = false;
  changePageArray = [this.javaIntro, this.javaIZeroDoc, this.javaIOneDoc, this.javaITwoDoc, this.javaIOneEx, this.javaITwoEx, this.javaIThreeEx]

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

  exTwo(){
    if(this.exTwoArray[0] == '-1' && this.exTwoArray[1] == '3'){
      this.nextOne = false;
      this.exTwoCorrect = true;
      this.login.progress.javaLevelOne = true;
    }
  }

  undoTwoEx() {
    for (let i = this.exTwoArray.length - 1; i >= 0; i--) {
      if (this.exTwoArray[i] != '/.../') {
        this.exTwoArray[i] = '/.../';
        this.disableSolution = false;
        break;
      }
    }
  }

  addSolutionExTwo(solution: any){
    for (let i = 0; i < this.exTwoArray.length; i++){
      if(this.exTwoArray[i] == '/.../'){
        this.exTwoArray[i] = solution;
        if(!this.exTwoArray.includes('/.../')){
          this.disableSolution = true;
        }
        break;
      }
    }
  }

}
