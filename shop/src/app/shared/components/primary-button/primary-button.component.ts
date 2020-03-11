import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.less']
})
export class PrimaryButtonComponent implements OnInit {
  @Input() title: string;
  @Input() isDisabled: boolean = false;
  @Output() click: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }


  ngOnInit(): void {
  }

  onBtnClick(event: any) {
    this.click.emit();
  }
}
