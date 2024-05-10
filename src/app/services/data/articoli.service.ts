import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IArticoli } from 'src/models/Articoli';

@Injectable({
  providedIn: 'root'
})
export class ArticoliService {

  server : string = "localhost";
  port : string = "5051";

  constructor(private httpClient : HttpClient) { }  

getDesStatoArt = (idStato: string) : string => {
  
  if(idStato === '1')
    return 'Attivo'
  else if (idStato === '2')
    return 'Sopseso'
  else
    return 'Eliminato'
}

getArticoliByDesc = (descrizione: string) => {

  return this.httpClient.get<IArticoli[]>(`http://${this.server}:${this.port}/api/articoli/cerca/descrizione/${descrizione}`)
  .pipe(
    map(response => {
      response.forEach(item => item.idStatoArt = this.getDesStatoArt(item.idStatoArt))

      return response;
    })
  ) 

} 

getArticoliByCode = (codart: string) => {

  return this.httpClient.get<IArticoli>(`http://${this.server}:${this.port}/api/articoli/cerca/codice/${codart}`)
  .pipe(
    map(response => {
      response.idStatoArt = this.getDesStatoArt(response.idStatoArt)
      return response;
    })
  );
}

getArticoliByEan = (barcode: string) => {
  return this.httpClient.get<IArticoli>(`http://${this.server}:${this.port}/api/articoli/cerca/barcode/${barcode}`)
  .pipe(
    map(response => {
      response.idStatoArt = this.getDesStatoArt(response.idStatoArt)
      return response;
    })
  );
}

delArticoloByCodart = (codArt: string) => {
  return this.httpClient.delete(`http://${this.server}:${this.port}/api/articoli/elimina/${codArt}`);
}

}
