import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanecaComponent } from './caneca/caneca.component';
import { ContaComponent } from './conta/conta.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegistroComponent } from './registro/registro.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'caneca/:id', component: CanecaComponent },
  { path: 'sobre', component: SobreComponent},
  { path: 'conta', component: ContaComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
