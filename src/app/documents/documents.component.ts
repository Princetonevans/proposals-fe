import { Component, OnInit } from '@angular/core';
import { Document } from './document';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
    pageTitle: string = "My Documents";
    documents: Document[] = [
      {
        title: 'My first Doc',
        description: 'proposals',
        file_url: 'http://google.com',
        updated_at: '4/25/18',
        image_url: 'http://google.com',
      },
      {
        title: 'My second Doc',
        description: 'proposals',
        file_url: 'http://google.com',
        updated_at: '4/26/18',
        image_url: 'http://googleplus.com',
      },
      {
        title: 'My third Doc',
        description: 'proposals',
        file_url: 'http://google.com',
        updated_at: '4/28/18',
        image_url: 'http://googleanalytics.com',
      }
    ];
  constructor() { }

  ngOnInit() {
  }

}
