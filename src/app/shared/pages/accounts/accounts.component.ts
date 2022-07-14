import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  exit(): boolean {
    if (confirm('Deseja sair?')) {
      return true;
    } else {
      return false;
    }
  }
}
