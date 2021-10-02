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
      imgURL:
        'https://scontent.fceb2-2.fna.fbcdn.net/v/t1.6435-9/199538667_2560456557434428_6360688576988264847_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFCeCiMWWK_2XyfhcKxOa3NHFEubb2h40AcUS5tvaHjQEUzOcbfvab928_6fbVtpOkr9THZLQr-B3SGZ8oLmM_q&_nc_ohc=tPftrWFfVVgAX88rset&tn=-wxwBP_WPyFetnlM&_nc_ht=scontent.fceb2-2.fna&oh=a23402726f4d7a4cc7007f7e6bf11747&oe=61583A67',
      msgID: '1',
    },
    {
      name: 'John Jefferson Lebasora',
      latestMsg: 'Hey I just met you',
      dateOrTime: '8:44 AM',
      imgURL:
        'https://scontent.fdvo1-1.fna.fbcdn.net/v/t1.6435-9/92830110_3763332807071604_6641068352234061824_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGxQoCq64Pqj0_mkLh8dw_qW-Q-vN0s_EBb5D683Sz8QAXg2W_uJqwvOKMa1Jx1NAF_tWWJm5ap5NjeiQ5teCGW&_nc_ohc=tk5oU1foxBYAX-PpbIN&tn=LBsI2EVjJvAmcLrk&_nc_ht=scontent.fdvo1-1.fna&oh=bfb568e80ecb2be50368e81f1b7e2529&oe=61595E86',
      msgID: '2',
    },
    {
      name: 'Ruel Baldo',
      latestMsg: 'and this is crazy',
      dateOrTime: '7:24 AM',
      imgURL: 'https://avatars.githubusercontent.com/u/78558096?v=4',
      msgID: '3',
    },
    {
      name: 'Christian Paranas',
      latestMsg: "so here's my number so call me maybe",
      dateOrTime: '4:51 AM',
      imgURL: 'https://avatars.githubusercontent.com/u/59472122?v=4',
      msgID: '4',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
