import { Component, OnInit } from '@angular/core';
import { IArticoli } from 'src/models/Articoli';
import { ArticoliService } from 'src/app/services/data/articoli.service';
import { error } from 'console';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { newArray } from '@angular/compiler/src/util';


@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit {

  articoli$: IArticoli[] = [];
  errore : string = "";

  pagina : number = 1;
  righe : number = 10;

  filter$ : Observable<string | null> = of("");
  filter: string | null = "";

  filterType : number = 0;
    
  constructor(private articoliService: ArticoliService, private route: ActivatedRoute) { }

  ngOnInit(): void {  

    this.filter$ = this.route.queryParamMap.pipe(
      map((params: ParamMap) => params.get('filter')),
    );

    this.filter$.subscribe(param => (this.filter = param));

    if (this.filter) {
      this.getArticoli(this.filter);
    }
  }

  getArticoli = (filter : string) => {

    this.articoli$ = [];

    if (this.filterType === 0) 
      {
      this.articoliService.getArticoliByCode(filter).subscribe({
        next: this.handleResponse.bind(this),
        error: this.handleError.bind(this)
      });
    
      } 
      else if (this.filterType === 1) 
      {
        this.articoliService.getArticoliByDesc(filter).subscribe({
          next: this.handleResponse.bind(this),
          error: this.handleError.bind(this)
      });
      } 
      else if (this.filterType === 2) 
      {
        this.articoliService.getArticoliByEan(filter).subscribe({
          next: this.handleResponse.bind(this),
          error: this.handleError.bind(this)
      });
    
      }
  }

  refresh = () => {
    if (this.filter){
      this.getArticoli(this.filter);
    }
  }

  handleResponse(response: any){
    if (this.filterType === 0 || this.filterType == 2)
      {
        let newArray : IArticoli[] = [...this.articoli$, response];
        this.articoli$ = newArray;
        console.log(this.articoli$);
      }
      else
      {
        this.articoli$ = response;
      } 

      this.filterType = 0;
  }

  handleError(error: any){
    if (this.filter && this.filterType === 0)
      {
          this.filterType = 1;
          this.getArticoli(this.filter);
      }
    else if  (this.filter && this.filterType === 1)
      {
          this.filterType = 2;
          this.getArticoli(this.filter);
      }
    else
      {
          console.log(error);
          this.errore = error.error.mex;
          this.filterType = 0;
      }
  }
}
