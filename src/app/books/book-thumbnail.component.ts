import { Component, Input } from '@angular/core'
import { IBooks } from '../shared/books'

@Component({
    selector: 'book-thumbnail',
    template: `

    
    `,
    styles: [`
    /* .green {color: #003300 !important;}
    .bold { font-weight: bold; } */
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px ;}
    .well div { color: #bbb; }
  `]
})

export class BookThumbnailComponent{
    @Input () book: IBooks
}