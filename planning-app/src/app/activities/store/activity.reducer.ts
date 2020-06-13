import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './activity.actions';
import { Activity } from '../models/activity.model';

export const activityKey = 'activity';

export interface ActivityState {
    data: Activity[];
    loading: boolean;
    error: any;
}

export const initialState: ActivityState = {
    data: [],
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
        data: activities
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
        data: [...state.data, activity]
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
        data: state.data.map(item => item.id === activity.id ? activity : item)
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
        data: state.data.filter(item => item.id !== id)
    })),
    on(actions.deleteActivityError, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),

);

export function reducer(state: ActivityState | undefined, action: Action) {
    return activityReducer(state, action);
}
