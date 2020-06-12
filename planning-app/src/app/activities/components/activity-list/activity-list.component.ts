import { Component, OnInit } from '@angular/core';
import { Activity } from '../../models/activity.model';
import { Store, select } from '@ngrx/store';
import { loadActivities } from '../../store/activity.actions';


@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activityList: Activity[];

  constructor(
    private readonly store: Store<any>,
  ) { }

  ngOnInit(): void {

    // subscribe to activities state
    this.store.pipe(select('activities')).subscribe(
      (state) => {
        if (!state.loaading) {
          this.activityList = state.activities;
        }
      }
    );

    // load activities
    this.store.dispatch(loadActivities());

  }

}
