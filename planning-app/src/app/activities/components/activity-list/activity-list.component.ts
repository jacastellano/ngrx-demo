import { Component, OnInit } from '@angular/core';
import { Activity } from '../../models/activity.model';
import { Store } from '@ngrx/store';
import { loadActivities } from '../../store/activity.actions';


@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activityList: Activity[];

  constructor(
    private readonly store: Store,
  ) { }

  ngOnInit(): void {
    this.activityList = [];
    this.store.dispatch(loadActivities());
  }

}
