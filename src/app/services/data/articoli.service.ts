import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiMsg } from 'src/models/ApiMsg';
import { IArticoli, ICategoria, IIva } from 'src/models/Articoli';

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
      response.forEach(item => item.descStatoArt = this.getDesStatoArt(item.idStatoArt))

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


getIva = () => this.httpClient.get<IIva[]>(`http://${this.server}:${this.port}/api/iva`);

getCategoria = () => this.httpClient.get<ICategoria[]>(`http://${this.server}:${this.port}/api/cat`);

updArticolo = (articolo: IArticoli) => 
  this.httpClient.put<ApiMsg>(`http://${this.server}:${this.port}/api/articoli/modifica`, articolo);

insArticolo = (articolo: IArticoli) => 
  this.httpClient.post<ApiMsg>(`http://${this.server}:${this.port}/api/articoli/inserisci`, articolo);


}
