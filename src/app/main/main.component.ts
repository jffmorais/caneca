import { Component, OnInit } from '@angular/core';
import { Caneca } from '../model/caneca';
import { CanecasService } from '../service/canecas.service';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  faArrowLeft = faAngleLeft;
  faArrowRight = faAngleRight;
  canecas: Array<Caneca> = [];

  constructor(private canecasServ: CanecasService) { }

  ngOnInit(): void {
    //this.canecas = this.canecasServ.getCanecas();
    this.canecasServ.getCanecas().subscribe((data: Array<Caneca> = [])=>{
      console.log(data);
      this.canecas = data;
    });
  }

}
