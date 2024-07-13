import { Component, OnInit } from '@angular/core';
import { Reminder, RemindersService } from '../../../core/services/reminders.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {
  reminders: Reminder[] = [];

  constructor(private remindersService: RemindersService) { }

  ngOnInit(): void {
    this.remindersService.getReminders().subscribe(data => {
      this.reminders = data;
    });
  }

  addReminder(): void {
    // Logic to add a reminder
  }
}
