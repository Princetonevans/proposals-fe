import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators/tap';
import { Proposal } from './proposal'
import { RequestOptions, Response, Headers, Http } from '@angular/http';
@Injectable()
export class ProposalService {

  proposalsUrl = 'http://localhost:3002/proposals';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

  getProposals(): Observable<any> {
    return this.http.get(this.proposalsUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))))
      // catchError(this.handleError)
  }

  getProposal(id: number) {
    return this.http.get(this.proposalsUrl + '/' + id);
  }

  createProposal(proposal) {
    return this.http.post<Proposal>(this.proposalsUrl, proposal, this.httpOptions)
  }
}
