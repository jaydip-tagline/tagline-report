import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss'],
})
export class HttpClientComponent implements OnInit {
  constructor(private mainService: MainService) {
    this.mainService.postUsers().subscribe((resp) => {
      console.log(resp);
    });
    this.mainService.getUsers().subscribe((resp) => {
      console.log(resp);
    });
  }

  ngOnInit(): void {}
}
