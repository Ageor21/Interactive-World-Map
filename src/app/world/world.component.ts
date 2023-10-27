import { Component, Output,ElementRef, EventEmitter, ViewChild} from '@angular/core';
import { MapInformationComponent } from '../world-information/world-information.component';
import { CountryApiService } from '../api.service';

@Component({
  selector: 'app-map',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class MapComponent {

 
  constructor(
    private elementRef: ElementRef,
    private countryApiService: CountryApiService
    
    ) {}

  ngAfterViewInit() {
    const svgElement = this.elementRef.nativeElement.querySelector('svg');
    const pathElements = svgElement.querySelectorAll('path');
    pathElements.forEach((path: SVGPathElement) => {
      
      
      path.addEventListener('click', this.handleClick.bind(this));
    });
  }

 


  @Output() svgIdSelected = new EventEmitter<string>();
  @Output() incomeSelected = new EventEmitter<string>();
  @Output() capitalSelected = new EventEmitter<string>();
  @Output() longitudeSelected = new EventEmitter<string>();
  @Output() latitudeSelected = new EventEmitter<string>();
  @Output() regionSelected = new EventEmitter<string>();
  @ViewChild(MapInformationComponent)
private mapInformationComponent!: MapInformationComponent;

handleClick(event: MouseEvent) {
  const path = event.target as SVGPathElement;
  const countryId = path.id;


  this.countryApiService.Country_info(countryId).subscribe((data: any) => {
    const countryName = data[1][0].name;
    const income = data[1][0].incomeLevel.value;
    const capitalCity = data[1][0].capitalCity;
    const longitude = data[1][0].longitude;
    const latitude = data[1][0].latitude;
    const region = data[1][0].region.value;



    this.svgIdSelected.emit(countryName);
    this.incomeSelected.emit(income);
   
    this.capitalSelected.emit(capitalCity);
    this.longitudeSelected.emit(longitude);
    this.latitudeSelected.emit(latitude);
    this.regionSelected.emit(region);

    
  });
}


 

}