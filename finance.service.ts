import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Papa from 'papaparse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  constructor(private http: HttpClient) {}

  getFinanceData(): Observable<any> {

    return new Observable(observer => {

      this.http
        .get('assets/data/finance.csv', {
          responseType: 'text'
        })
        .subscribe(data => {

          Papa.parse(data, {
            header: true,
            complete: (result) => {
              observer.next(result.data);
              observer.complete();
            }
          });

        });

    });

  }
}