import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch, faSignInAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faSearch = faSearch;
  faSignInAlt = faSignInAlt;
  faShoppingCart = faShoppingCart;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  btnCarrinho(){
    this.router.navigateByUrl('/carrinho');
  }

  btnLogin(){
    this.router.navigateByUrl('/login');
  }

}
