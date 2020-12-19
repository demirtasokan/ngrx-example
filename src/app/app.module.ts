import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { BookListComponent } from './book-list/book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { GoogleBooksService } from './book-list/books.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, BookListComponent, BookCollectionComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [GoogleBooksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
