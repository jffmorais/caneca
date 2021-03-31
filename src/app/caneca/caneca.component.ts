import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Caneca } from '../model/caneca';
import { CanecasService } from '../service/canecas.service';

@Component({
  selector: 'app-caneca',
  templateUrl: './caneca.component.html',
  styleUrls: ['./caneca.component.scss']
})
export class CanecaComponent implements OnInit {

  caneca: Caneca;

  constructor(private route: ActivatedRoute, private canecasServ: CanecasService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.canecasServ.getCaneca(id).subscribe((data: Caneca)=>{
      this.caneca = data;
    });
  }

}
