import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { NavBarComponent } from './nav/navbar.component'
import { BooksComponent } from './books/books.component'
import { BookThumbnailComponent } from './books/book-thumbnail.component'
import { BookDetailsComponent } from './books/book-details.component'

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BooksResolver } from './books/books.resolver'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BooksComponent,
    BookThumbnailComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([

      { path: 'books', component: BooksComponent, resolve: {books: BooksResolver} },
      { path: 'books/:id', component: BookDetailsComponent },
      { path: '', redirectTo: '/books', pathMatch: 'full'},

    ]),
    HttpClientModule
  ],
  providers: [BooksResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
