import { Component, OnInit } from '@angular/core';
import { Activity } from '../../models/activity.model';
import { Store, select } from '@ngrx/store';
import { loadActivities } from '../../store/activity.actions';
import { selectActivity } from '../../store';


@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {

  activityList: Activity[];

  constructor(
    private readonly store: Store<any>,
  ) { }

  ngOnInit(): void {

    // subscribe to activities state
    this.store.pipe(select(selectActivity)).subscribe(
      (state) => {
        if (!state.loading) {
          this.activityList = state.data;
        }
      }
    );

    // load activities
    this.store.dispatch(loadActivities());

  }

}
