import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { SobreComponent } from './sobre/sobre.component';
import { CanecaComponent } from './caneca/caneca.component';
import { ContaComponent } from './conta/conta.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent as AdminLoginComponent } from './admin/login/login.component';
import { MainComponent as AdminMainComponent } from './admin/main/main.component';
import { CanecaComponent as AdminCanecaComponent } from './admin/caneca/caneca.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    LoginComponent,
    RegistroComponent,
    SobreComponent,
    CanecaComponent,
    ContaComponent,
    CarrinhoComponent,
    PageNotFoundComponent,
    SidebarComponent,
    AdminLoginComponent,
    AdminMainComponent,
    AdminCanecaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
