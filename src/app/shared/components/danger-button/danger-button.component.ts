import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-danger-button',
  templateUrl: './danger-button.component.html',
  styleUrls: ['./danger-button.component.less']
})
export class DangerButtonComponent implements OnInit {

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
