import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { TeamComponent } from './pages/team/team.component';
import { MemberComponent } from './pages/member/member.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'member',
    component: MemberComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TeamComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
