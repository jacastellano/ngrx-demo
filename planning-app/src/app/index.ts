import { createFeatureSelector } from '@ngrx/store';
import { ActivityState, activityKey } from './activities/store/activity.reducer';

export interface AppState {
    activity: ActivityState;
}

export const selectActivity = createFeatureSelector<AppState, ActivityState>(activityKey);
