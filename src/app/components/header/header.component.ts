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
    this.router.navigate(['home'], { queryParams: { segment: 'home' } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onClickTeam() {
    this.router.navigate(['home'], { queryParams: { segment: 'team' } });
    if (document.getElementById('team')) {
      document.getElementById('team').scrollIntoView({ behavior: 'smooth' });
    }
  }

  onClickContactUs() {
    this.router.navigate(['home'], { queryParams: { segment: 'contact' } });
    if (document.getElementById('contact')) {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }
  }
}
