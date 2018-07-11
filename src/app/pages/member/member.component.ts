import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'util';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  member = null;

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.member = this.dataService.getMember();
    if (!this.member) {
      this.router.navigate(['/home']);
    } else {
      document.getElementById('avatar').style.backgroundImage = "url('" + this.member.profile.image + "')";
    }
  }
}
