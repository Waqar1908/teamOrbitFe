import { Injectable, Type } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PmodelService {

  private openModel = new Subject<any>();
  open$ = this.openModel.asObservable();

  private closeModel = new Subject<any>();
  close$ = this.closeModel.asObservable();

  open(component: Type<any>, config: any = {}) {
    this.openModel.next({ component, ...config });
    return this.close$;
  }

  close(data?: any) {
    this.closeModel.next(data);
  }
}