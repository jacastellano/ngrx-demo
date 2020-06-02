import { Component, OnInit } from '@angular/core';
import { Activity } from '../../models/activity.model';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activityList: Activity[];

  constructor() { }

  ngOnInit(): void {
    this.activityList = [];
  }

}
