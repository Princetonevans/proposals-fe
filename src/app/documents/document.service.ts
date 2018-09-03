import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators/tap';

@Injectable()

export class DocumentService {

  private documentsUrl = "http://localhost:3000/freelance_documents";

  constructor(private http: HttpClient) {

  }
  getDocuments(): Observable<any> {
    return this.http.get(this.documentsUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))))
      // catchError(this.handleError)
  }


}
