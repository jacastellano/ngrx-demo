import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from '../app-material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './store/activity.reducer';
import { ActivityEffects } from './store/activity.effects';
import { ActivityComponent } from './components/activity/activity.component';
import { ActivityListComponent } from './components/activity-list/activity-list.component';


@NgModule({
  declarations: [
    ActivityComponent,
    ActivityListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    StoreModule.forFeature('activities', reducer),
    EffectsModule.forFeature([ActivityEffects]),
  ],
  exports: [ActivityListComponent]
})
export class ActivitiesModule { }
