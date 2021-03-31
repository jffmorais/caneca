import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Caneca } from '../../model/caneca';
import { CanecasService } from '../../service/canecas.service';
import { faSearch, faPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  faSearch = faSearch;
  faPen = faPen;
  faPlus = faPlus;
  faTrash = faTrash;

  canecas: Array<Caneca> = [];
  //public canecas = [];

  constructor(private canecasServ: CanecasService, private router: Router) { }

  ngOnInit(): void {
    //this.canecas = this.canecasServ.getCanecas();
    console.log('main admin');
    this.canecasServ.getCanecas().subscribe((data: Array<Caneca> = [])=>{
      this.canecas = data;
      console.log(this.canecas);
    });
  }

  novaCaneca(){
    console.log('nova');
    this.router.navigateByUrl('/admin/caneca');
  }

  editaCaneca(id: number){
    console.log('edita');
    this.router.navigateByUrl('/admin/caneca/'+id);
  }

  apagaCaneca(){
    console.log('apaga');
  }

}
