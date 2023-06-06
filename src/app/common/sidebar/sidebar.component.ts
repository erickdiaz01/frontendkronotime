import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Output() sidenavClose = new EventEmitter();

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  };
}
