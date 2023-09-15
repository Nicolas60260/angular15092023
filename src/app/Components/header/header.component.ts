import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  a!:number

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const currentRoute = this.route.snapshot.url.join('/');
  console.log('Route actuelle : '+ currentRoute);
  }
}
