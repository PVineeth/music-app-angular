import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { SongsComponent } from './songs/songs.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'new-user', component: NewUserComponent},
  {path:'songs', component: SongsComponent},
  {path:'history', component: HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
