import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { AuthappService } from 'src/app/services/authapp.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string = "";
  password: string = "";

  autenticato: boolean = true;
  filter$: Observable<string | null> = of("");
  notlogged : boolean = false;

  orderby: string = "";

  errMsg: string = "Spiacente, la userid e/o la password sono errati!";
  errMsg2: string = "Spiacente, devi autenticarti per poter accedere alla pagina selezionata!";

  titolo: string = "Accesso & Autenticazione";
  sottotitolo: string = "Procedi ad inserire la userid e la password";

  constructor(private route: Router, private route2: ActivatedRoute, private BasicAuth: AuthappService ) { }

  ngOnInit(): void {
    this.filter$ = this.route2.queryParamMap.pipe(
      map((params: ParamMap) => params.get('nologged')),
    );

    this.filter$.subscribe(param => (param) ? this.notlogged = true : this.notlogged = false);

    console.log(this.notlogged);

    /*
    const filter = this.route2.snapshot.queryParamMap.get('nologged');
    console.log(filter);
    */
  }

  gestAuth = (): void => {
    console.log(this.userId);

    if (this.BasicAuth.autentica(this.userId, this.password)) {
      this.route.navigate(['welcome', this.userId]);

      this.autenticato = true;
    }
    else {
      this.autenticato = false;

    }
  }
}
