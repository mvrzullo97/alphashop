import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  utente = sessionStorage.getItem("Utente");
  
  titolo: string = "Benvenuto " + this.utente +" in Betashop";
  sottotitolo: string = "Qui puoi visualizzare le offerte del giorno";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.utente = this.route.snapshot.params['userid'];
  }

}
