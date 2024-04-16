import { Component, OnInit } from '@angular/core';
import { AuthappService } from 'src/app/core/services/authapp.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public BasicAuth: AuthappService) { }

  user: string | null = "";


  ngOnInit(): void {
    this.user = sessionStorage.getItem("Utente");
    this.BasicAuth.clearAll();
  }

}
