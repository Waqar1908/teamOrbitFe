import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { API_CONFIG } from '../constants/api.config';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor( private apiService:ApiService) { }

  getAllEmp(){
    return this.apiService.get(API_CONFIG.EMPLOYEE.GET_ALL)
  }
  createEmp(reqBody:any){
    return this.apiService.post(API_CONFIG.EMPLOYEE.CREATE, reqBody)
  } 
  updateEmp(id:number, reqBody:any){
    return this.apiService.put(API_CONFIG.EMPLOYEE.UPDATE(id), reqBody)
  }
  deleteEmp(id:number){
    return this.apiService.delete(API_CONFIG.EMPLOYEE.DELETE(id))
  }



}
