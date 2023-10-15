import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar-items',
  templateUrl: './menu-bar-items.component.html',
  styleUrls: ['./menu-bar-items.component.css']
})
export class MenuBarItemsComponent implements OnInit {

  @Input()
  bioLink_Profile: string = 'https://bio.link/jaquebrsilva'

  @Input()
  Linkedin_Profile: string = 'https://www.linkedin.com/in/jaqueline-silva-broccolo/'

  @Input()
  GitHub_Profile: string = 'https://github.com/JaqueBRSilva'

  constructor() { }

  ngOnInit(): void {
  }

}
