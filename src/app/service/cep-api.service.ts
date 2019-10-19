import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepAPIService {

  apiURL : string = "https://viacep.com.br/ws/";

  constructor( private httpClient: HttpClientModule) { }

  handleError(error){

     let errorMessage = `Error Code : ${error.status}\nMessage: ${error.nMessage}`;

     alert(errorMessage);

     return throwError(errorMessage);

  }

}
