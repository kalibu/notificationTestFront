import { Component, OnInit } from '@angular/core';
import { LogHistoryService } from '../service/log-history.service';
import { LogHistoryEntity } from '../entity/logHistoryEntity';

@Component({
  selector: 'app-log-history',
  templateUrl: './log-history.component.html',
  styleUrls: ['./log-history.component.scss'],
})
export class LogHistoryComponent implements OnInit {
  logs: LogHistoryEntity[] = [];
  constructor(private logHistoryService: LogHistoryService) {}
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.logHistoryService.fetchData().subscribe((logs) => {
      this.logs = logs;
    });
  }

}
