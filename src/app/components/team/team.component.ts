import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import * as members from '../../data/members.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  constructor(private router: Router, private dataService: DataService) {}

  members = members;

  ngOnInit() {}

  onClick(member) {
    this.dataService.setMember(member);

    this.router.navigate(['/member']);
  }
}
