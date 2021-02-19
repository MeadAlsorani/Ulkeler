import { Component, OnInit } from '@angular/core';
import { Ulke } from '../../interfaces/ulke';
import { UlkeService } from '../../services/ulke.service';
@Component({
  selector: 'app-ulke-list',
  templateUrl: './ulke-list.component.html',
  styleUrls: ['./ulke-list.component.css']
})
export class UlkeListComponent implements OnInit {
  Ulkeler:Ulke[];
  constructor(
    private ulkeService:UlkeService
  ) {}

  ngOnInit(){
    this.ulkeService.getUlkeler().subscribe(data=>{
      this.Ulkeler=data;
    })
  }
}
