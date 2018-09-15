
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';
import { HttpClient } from '@angular/common/http';

@Component({
	moduleId: module.id,
	selector: 'proposal-show',
	templateUrl: 'proposal-show.component.html',
	// styleUrls: ['proposal-show.component.css'],
	providers: [ ProposalService ]
})
export class ProposalShowComponent implements OnInit {
	constructor(
		private http: HttpClient,
		private proposalService: ProposalService,
		private route: ActivatedRoute
	) {}

	@Input()
  proposal: any;
  errorMessage;

	ngOnInit(): void {
		let proposalRequest = this.route.params
				.flatMap((params: Params) =>
					this.proposalService.getProposal(+params['id']));
		proposalRequest.subscribe(proposals => this.proposal = proposals,
      error => this.errorMessage = <any>error);
	}
}
