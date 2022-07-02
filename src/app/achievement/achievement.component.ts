import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css']
})
export class AchievementComponent implements OnInit {

  constructor() { }

  @Input() login;
  javaProgress = 0;
  pythonProgress = 0;
  cProgress = 0;

  ngOnInit(): void {
    // tslint:disable-next-line:prefer-for-of
    let i = 0
    for(i;i<49;i++) {
    if (this.login.progress.levels[i]) {
      this.javaProgress++;
    }
    }
    this.javaProgress = this.javaProgress * 10;
    for(i;i<100;i++) {
      if (this.login.progress.levels[i]) {
        this.pythonProgress++;
      }
    }
    this.pythonProgress = this.pythonProgress * 10;
    for(i;i<149;i++) {
      if (this.login.progress.levels[i]) {
        this.cProgress++;
      }
    }
    this.cProgress = this.cProgress * 10;
  }

}
