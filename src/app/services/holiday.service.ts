import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { API_CONFIG } from '../constants/api.config';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  constructor(private api: ApiService) {}

  getHolidays() {
    return this.api.get(API_CONFIG.HOLIDAY.GET_ALL);
  }

  createHoliday(data: any) {
    return this.api.post(API_CONFIG.HOLIDAY.CREATE, data);
  }

  updateHoliday(id: number, data: any) {
    return this.api.put(API_CONFIG.HOLIDAY.UPDATE(id), data);
  }

  deleteHoliday(id: number) {
    return this.api.delete(API_CONFIG.HOLIDAY.DELETE(id));
  }
}