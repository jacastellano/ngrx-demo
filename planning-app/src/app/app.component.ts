import { Component } from '@angular/core';
import { ActivityType } from './models/activity.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentDate = new Date();

  activity = {
    id: 1,
    title: 'Natación en el mar',
    description: '10 min calentamiento \n3 x 1:30 fuerte rec. 2 min \n10 min vuelta a la calma',
    type: ActivityType.SPORT,
    expectedDuration: 30,
    date: new Date()
  };

}
