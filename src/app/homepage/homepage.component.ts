import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from '../services/order-details.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  BookData:any;

  ngOnInit(): void {
    this.BookData = this.service.BookDetails;
  }

}
