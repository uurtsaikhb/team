import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onClickHome() {
    this.router.navigate(['home']);
  }

  onClickTeam() {
    this.router.navigate(['home'], { queryParams: { segment: 'team' } });
    document.getElementById('team').scrollIntoView({ behavior: 'smooth' });
  }
}
