import { Component, OnInit, Input } from '@angular/core';
import { Activity } from 'src/app/activity/models/activity.model';
import { Store } from '@ngrx/store';
import { editActivity } from '../../store/activity.actions';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  @Input()
  activity: Activity;

  constructor(
    private readonly store: Store<any>
  ) { }

  ngOnInit(): void {

  }

  public onInput($event: Event) {
    console.log($event);
  }

  public mark(feeling: number) {

    const editedActivity: Activity = {
      ...this.activity,
      feeling
    };

    this.store.dispatch(editActivity({ activity: editedActivity }));
  }

}
