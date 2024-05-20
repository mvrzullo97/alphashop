import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { ArticoliService } from 'src/app/services/data/articoli.service';
import { ApiMsg } from 'src/models/ApiMsg';
import { IArticoli, ICategoria, IIva } from 'src/models/Articoli';

@Component({
  selector: 'app-gestart',
  templateUrl: './gestart.component.html',
  styleUrls: ['./gestart.component.css']
})
export class GestartComponent implements OnInit {

  constructor(private route : ActivatedRoute, private articoliSertvice: ArticoliService, private router: Router) { }

  title : string = "Modifica Articoli";

  isModifica: boolean = false;
  codArt: string = "";

  ean: string = '';

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
    iva: { idIva: -1, descrizione: '', aliquota: 0 },
    famAssort: { id: -1, descrizione: '' },
    barcode: []
  };

  Iva: IIva[] = [];
  Cat: ICategoria[] = [];

  apiMsg!: ApiMsg;
  mexConferma: string = '';
  mexErrore: string = '';
  

  ngOnInit(): void {
    
    this.codArt = this.route.snapshot.params['codart'];
    

    if (this.codArt) {
      
        console.log("Selezionato articolo " + this.codArt);

        this.title = "Modifica Articolo";
        this.isModifica = true;
        this.articoliSertvice.getArticoliByCode(this.codArt).subscribe({
        next: this.handleResponse.bind(this),
        error: this.handleError.bind(this)     
      });
  
      } else {
        this.title = "Creazione nuovo Articolo";
        this.isModifica = false;
      }
 
    this.articoliSertvice.getIva().subscribe(
      res => {
        this.Iva = res;
        console.log(res);
      }
    )

    this.articoliSertvice.getCategoria().subscribe(
      res => {
        this.Cat = res;
        console.log(res);
      }
    )

  }

  handleResponse(res : any) {
    this.articolo = res;

    this.ean = (this.articolo.barcode) ? this.articolo.barcode[0].barcode : "";
    console.log(this.articolo);
  }

  convertDesToIdStato = (des: string) : string => {
    if (des === 'Attivo')
      return '1';
    else if (des === 'Sospeso')
      return '2';
    else return '3';
  }

  handleError(err : any) {
    console.log(err);
  }

  salva = () => {

    console.log(this.articolo);

    this.mexConferma ="";
    this.mexErrore="";

    if (this.isModifica) {
      this.articoliSertvice.updArticolo(this.articolo).subscribe({
        next: (res) => {
          this.apiMsg = res;
          this.mexConferma = this.apiMsg.message;
        },

        error: (err) => {
          this.apiMsg = err.error;
          this.mexErrore = this.apiMsg.message;
        }
      });  
    } else {
      this.articoliSertvice.insArticolo(this.articolo).subscribe({
        next: (res) => {
          this.apiMsg = res;
          this.mexConferma = this.apiMsg.message;
        },

        error: (err) => {
          this.apiMsg = err.error;
          this.mexErrore = this.apiMsg.message;
        }
      });  
    }    
  }

  abort = () => {

    if (this.isModifica) {
      this.router.navigate(['articoli'], {queryParams: {filter: this.codArt}});
    } else 
      this.router.navigate(['articoli']);
  }


}


