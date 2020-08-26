import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IBooks } from '../shared/books'
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class BookService {


    private apiUrl = 'https://localhost:44383/api/books/';

    constructor(private http: HttpClient, private route: Router) {
        
    }

    private handleError(err: HttpErrorResponse){
        let errorMessage = '';
    
        if(err.error instanceof ErrorEvent){
          errorMessage = `An error occurred: ${err.error.message}`;
        }
        else{
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }

        window.alert(errorMessage);
        console.error(errorMessage);
        return throwError(errorMessage);
      }


      getBooks() : Observable<IBooks[]> {
        return this.http.get<IBooks[]>('https://localhost:44383/api/books/getbooks'
        )
        .pipe(tap(data => console.log('All' + JSON.stringify(data))),
        catchError(this.handleError));
      }

      getBook(id:number) : Observable<IBooks>{
        return this.http.get<IBooks>('https://localhost:44383/api/books/getbook/' + id
        )
        .pipe(tap(data => console.log('All' + JSON.stringify(data))),
        catchError(this.handleError));
      }

}