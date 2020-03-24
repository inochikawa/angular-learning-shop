import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.less']
})
export class PrimaryButtonComponent implements OnInit {
  @Input() title: string;
  @Input() isDisabled: boolean = false;
  // tslint:disable-next-line:no-output-native
  @Output() click: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }


  ngOnInit(): void {
  }

  onBtnClick(event: any) {
    this.click.emit();
  }
}
