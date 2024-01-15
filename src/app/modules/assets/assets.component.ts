import { Component, OnInit } from '@angular/core';
import { assets } from 'src/app/models/models/assets.interface';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss'],
})
export class AssetsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  data: assets[] = [
    {
      id: 453,
      model: 'Hp Elite Book',
      serialNumber: '12345',
      status: 'Assigned',
      specifications: {
        ram: '16 GB',
        storage: '512 GB SSD',
        processor: 'i5',
        'screen size': '13 inch',
        'operating system': 'Ubuntu',
      },
      category: {
        id: 1,
        name: 'Laptop',
      },
      receivedDate: '2023-02-15T12:05:25',
      returnedDate: null,
    },
    {
      id: 454,
      model: 'MacBook Pro',
      serialNumber: '54321',
      status: 'Assigned',
      specifications: {
        ram: '32 GB',
        storage: '512 GB SSD',
        processor: 'i5',
        'screen size': '13 inch',
        'operating system': 'Ubuntu',
      },
      category: {
        id: 1,
        name: 'Laptop',
      },
      receivedDate: '2023-02-15T12:05:25',
      returnedDate: null,
    },
  ];
}
