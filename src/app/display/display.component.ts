import { Component, OnInit } from '@angular/core';

import { Blockchain } from './../blockchain/blockchain.model';
import { AppState } from './../_store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  coins: Observable<Blockchain[]>;

  constructor(private store: Store<AppState>) {
    this.coins = this.store.select(state => state.blockchain);
  }

  ngOnInit() {
  }

}
