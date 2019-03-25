import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContentProjectionModule} from './content-projection/content-projection.module';
import {AuthService} from './auth.service';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        ContentProjectionModule
    ],
    providers: [{provide: AuthService, useClass: AuthService},
        {provide: 'API_ENDPOINT', useValue: 'http://api.example.com'},
        {provide: 'API_URL', useExisting: 'API_ENDPOINT'}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
