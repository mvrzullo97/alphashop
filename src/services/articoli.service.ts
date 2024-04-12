import { Injectable } from '@angular/core';
import { IArticoli } from 'src/models/Articoli';

@Injectable({
  providedIn: 'root'
})
export class ArticoliService {

  articoli: IArticoli[]  = [
    {codart : '014600301', descrizione : 'Penne Barilla 1 KG', um : 'PZ', pzcart : 24, peso : 1, prezzo : 1.09, active : true, data : new Date(), imageUrl: 'assets/images/prodotti/penne.png'},
    {codart : "013500121", descrizione : "Farfalle Barilla 0.5 KG", um : "PZ", pzcart : 30, peso : 0.5, prezzo : 1.3, active : true, data : new Date(), imageUrl: 'assets/images/prodotti/far.png'},
    {codart : "007686402", descrizione : "Mini Farfalle Barilla", um : "PZ", pzcart : 8, peso : 0.3, prezzo : 6.46, active : true, data : new Date(), imageUrl: 'assets/images/prodotti/mini_farf.png'},
    {codart : "057549001", descrizione : "Spaghetti Barilla", um : "PZ", pzcart : 12, peso : 0.4, prezzo : 5.97, active : true, data : new Date(), imageUrl: 'assets/images/prodotti/spag.png'}
  ]

  constructor() { }

  getArticoli = () : IArticoli[] => this.articoli;

  getArticoliByCode = (codart: string) : IArticoli => {
        const index = this.articoli.findIndex(articoli => articoli.codart === codart);
        return this.articoli[index];
     }


}
