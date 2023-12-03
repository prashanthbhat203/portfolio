import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styles: [
  ]
})
export class ProjectCardComponent {

  @Input()
  id!: number;
  @Input()
  name!: string;
  @Input()
  icon!: string;
  @Input()
  framework!: string;
  @Input()
  description!: string;
  @Input()
  hostLink!: string;
  @Input()
  sourceLink!: string
}
