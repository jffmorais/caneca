import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Caneca } from 'src/app/model/caneca';
import { CanecasService } from 'src/app/service/canecas.service';

@Component({
  selector: 'app-caneca',
  templateUrl: './caneca.component.html',
  styleUrls: ['./caneca.component.scss']
})
export class CanecaComponent implements OnInit {

  caneca: Caneca = new Caneca();
  txtBotao = 'Adicionar';
  txtTitulo = 'Nova caneca';
  editMode = false;

  constructor(private canecasServ: CanecasService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.txtBotao = 'Salvar';
      this.txtTitulo = 'Editar caneca';
      this.editMode = true;
      this.canecasServ.getCaneca(id).subscribe((data: Caneca) => {
        this.caneca = data;
      });
    }
  }

  adicionar() {
    //console.log(this.caneca);
    if (this.editMode) {
      this.canecasServ.editCaneca(this.caneca).subscribe(data => {
        console.log('editado com sucesso', data);
        this.router.navigateByUrl('/admin/main');
      })
    } else {
      this.caneca.dtCriacao = new Date();
      this.canecasServ.newCaneca(this.caneca).subscribe(data => {
        console.log('adicionado com sucesso', data);
        this.router.navigateByUrl('/admin/main');
      });
    }

  }

  cancelar() {
    this.router.navigateByUrl('/admin/main');
  }

}
