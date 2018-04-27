import { Component } from '@angular/core';
import { Proposal } from './proposal';
@Component ({
    moduleId: module.id,
    selector: 'proposal-list',
    templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
    proposalOne: Proposal = new Proposal(5, 'Princeton Creative Design', 'http://www.princetonevans.com', 'Angular 2', 150, 120, 15, 'Princetonevans@yahoo.com')
    proposalTwo: Proposal = new Proposal(5, 'Princeton Creative Digital', 'http://www.princetonevans.com', 'Angularjs', 140, 110, 13, 'Princetonevans@gmail.com')
    proposalThree: Proposal = new Proposal(5, 'Princeton Creative ', 'http://www.princetonevans.com', 'Angular 4', 130, 100, 10, 'Princetonevans@office.com')

    proposals: Proposal[] = [
        this.proposalOne,
        this.proposalTwo,
        this.proposalThree
    ]
}