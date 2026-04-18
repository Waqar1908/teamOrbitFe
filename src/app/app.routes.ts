import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadComponent: () => import('./module/auth/auth/auth.component').then(m => m.AuthComponent)
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./module/dashboard/main/main.component').then(m => m.MainComponent),
        children: [
           
            {
                path:'',
                loadComponent: () => import('./module/dashboard/dashboard-main/dashboard-main.component').then(m => m.DashboardMainComponent),
                pathMatch:'full'
            },
             {
                path:'employees',
                loadComponent: () => import('./module/dashboard/employee/employee.component').then(m => m.EmployeeComponent),
            },
            {
                path:'attendance',
                loadComponent: () => import('./module/dashboard/attendance/attendance.component').then(m => m.AttendanceComponent),
            },
            {
                path:'company',
                loadComponent: () => import('./module/dashboard/company/company.component').then(m => m.CompanyComponent),
            },
            {   
                path:'holidays',    
                loadComponent:()=>import('./module/dashboard/holiday/holiday.component').then(m=>m.HolidayComponent)
            },
            {
                path:'reports',
                loadComponent:()=>import('./module/dashboard/analysis/analysis.component').then(m=>m.AnalysisComponent)
            },
            {
                path:'settings',
                loadComponent:()=>import('./module/dashboard/setting/setting.component').then(m=>m.SettingComponent)

            }
        ]
    },
    {
        path:'**',
        redirectTo:'auth'
    }
];
