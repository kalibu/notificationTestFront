import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SendMessageService {

  constructor(private http: HttpClient) {}
  fetchCategories(): Observable<String[]> {
    return this.http.get<String[]>(environment.categoryList).pipe(retry(3), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = error.error.message;
    console.log(errorMessage);
    return throwError(() => new Error(errorMessage));
  };
}
