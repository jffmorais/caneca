import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mostrarNav = true;
  mostrarFooter = true;
  title = 'caneca';

  constructor(private authServ: AuthService){

  }

  ngOnInit(){
    // this.authServ.mostrarNavEmmiter.subscribe(
    //   (data: boolean) => {
    //     this.mostrarNav = data;
    //     this.mostrarFooter = data;
    //   }
    // );
  }
}
