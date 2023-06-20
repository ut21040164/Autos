import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DireccionesComponent } from './direcciones/direcciones.component';
import { ModelosComponent } from './modelos/modelos.component';
import { ServicioComponent } from './servicio/servicio.component';

const routes: Routes = [{path:'', component:MainComponent},
                        {path:'login', component:LoginComponent},
                        {path:'register', component:RegisterComponent},
                        {path:'direcciones', component:DireccionesComponent},
                        {path:'modelos', component:ModelosComponent},
                        {path:'servicio', component:ServicioComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
