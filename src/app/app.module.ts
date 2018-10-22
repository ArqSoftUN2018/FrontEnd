import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { TableroComponent } from './components/tablero/tablero.component';
import { ListaComponent } from './components/lista/lista.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { SingupComponent } from './components/singup/singup.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { TableroInfoComponent } from './components/user-home/tablero-info/tablero-info.component';
import { TareaInfoComponent } from './components/user-home/tarea-info/tarea-info.component';
import { AgregarTareaComponent } from './components/lista/agregar-tarea/agregar-tarea.component';
import { EditarTareaComponent } from './components/user-home/tarea-info/editar-tarea/editar-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TableroComponent,
    ListaComponent,
    SingupComponent,
    UserHomeComponent,
    TableroInfoComponent,
    TareaInfoComponent,
    AgregarTareaComponent,
    EditarTareaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
