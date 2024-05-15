import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { LogHistoryEntity } from '../entity/logHistoryEntity';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LogHistoryService {
  constructor(private http: HttpClient) {}
  fetchData(): Observable<LogHistoryEntity[]> {
    return this.http.get<LogHistoryEntity[]>(environment.logHistory).pipe(retry(3), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = error.error.message;
    console.log(errorMessage);
    return throwError(() => new Error(errorMessage));
  };
}
