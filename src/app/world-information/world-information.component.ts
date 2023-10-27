import { Component, OnInit, Input } from '@angular/core';
import { MapComponent } from '../world/world.component';

@Component({
  selector: 'app-map-information',
  templateUrl: './world-information.component.html',
  styleUrls: ['./world-information.component.css']
})

export class MapInformationComponent implements OnInit {
  @Input() countryId!: string;
  @Input() countryIncome!: string;
  @Input() countryCapital!: string;
  @Input() countryLongitude!: string;
  @Input() countryLatitude!: string;
  @Input() countryRegion!: string;
  
  



  constructor() { }

  ngOnInit(): void { }
}