import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { ListService } from '../list.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  lists: List[] = [];
  selectedList?: List;

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.getLists();
  }

  onSelect(list: List): void {
    this.selectedList = list;
  }

  getLists(): void {
    this.listService.getLists().subscribe(lists => this.lists = lists)
  }
}
