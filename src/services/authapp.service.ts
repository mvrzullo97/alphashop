import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  autentica = (userid: string, password: string) : boolean => {
    var retVal = (userid === 'Alessio' && password === 'admin') ? true : false;
    
    if (retVal) {
      sessionStorage.setItem("Utente", userid);
    }

    return retVal;
  }
  
  loggedUser = () : string | null => (sessionStorage.getItem("Utente")) ? sessionStorage.getItem("Utente") : ""; 

  isLogged = () : boolean => (sessionStorage.getItem("Utente")) ? true : false;


}
