import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  private _tileData = new BehaviorSubject([]);
  public readonly tileData = this._tileData.asObservable();
  constructor(private http: HttpClient) {}

  getData() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((e: any) => {
        this._tileData.next(e);
      });
  }
}
