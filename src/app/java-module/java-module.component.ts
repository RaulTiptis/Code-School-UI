import { Component, OnInit, Input } from '@angular/core';
import {ProgressService} from '../progress.service';

function ex(solutionArray) {
  const trySolution = document.getElementById('tryButton');
  const draggables = document.querySelectorAll('.draggable');
  const solContainers = document.querySelectorAll('.solContainer');
  const container1 = document.querySelectorAll('.exContainer1');
  const container2 = document.querySelectorAll('.exContainer2');
  draggables.forEach(draggable => {
    console.log(draggable)
    draggable.addEventListener('dragstart', dragStart)
    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');
    })
  })
  solContainers.forEach(solContainer => {
    solContainer.addEventListener('dragover', e => {
      e.preventDefault();
      const draggable = document.querySelector('.dragging');
      solContainer.appendChild(draggable);
    })
  })
  container1.forEach(container => {
    container.classList.add('noSolution');
    container.addEventListener('dragover', e => {
      if(container.classList.contains('noSolution')) {
        e.preventDefault();
        const draggable = document.querySelector('.dragging');
        container.appendChild(draggable);
      }
    })
    container.addEventListener('dragleave', e => {
      container.classList.add('noSolution');
    })
    container.addEventListener('drop', Drop1)
  })
  container2.forEach(container => {
    container.classList.add('noSolution');
    container.addEventListener('dragover', e => {
      if(container.classList.contains('noSolution')) {
        e.preventDefault();
        const draggable = document.querySelector('.dragging');
        container.appendChild(draggable);
      }
    })
    container.addEventListener('dragleave', e => {
      container.classList.add('noSolution');
    })
    container.addEventListener('drop', Drop2)
  })

  function Drop1(event) {
    const data1 = event.dataTransfer.getData("text");
    const span1 = document.getElementById(data1);
    solutionArray[0] = span1.textContent;
    event.target.classList.remove('noSolution');
  }

  function Drop2(event) {
    const data2 = event.dataTransfer.getData("text");
    const span2 = document.getElementById(data2);
    solutionArray[1] = span2.textContent;
    console.log(solutionArray)
    event.target.classList.remove('noSolution');
  }

  function dragStart(event) {
    event.target.classList.add('dragging');
    event.dataTransfer.setData("text", event.target.id);
  }

  trySolution.addEventListener('click', sol =>{
    return solutionArray;
  })
}

@Component({
  selector: 'app-java-module',
  templateUrl: './java-module.component.html',
  styleUrls: ['./java-module.component.css']
})
export class JavaModuleComponent implements OnInit {

  @Input() login;
  currentPosition = 0;
  solutionArray = [null, null, null, null];
  exerciseArray = [null, null, null, null];
  nextOne = true;
  exCorrect = false;
  changePageArray = [true, false, false, false, false, false, false]

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
    this.nextOne = true;
    this.exCorrect = false;
    localStorage.setItem('currentUser', JSON.stringify(this.login));
  }

  goBack(){
    this.changePageArray[this.currentPosition] = false;
    this.currentPosition--;
    this.changePageArray[this.currentPosition] = true;
    this.progressService.updateProgress(this.login.progress).subscribe();
    localStorage.setItem('currentUser', JSON.stringify(this.login));
  }

  ex(s0,s1,s2,s3){
    this.exerciseArray[0] = s0;
    this.exerciseArray[1] = s1;
    this.exerciseArray[2] = s2;
    this.exerciseArray[3] = s3;
    ex(this.solutionArray)
  }

  trySolution(){
    console.log(this.exerciseArray, 'xd', this.solutionArray)
    if(this.exerciseArray[0] == this.solutionArray[0] && this.exerciseArray[1] == this.solutionArray[1]
    && this.exerciseArray[2] == this.solutionArray[2] && this.exerciseArray[3] == this.solutionArray[3]) {
      this.exCorrect = true;
      this.nextOne = false;
      this.login.progress.javaLevelOne = true;
    }
  }
}
