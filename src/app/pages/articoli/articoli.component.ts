import { Component, OnInit } from '@angular/core';
import { IArticoli } from 'src/models/Articoli';
import { ArticoliService } from 'src/app/services/data/articoli.service';
import { error } from 'console';


@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit {

  articoli$: IArticoli[]  = [];
  errore : string = "";
    
  constructor(private articoliService: ArticoliService) { }

  ngOnInit(): void {
    this.articoliService.getArticoliByDesc('Barilla').subscribe({
      next: this.handleResponse.bind(this),
      error: this.handleError.bind(this)
    });
  }

  handleResponse(response: IArticoli[]){
    this.articoli$ = response;
  }

  handleError(error: Object){
    this.errore = error.toString();
  }

}
