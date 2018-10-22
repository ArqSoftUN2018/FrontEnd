import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { TableroComponent } from './components/tablero/tablero.component';

const routes = [
  {path: '',component: HomeComponent},
  {path: 'home', component:UserHomeComponent},
  {path: 'tablero/:id', component:TableroComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
