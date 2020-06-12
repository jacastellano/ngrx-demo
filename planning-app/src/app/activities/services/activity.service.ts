import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Activity } from '../models/activity.model';


/**
 * Manage activities service
 */
@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  /**
   * endpoint
   */
  url: string;

  /**
   * Constructor
   * @param HttpClient Ng HttpClient
   */
  constructor(
    private httpClient: HttpClient,
  ) {
    this.url = 'http://localhost:3000/activities';
  }

  /**
   * Return all activities
   */
  public findAll(): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>(this.url);
  }

  /**
   * Return activity by id
   */
  public findById(id: number): Observable<Activity> {
    return this.httpClient.get<Activity>(`${this.url}/${id}`);
  }

  /**
   * Create activity
   * @param activity Activity data
   */
  public create(activity: Activity): Observable<Activity> {
    return this.httpClient.post<Activity>(this.url, activity, {}).pipe(
      tap((newActivity: Activity) => console.log(`added activity with id=${newActivity.id}`)),
      catchError(this.handleError<Activity>('createActivity'))
    );
  }

  /**
   * Edit activity
   * @param activity Upgraded activity data
   */
  public edit(activity: Activity): Observable<Activity> {
    return this.httpClient.put(`${this.url}/${activity.id}`, activity, {}).pipe(
      tap(() => console.log(`updated activity id=${activity.id}`)),
      catchError(this.handleError<any>('editActivity'))
    );
  }

  /**
   * Delete activity
   * @param id Activity id
   */
  public delete(id: number): Observable<Activity> {
    return this.httpClient.delete<Activity>(`${this.url}/id`, {}).pipe(
      tap(() => console.log(`deleted activity id=${id}`)),
      catchError(this.handleError<Activity>('deleteActivity'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result);
    };
  }

}
