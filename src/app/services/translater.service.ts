import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TranslaterService {

  constructor(private http: HttpClient) { }
  gettranslation(englishText: String) {
    var api = `https://api.funtranslations.com/translate/shakespeare.json?text=${englishText}`;
    return this.http.get<any>(api);
  }
}
