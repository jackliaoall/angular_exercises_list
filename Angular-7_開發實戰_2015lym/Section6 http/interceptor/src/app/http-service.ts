import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';
@Injectable()
export class HttpService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(public http: HttpClient) { }

  public get(url: string): Observable<any> {
    return this.http.get(this.baseUrl + url).pipe(
      retry(2),
      map(this.extractData),
      tap(() => { }),
      catchError(this.handleError('get', []))
    );
  }

  public post(url: string, data: any = {}): Observable<any> {
    return this.http.post(this.baseUrl + url, data).pipe(
      retry(2),
      map(this.extractData),
      tap(() => { }),
      catchError(this.handleError('post', []))
    );
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
