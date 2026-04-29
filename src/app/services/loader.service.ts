import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
 private loader$ = new BehaviorSubject<boolean>(false);

  show() {
    this.loader$.next(true);
  }

  hide() {
    this.loader$.next(false);
  }

  getLoder() {
    return this.loader$.asObservable();
  }
  
}
