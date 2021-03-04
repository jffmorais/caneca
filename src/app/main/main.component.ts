import { Component, OnInit } from '@angular/core';
import { Caneca } from '../model/caneca';
import { CanecasService } from '../service/canecas.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  canecas: Array<Caneca> = [];

  constructor(private canecasServ: CanecasService) { }

  ngOnInit(): void {
    this.canecas = this.canecasServ.getCanecas();
  }

}
