import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { LogHistoryComponent } from './log-history/log-history.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
const extraOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};
const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'log-history',
    component: LogHistoryComponent,
    pathMatch: 'full',
  },
  {
    path: 'send-message',
    component: SendMessageComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, extraOptions),
            FormsModule,
            MatSelectModule
  ],
  exports: [RouterModule, MatSelectModule],
})
export class AppRoutingModule {}
