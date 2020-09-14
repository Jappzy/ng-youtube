import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() openDrawer?: boolean;

  @Output() toggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleDrawer(): void {
    this.toggle.emit();
  }

}
