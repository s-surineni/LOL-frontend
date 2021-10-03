import { List } from '../list';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.scss']
})
export class ListDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() list?: List;
}
