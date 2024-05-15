import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NotificationEntity } from '../entity/notification';

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
  }

  sendMessage(notification: NotificationEntity): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };

    return this.http.post<NotificationEntity>(environment.sendNotification, notification, httpOptions)
      .toPromise()
      .then((data: any) => {
        return data;
      })
      .catch((error) => {
        throw error;
      });
  }
}
