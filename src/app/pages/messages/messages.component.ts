import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  mgsArr = [
    {
      name: 'Luigi Loreno',
      latestMsg: 'Ano kuno?',
      dateOrTime: '10:01 AM',
      imgURL: 'https://avatars.githubusercontent.com/u/59472122?v=4',
      msgID: '1'
    },
    {
      name: 'John Jefferson Lebasora',
      latestMsg: 'Hey I just met you',
      dateOrTime: '8:44 AM',
      imgURL: 'https://avatars.githubusercontent.com/u/59472122?v=4',
      msgID: '2'
    },
    {
      name: 'Ruel Baldo',
      latestMsg: 'and this is crazy',
      dateOrTime: '7:24 AM',
      imgURL: 'https://avatars.githubusercontent.com/u/59472122?v=4',
      msgID: '3'
    },
    {
      name: 'Christian Paranas',
      latestMsg: "so here's my number so call me maybe",
      dateOrTime: '4:51 AM',
      imgURL: 'https://avatars.githubusercontent.com/u/59472122?v=4',
      msgID: '4'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
