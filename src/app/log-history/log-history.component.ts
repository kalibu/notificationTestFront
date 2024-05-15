import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { LogHistoryEntity } from '../entity/logHistoryEntity';

@Component({
  selector: 'app-log-history',
  templateUrl: './log-history.component.html',
  styleUrls: ['./log-history.component.scss'],
})
export class LogHistoryComponent implements OnInit {
  logs: LogHistoryEntity[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.dataService.fetchData().subscribe((logs) => {
      this.logs = logs;
    });
  }

}
