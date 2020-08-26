import { Component, OnInit } from '@angular/core'
import { BookService } from '../shared/book.service'
import { IBooks } from '../shared/books'
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './book-details.component.html',
    styles: [``]
})

export class BookDetailsComponent implements OnInit{

    /**
     *
     */
    book: IBooks
    id: number

    constructor(private bookService: BookService, private route: ActivatedRoute) {
        
    }

    ngOnInit(){
        const param = +this.route.snapshot.paramMap.get('id');
        this.id = param
    this.getBook(this.id);

    }

    getBook(id){
        this.bookService.getBook(id).subscribe((data: any) => {
            this.book = data;
          })
    }

}