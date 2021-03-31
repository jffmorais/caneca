import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanecaComponent } from './caneca/caneca.component';
import { ContaComponent } from './conta/conta.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistroComponent } from './registro/registro.component';
import { SobreComponent } from './sobre/sobre.component';
import { LoginComponent as AdminLoginComponent } from './admin/login/login.component';
import { MainComponent as AdminMainComponent } from './admin/main/main.component';
import { CanecaComponent as AdminCanecaComponent } from './admin/caneca/caneca.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'caneca/:id', component: CanecaComponent },
  { path: 'carrinho', component: CarrinhoComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'conta', component: ContaComponent },
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'admin/main', component: AdminMainComponent },
  { path: 'admin/caneca', component: AdminCanecaComponent },
  { path: 'admin/caneca/:id', component: AdminCanecaComponent },
  { path: 'admin', redirectTo:'/admin/login', pathMatch:'full' },
  { path: '', component: MainComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
