import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OneDrinkPromoService {
  constructor(private http: HttpClient) {}

  private url: string = environment.baseUrl + 'v1/OneDrinkPromo';

  public logar(): Observable<any> {
    console.log(this.url);
    return this.http.get<any>(this.url).pipe(map((res) => res));
  }

  register(payload: { name: string; cpf: string }): Observable<any> {
    return this.http.post(`${this.url}/Register`, payload).pipe(
      map((res) => {
        return res;
      }),
      catchError((e) => {
        if (e.status === 0) return 'Servidor offline';
        return throwError(() => e);
      })
    );
  }
}
