import { createAction, props } from '@ngrx/store';
import { Activity } from '../models/activity.model';

export const loadActivities = createAction(
    '[Activity] loadActivities',
    props<{ date: Date }>(),
);

export const loadActivitiesSuccess = createAction(
    '[Activity] loadActivitiesSuccess',
    props<{ activities: Activity[] }>(),
);

export const loadActivitiesError = createAction(
    '[Activity] loadActivitiesError',
    props<{ error: any }>(),
);

export const createActivity = createAction(
    '[Activity] createActivity',
    props<{ activity: Activity }>(),
);

export const createActivitySuccess = createAction(
    '[Activity] createActivitySuccess',
    props<{ activity: Activity }>(),
);

export const createActivityError = createAction(
    '[Activity] createActivityError',
    props<{ error: any }>(),
);

export const editActivity = createAction(
    '[Activity] editActivity',
    props<{ activity: Activity }>(),
);

export const editActivitySuccess = createAction(
    '[Activity] editActivitySuccess',
    props<{ activity: Activity }>()
);

export const editActivityError = createAction(
    '[Activity] editActivityError',
    props<{ error: any }>(),
);

export const deleteActivity = createAction(
    '[Activity] deleteActivity',
    props<{ id: number }>(),
);

export const deleteActivitySuccess = createAction(
    '[Activity] deleteActivitySuccess',
    props<{ id: number }>(),
);

export const deleteActivityError = createAction(
    '[Activity] deleteActivityError',
    props<{ error: any }>(),
);
