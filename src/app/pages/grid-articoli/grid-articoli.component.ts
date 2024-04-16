import { Component, OnInit } from '@angular/core';
import { IArticoli } from 'src/models/Articoli';
import { ArticoliService } from 'src/app/core/services/articoli.service';

@Component({
  selector: 'app-grid-articoli',
  templateUrl: './grid-articoli.component.html',
  styleUrls: ['./grid-articoli.component.css']
})
export class GridArticoliComponent implements OnInit {

  articoli$ : IArticoli[] = [];

  constructor(private articoliService: ArticoliService) { }

  ngOnInit(): void {
    this.articoli$ = this.articoliService.getArticoli();
    console.log(this.articoli$);
  }

  handleEdit = (codiceArticolo: string) => {
    console.log("Cliccato tasto modifica del codice " + codiceArticolo);
  }

  handleDelete = (codiceArticolo: string) => {
    console.log("Cliccato tasto elimina del codice " + codiceArticolo);
    
    
  }



}
