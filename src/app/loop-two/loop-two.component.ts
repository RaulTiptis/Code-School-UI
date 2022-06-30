import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {ProgressService} from '../progress.service';

function ex(solutionArray) {
  const trySolution = document.querySelector('.try-button');
  const draggables = document.querySelectorAll('.draggable');
  const solContainers = document.querySelectorAll('.solContainer');
  const container1 = document.querySelector('.exContainer1');
  const container2 = document.querySelector('.exContainer2');
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
  container1.classList.add('noSolution');
  container1.addEventListener('dragover', e => {
    if(container1.classList.contains('noSolution')) {
      e.preventDefault();
      const draggable = document.querySelector('.dragging');
      container1.appendChild(draggable);
    }
    container1.addEventListener('drop', Drop1)
  })


  container2.classList.add('noSolution');
  container2.addEventListener('dragover', e => {
    if(container2.classList.contains('noSolution')) {
      e.preventDefault();
      const draggable = document.querySelector('.dragging');
      container2.appendChild(draggable);
    }
    container2.addEventListener('drop', Drop2)
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
  selector: 'app-loop-two',
  templateUrl: './loop-two.component.html',
  styleUrls: ['./loop-two.component.css']
})
export class LoopTwoComponent implements OnInit {

  @Output() goForwardEvent = new EventEmitter();
  @Output() goBackEvent = new EventEmitter();
  @Input() login;
  nextOne = true;
  exCorrect = false;
  trySolutionButton = true;
  solutionArray = [null, null, null, null];
  exerciseArray = [null, null, null, null];

  constructor(private progressService: ProgressService) { }

  ngOnInit(): void {
  }

  goForward(){
    this.progressService.updateProgress(this.login.progress).subscribe();
    localStorage.setItem('currentUser', JSON.stringify(this.login));
    this.trySolutionButton = true;
    this.goForwardEvent.emit();
  }

  goBack(){
    this.progressService.updateProgress(this.login.progress).subscribe();
    localStorage.setItem('currentUser', JSON.stringify(this.login));
    this.trySolutionButton = true;
    this.goBackEvent.emit();
  }

  ex(s0,s1,s2,s3){
    this.trySolutionButton = false;
    this.exerciseArray[0] = s0;
    this.exerciseArray[1] = s1;
    this.exerciseArray[2] = s2;
    this.exerciseArray[3] = s3;
    ex(this.solutionArray)
  }

  trySolution(){
    if(this.exerciseArray[0] == this.solutionArray[0] && this.exerciseArray[1] == this.solutionArray[1]
      && this.exerciseArray[2] == this.solutionArray[2] && this.exerciseArray[3] == this.solutionArray[3]) {
      this.exCorrect = true;
      this.nextOne = false;
      this.login.progress.javaLevelTwo = true;
    }
  }

}
