import { Component, OnInit } from '@angular/core';
import {Document } from './document';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
    documents: Document[] = [
      {
        title: 'My first Doc',
        description: 'proposals',
        file_url: 'http://google.com',
        updated_at: '4/25/18',
        image_url: 'http://google.com',
      }
    ];
  constructor() { }

  ngOnInit() {
  }

}
