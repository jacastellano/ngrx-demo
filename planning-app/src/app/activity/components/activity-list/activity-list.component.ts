import { Component, OnInit } from '@angular/core';
import { Activity } from '../../models/activity.model';
import { Store, select } from '@ngrx/store';
import { loadActivities } from '../../store/activity.actions';
import { selectActivity } from '../../store';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {

  filtersForm: FormGroup;

  activityList: Activity[];

  constructor(
    private readonly store: Store<any>,
  ) { }

  ngOnInit(): void {

    // Create filters form
    this.filtersForm = this.createFiltersForm();

    // subscribe to form changes
    this.filtersForm.valueChanges.subscribe(
      (data) => {
        if (data.date) {
          // refresh activities
          this.store.dispatch(loadActivities({ date: data.date }));
        }
      }
    );

    // subscribe to activities state
    this.store.pipe(select(selectActivity)).subscribe(
      (state) => {
        if (!state.loading) {
          this.activityList = state.data;
        }
      }
    );

    // refresh activities
    this.store.dispatch(loadActivities({ date: new Date() }));

  }

  private createFiltersForm() {
    return new FormGroup({
      date: new FormControl(new Date()),
    });
  }

}
