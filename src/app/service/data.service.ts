import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { LogHistoryEntity } from '../entity/logHistoryEntity';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  fetchData(): Observable<LogHistoryEntity[]> {
    return this.http.get<LogHistoryEntity[]>(environment.logHistory);
  }
}
