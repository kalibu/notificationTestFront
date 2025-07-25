import { Component, OnInit } from '@angular/core';
import { SendMessageService } from '../service/send-message.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationEntity } from '../entity/notification';
import { NotificationReturnEntity } from '../entity/notificationReturn';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {
  categories: String[] = [];
  selectedCategory: String = ""; 

  messageForm!: FormGroup;

  messageReturned: String = "";

  constructor(private sendMessageService: SendMessageService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.fetchCategories();
    this.messageForm = this.fb.group({
      message: ['', Validators.required]
    });
  }
  fetchCategories() {
    this.sendMessageService.fetchCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  sendMessage() {
    const message = this.messageForm.value.message;
    const notification = new NotificationEntity();
    notification.category = this.selectedCategory;
    notification.message = message;

    this.sendMessageService.sendMessage(notification).then((data: NotificationReturnEntity) => {
      this.messageReturned = data?.message;
    }).catch((error: any) => {
      console.log(error);
      this.messageReturned = error.message;
    });
  }

}
