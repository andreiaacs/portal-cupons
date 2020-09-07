import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cupons',
  templateUrl: './cupons.component.html',
  styleUrls: ['./cupons.component.scss']
})
export class CuponsComponent implements OnInit {

  public items =  [
    {
      nome: 'Java',
      descricao: 'Curso para ensinar Java',
      validade: '28/08/2020'
    },
    {
      nome: 'Angular',
      descricao: 'Curso para ensinar Angular',
      validade: '28/08/2020'
    },
    {
      nome: 'Capybara',
      descricao: 'Curso para ensinar Capybara',
      validade: '28/08/2020'
    },
    {
      nome: 'Java',
      descricao: 'Curso para ensinar Java',
      validade: '28/08/2020'
    },
    {
      nome: 'Angular',
      descricao: 'Curso para ensinar Angular',
      validade: '28/08/2020'
    },
    {
      nome: 'Capybara',
      descricao: 'Curso para ensinar Capybara',
      validade: '28/08/2020'
    },
    {
      nome: 'Java',
      descricao: 'Curso para ensinar Java',
      validade: '28/08/2020'
    },
    {
      nome: 'Angular',
      descricao: 'Curso para ensinar Angular',
      validade: '28/08/2020'
    },
    {
      nome: 'Capybara',
      descricao: 'Curso para ensinar Capybara',
      validade: '28/08/2020'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
