import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators/tap';
import { Proposal } from './proposal'
@Injectable()
export class ProposalService {

  proposalsUrl = 'http://localhost:3002/proposals';

  constructor(private http: HttpClient) { }

  getProposals(): Observable<any> {
    return this.http.get(this.proposalsUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))))
      // catchError(this.handleError)
  }

  getProposal(id: number) {
    return this.http.get(this.proposalsUrl + '/' + id);
  }
}
