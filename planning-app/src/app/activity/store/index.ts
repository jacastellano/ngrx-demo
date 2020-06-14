import { createFeatureSelector } from '@ngrx/store';
import { ActivityState, activityKey } from './activity.reducer';

export const selectActivity = createFeatureSelector<any, ActivityState>(activityKey);
