import { Injectable } from '@angular/core';
import { Caneca } from '../model/caneca';
import { canecas } from '../model/fakedata';

@Injectable({
  providedIn: 'root'
})
export class CanecasService {

  constructor() { }

  getCanecas(): Array<Caneca> {
    return canecas;
  }

  getCaneca(id: number): Caneca{
    let caneca: Caneca;
    caneca = canecas.find( item => item.id === id );
    return caneca;
  }
}
