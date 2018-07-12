import { Injectable } from '@angular/core';
import * as members from '../data/members.js';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  member = null;

  constructor() {
    this.member = members[0];
  }

  setMember(member) {
    this.member = member;
  }

  getMember() {
    return this.member;
  }
}
