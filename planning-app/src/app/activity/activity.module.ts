import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from '../app-material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromActivityReducer from './store/activity.reducer';
import { ActivityEffects } from './store/activity.effects';
import { ActivityComponent } from './components/activity/activity.component';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { AppDateAdapter, APP_DATE_FORMATS } from '../app-date-adapter';


@NgModule({
  declarations: [
    ActivityComponent,
    ActivityListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromActivityReducer.activityKey, fromActivityReducer.reducer),
    EffectsModule.forFeature([ActivityEffects]),
  ],
  exports: [ActivityListComponent],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ]
})
export class ActivityModule { }
