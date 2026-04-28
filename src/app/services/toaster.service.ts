import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';


@Injectable({
  providedIn: 'root'
})
export class ToasterService {
constructor(private messageService: MessageService) {}
showSuccess(desc:any) {
  this.messageService.add({
    severity: 'success',
    summary: 'Success',
    detail: desc
  });
}

showError(desc:any) {
  this.messageService.add({
    severity: 'error',
    summary: 'Error',
    detail: desc
  });
}
}
