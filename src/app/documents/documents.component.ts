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
        description: 'Download',
        file_url: 'http://google.com',
        updated_at: '4/25/18',
        image_url: 'https://i.amz.mshcdn.com/FiAYO5Wh70RQrWffTZGcwfa1j44=/950x534/filters:quality(90)/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F642692%2F5579d450-4569-4ae7-96eb-7d144b6df94d.jpg',
      },
      {
        title: 'My second Doc',
        description: 'Download',
        file_url: 'http://google.com',
        updated_at: '4/26/18',
        image_url: 'https://i.amz.mshcdn.com/FiAYO5Wh70RQrWffTZGcwfa1j44=/950x534/filters:quality(90)/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F642692%2F5579d450-4569-4ae7-96eb-7d144b6df94d.jpg',
      },
      {
        title: 'My third Doc',
        description: 'Download',
        file_url: 'http://google.com',
        updated_at: '4/28/18',
        image_url: 'https://i.amz.mshcdn.com/FiAYO5Wh70RQrWffTZGcwfa1j44=/950x534/filters:quality(90)/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F642692%2F5579d450-4569-4ae7-96eb-7d144b6df94d.jpg',
      }
    ];
  constructor() { }

  ngOnInit() {
  }

}
