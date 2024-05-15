import { Component, OnInit } from '@angular/core';
import { SendMessageService } from '../service/send-message.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {
  categories: String[] = [];
  constructor(private sendMessageService: SendMessageService) {}
  ngOnInit(): void {
    this.fetchCategories();
  }
  fetchCategories() {
    this.sendMessageService.fetchCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

}
