import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';

import {AppComponent} from './app.component';
import {DatabaseComponent} from './database/database.component';
import {QueryResultsComponent} from './query-results/query-results.component';
import {NewQueryComponent} from './new-query/new-query.component';
import {AddDatabaseComponent} from './add-database/add-database.component';
import {SidebarComponent} from './sidebar/sidebar.component';

import {MockService} from './shared/services/mock/mock.service';

import {MCRButtonModule,
        MCRDateRangeModule,
        MCRDialogModule,
        MCRGridModule,
        MCRTopBarModule} from 'mcr-components';

@NgModule({
  declarations: [
    AppComponent,
    DatabaseComponent,
    QueryResultsComponent,
    NewQueryComponent,
    AddDatabaseComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MockService, { delay: 100 }),
    MCRTopBarModule,
    MCRDialogModule,
    MCRGridModule,
    MCRButtonModule,
    MCRDateRangeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
