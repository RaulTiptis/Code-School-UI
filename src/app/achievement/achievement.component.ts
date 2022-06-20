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

  ngOnInit(): void {
    if (this.login.progress.javaLevelOne) {
      this.javaProgress = 100;
    }
  }

}
