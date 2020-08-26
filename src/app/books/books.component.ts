import { Component, OnInit } from '@angular/core'
import { IBooks } from '../shared/books'
import { BookService } from '../shared/book.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'book-component',
    templateUrl: './books.component.html',
    styles: [`
    /* .green {color: #003300 !important;}
    .bold { font-weight: bold; } */
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px ;}
    .well div { color: #bbb; }
  `]
})

export class BooksComponent implements OnInit {

    books: IBooks[]

    /**
     *
     */
    constructor(private bookService: BookService, private route: ActivatedRoute) {
        
    }

    ngOnInit(){

        this.books = this.route.snapshot.data['books']
        // this.bookService.getBooks().subscribe(books => {
        //     this.books = books
        // })
    }

}