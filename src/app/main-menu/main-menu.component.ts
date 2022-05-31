import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  isWrapped = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  wrapperFunction(){
    const wrapper = document.getElementById('sidebar-wrapper');
  }

  logout(){
    this.router.navigate(['./home-page']);
  }

}
