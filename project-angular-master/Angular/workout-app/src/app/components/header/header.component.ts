import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private loginService : LoginService) { }

  // handleRoute(){
  //   this.router.navigate(['login'])
  // }

  logout(){
    this.loginService.logout();
  }

  ngOnInit(): void {
  }

}
