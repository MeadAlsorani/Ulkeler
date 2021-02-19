import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router'
import {NgxPaginationModule} from 'ngx-pagination'
import { AppComponent } from './app.component';
import {UlkeService} from './services/ulke.service';
import {UlkeListComponent} from './ulke/ulke-list/ulke-list.component';
import {FilterPipe} from './pipes/filter.pipe';
import {FormsModule} from '@angular/forms';
const routes:Routes=[
  {path:'ulkeler-list',component:UlkeListComponent},
  {path:'',redirectTo:'/ulkeler-list',pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    UlkeListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule,
    FormsModule,

  ],
  providers: [UlkeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
