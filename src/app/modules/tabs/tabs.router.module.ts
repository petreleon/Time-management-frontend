import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'task',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../task/task.module').then(m => m.TaskPageModule)
          },
        ]
      },
    //   {
    //     path: 'booking',
    //     children: [
    //       {
    //         path: '',
    //         loadChildren: () =>
    //           import('../booking/booking.module').then(m => m.BookingModule)
    //       }
    //     ]
    //   },
      {
        path: '',
        redirectTo: 'tabs/task',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/task',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
