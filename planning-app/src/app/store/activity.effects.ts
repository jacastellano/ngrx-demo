import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ActivityService } from '../services/activity.service';

@Injectable()
export class ActivityEffects {

    loadActivities$ = createEffect(() => this.actions$.pipe(
        ofType('[Activity] loadActivities'),
        mergeMap(() => this.activityService.findAll()
            .pipe(
                map(activities => ({ type: '[Activity] loadActivitiesSuccess', activities })),
                catchError((error) => of({ type: '[Activity] loadActivitiesError', error }))
            ))
    ));

    createActivity$ = createEffect(() => this.actions$.pipe(
        ofType('[Activity] createActivity'),
        mergeMap((activity) => this.activityService.create(activity)
            .pipe(
                map(activity => ({ type: '[Activity] createActivitySuccess', activity })),
                catchError((error) => of({ type: '[Activity] createActivityError', error }))
            ))
    ));

    editActivity$ = createEffect(() => this.actions$.pipe(
        ofType('[Activity] editActivity'),
        mergeMap((activity) => this.activityService.edit(activity)
            .pipe(
                map(activity => ({ type: '[Activity] editActivitySuccess', activity })),
                catchError((error) => of({ type: '[Activity] editActivityError', error }))
            ))
    ));

    deleteActivity$ = createEffect(() => this.actions$.pipe(
        ofType('[Activity] deleteActivity'),
        mergeMap((id) => this.activityService.delete(id)
            .pipe(
                map(id => ({ type: '[Activity] deleteActivitySuccess', id })),
                catchError((error) => of({ type: '[Activity] deleteActivityError', error }))
            ))
    ));

    constructor(
        private actions$: Actions,
        private activityService: ActivityService,
    ) { }

}
