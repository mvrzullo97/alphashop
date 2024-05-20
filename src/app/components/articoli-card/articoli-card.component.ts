import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IArticoli } from 'src/models/Articoli';

@Component({
  selector: 'app-articoli-card',
  templateUrl: './articoli-card.component.html',
  styleUrls: ['./articoli-card.component.css']
})
export class ArticoliCardComponent implements OnInit {

  constructor() { }

  /* @Input() ci permette di trasferire info del componente padre al componente figlio */  
  @Input()
  articolo: IArticoli = {
    codArt: '',
    descrizione: '',
    um: '',
    codStat: '',
    pzCart: 0,
    pesoNetto: 0,
    prezzo: 0,
    idStatoArt: '',
    dataCreazione: new Date(),
    imageUrl: '',
    descStatoArt: '',
    iva: { idIva: 0, descrizione: '', aliquota: 0 },
    famAssort: { id: -1, descrizione: '' },
    barcode: []
  } ;

  @Output()
  delete = new EventEmitter();

  @Output()
  edit = new EventEmitter();


  ngOnInit(): void {}

  editArt = () => this.edit.emit(this.articolo.codArt);

  deleteArt = () => this.delete.emit(this.articolo.codArt);

}
