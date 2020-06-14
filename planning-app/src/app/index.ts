import { createFeatureSelector } from '@ngrx/store';
import { ActivityState, activityKey } from './activity/store/activity.reducer';

export interface AppState {
    activity: ActivityState;
}

export const selectActivity = createFeatureSelector<AppState, ActivityState>(activityKey);
