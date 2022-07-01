import {Component, Input, OnInit} from '@angular/core';
import {ProgressService} from '../progress.service';

function ex(solutionArray) {
  const trySolution = document.querySelector('.try-button');
  const draggables = document.querySelectorAll('.draggable');
  const solContainers = document.querySelectorAll('.solContainer');
  const container1 = document.querySelector('.exContainer1');
  const container2 = document.querySelector('.exContainer2');
  const container3 = document.querySelector('.exContainer3');
  const container4 = document.querySelector('.exContainer4');
  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart)
    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');
      if(container1.children.length == 0){
        container1.classList.add('noSolution');
      }
      if(container2.children.length == 0){
        container2.classList.add('noSolution');
      }
    })
  })
  solContainers.forEach(solContainer => {
    solContainer.addEventListener('dragover', e => {
      e.preventDefault();
      const draggable = document.querySelector('.dragging');
      solContainer.appendChild(draggable);
    })
  })
  if(container1 != null) {
    container1.classList.add('noSolution');
    container1.addEventListener('dragover', e => {
      if (container1.classList.contains('noSolution')) {
        e.preventDefault();
        const draggable = document.querySelector('.dragging');
        container1.appendChild(draggable);
      }
      container1.addEventListener('drop', Drop1)
    })
  }

  if(container2 != null) {
    container2.classList.add('noSolution');
    container2.addEventListener('dragover', e => {
      if (container2.classList.contains('noSolution')) {
        e.preventDefault();
        const draggable = document.querySelector('.dragging');
        container2.appendChild(draggable);
      }
      container2.addEventListener('drop', Drop2)
    })
  }

  if(container3 != null) {
    container3.classList.add('noSolution');
    container3.addEventListener('dragover', e => {
      if (container3.classList.contains('noSolution')) {
        e.preventDefault();
        const draggable = document.querySelector('.dragging');
        container3.appendChild(draggable);
      }
      container3.addEventListener('drop', Drop3)
    })
  }

  if(container4 != null) {
    container4.classList.add('noSolution');
    container4.addEventListener('dragover', e => {
      if (container4.classList.contains('noSolution')) {
        e.preventDefault();
        const draggable = document.querySelector('.dragging');
        container4.appendChild(draggable);
      }
      container4.addEventListener('drop', Drop4)
    })
  }

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
    event.target.classList.remove('noSolution');
  }

  function Drop3(event) {
    const data3 = event.dataTransfer.getData("text");
    const span3 = document.getElementById(data3);
    solutionArray[2] = span3.textContent;
    event.target.classList.remove('noSolution');
  }

  function Drop4(event) {
    const data4 = event.dataTransfer.getData("text");
    const span4 = document.getElementById(data4);
    solutionArray[3] = span4.textContent;
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
  selector: 'app-c-module',
  templateUrl: './c-module.component.html',
  styleUrls: ['./c-module.component.css']
})
export class CModuleComponent implements OnInit {

  @Input() login;
  trySolutionButton = true;
  currentPosition = 0;
  solutionArray = [null, null, null, null];
  exerciseArray = [null, null, null, null];
  changePageArray = [true, false, false, false, false, false, false, false, false, false, false, false,false,false,false,false,false,false]

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
    this.trySolutionButton = true;
    this.solutionArray = [null, null, null, null];
  }

  goToChapter(chapterNumber){
    this.changePageArray[this.currentPosition] = false;
    this.currentPosition = chapterNumber;
    this.changePageArray[this.currentPosition] = true;
    this.progressService.updateProgress(this.login.progress).subscribe();
    localStorage.setItem('currentUser', JSON.stringify(this.login));
    this.trySolutionButton = true;
    this.solutionArray = [null, null, null, null];
  }

  goBack(){
    this.changePageArray[this.currentPosition] = false;
    this.currentPosition--;
    this.changePageArray[this.currentPosition] = true;
    this.progressService.updateProgress(this.login.progress).subscribe();
    localStorage.setItem('currentUser', JSON.stringify(this.login));
    this.trySolutionButton = true;
    this.solutionArray = [null, null, null, null];
  }

  ex(s0,s1,s2,s3){
    this.trySolutionButton = false;
    this.exerciseArray[0] = s0;
    this.exerciseArray[1] = s1;
    this.exerciseArray[2] = s2;
    this.exerciseArray[3] = s3;
    ex(this.solutionArray)
  }

  trySolution(levelNumber: any){
    console.log(this.exerciseArray, this.solutionArray)
    if(this.exerciseArray[0] == this.solutionArray[0] && this.exerciseArray[1] == this.solutionArray[1]
      && this.exerciseArray[2] == this.solutionArray[2] && this.exerciseArray[3] == this.solutionArray[3]) {
      this.login.progress.levels[levelNumber] = true;
      this.progressService.updateProgress(this.login.progress).subscribe();
      localStorage.setItem('currentUser', JSON.stringify(this.login));
    }
  }

}
