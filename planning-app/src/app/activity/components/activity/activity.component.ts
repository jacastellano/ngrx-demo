import { Component, OnInit, Input } from '@angular/core';
import { Activity, ActivityType, Feeling } from 'src/app/activity/models/activity.model';
import { Store } from '@ngrx/store';
import { editActivity } from '../../store/activity.actions';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  ActivityType = ActivityType;
  Feeling = Feeling;

  @Input()
  activity: Activity;

  activityForm: FormGroup;

  constructor(
    private readonly store: Store<any>
  ) { }

  ngOnInit(): void {
    this.activityForm = this.createActivityForm();
  }

  public setDuration(): void {

    const duration = this.activityForm.get('duration').value;

    const editedActivity: Activity = {
      ...this.activity,
      realDuration: duration
    };

    this.store.dispatch(editActivity({ activity: editedActivity }));
  }

  public setFeeling(feeling: number) {

    const editedActivity: Activity = {
      ...this.activity,
      feeling
    };

    this.store.dispatch(editActivity({ activity: editedActivity }));
  }

  private createActivityForm() {
    return new FormGroup({
      duration: new FormControl(this.activity.realDuration)
    });
  }

}
