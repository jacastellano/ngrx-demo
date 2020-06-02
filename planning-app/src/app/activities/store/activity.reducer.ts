import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './activity.actions';
import { Activity } from '../models/activity.model';

export interface State {
    activities: Activity[];
    loading: boolean;
    error: any;
}

export const initialState: State = {
    activities: [],
    loading: false,
    error: null
};

const activityReducer = createReducer(

    // Initial state
    initialState,

    // load activities
    on(actions.loadActivities, state => ({
        ...state,
        loading: true
    })),
    on(actions.loadActivitiesSuccess, (state, { activities }) => ({
        ...state,
        loading: false,
        activities
    })),
    on(actions.loadActivitiesError, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),

    // create activity
    on(actions.createActivity, state => ({
        ...state,
        loading: true
    })),
    on(actions.createActivitySuccess, (state, { activity }) => ({
        ...state,
        loading: false,
        activities: [...state.activities, activity]
    })),
    on(actions.createActivityError, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),

    // edit activity
    on(actions.editActivity, state => ({
        ...state,
        loading: true
    })),
    on(actions.editActivitySuccess, (state, { activity }) => ({
        ...state,
        loading: false,
        activities: state.activities.map(item => item.id === activity.id ? activity : item)
    })),
    on(actions.editActivityError, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),

    // delete activity
    on(actions.deleteActivity, state => ({
        ...state,
        loading: true
    })),
    on(actions.deleteActivitySuccess, (state, { id }) => ({
        ...state,
        loading: false,
        activities: state.activities.filter(item => item.id !== id)
    })),
    on(actions.deleteActivityError, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),

);

export function reducer(state: State | undefined, action: Action) {
    return activityReducer(state, action);
}
