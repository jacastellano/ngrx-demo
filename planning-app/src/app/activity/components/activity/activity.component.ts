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

  activityStyle: string;

  activityForm: FormGroup;

  constructor(
    private readonly store: Store<any>
  ) { }

  ngOnInit(): void {

    this.activityForm = this.createActivityForm();

    this.activityStyle = 'activity-card ';
    if (this.activity.realDuration) {
      const diff = Math.abs(this.activity.realDuration - this.activity.expectedDuration);
      if (diff < this.activity.expectedDuration * 0.2) {
        this.activityStyle += 'perfect';
      } else if (diff < this.activity.expectedDuration * 0.35) {
        this.activityStyle += 'good';
      } else if (diff < this.activity.expectedDuration * 0.5) {
        this.activityStyle += 'almost';
      } else {
        this.activityStyle += 'fail';
      }
    } else {
      this.activityStyle += 'pending';
    }

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

  public setPerceivedExertion(): void {

    const perceivedExertion = this.activityForm.get('perceivedExertion').value;

    const editedActivity: Activity = {
      ...this.activity,
      perceivedExertion
    };

    this.store.dispatch(editActivity({ activity: editedActivity }));

  }

  private createActivityForm() {
    return new FormGroup({
      duration: new FormControl(this.activity.realDuration),
      perceivedExertion: new FormControl(this.activity.perceivedExertion),
    });
  }

}
