import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-state-example',
  templateUrl: './empty-state-example.component.html',
  styleUrls: ['./empty-state-example.component.scss'],
})
export class EmptyStateExampleComponent implements OnInit {
  public emptyStateActions: { title: string, action: () => void }[] = [
    {
      title: 'add_task',
      action: () => {
        console.log('on add task clicked');
      },
    },
    {
      title: 'import_tasks',
      action: () => {
        console.log('on export tasks clicked');
      },
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
