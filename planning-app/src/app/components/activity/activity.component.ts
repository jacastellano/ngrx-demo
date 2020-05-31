import { Component, OnInit, Input } from '@angular/core';
import { Activity, ActivityType } from 'src/app/models/activity.model';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  @Input()
  activity: Activity;

  constructor() { }

  ngOnInit(): void {

  }

  public onInput($event: Event) {
    console.log($event);
  }

  public mark(id: number) {
    this.activity.feeling = id;
  }

}
