import { Component, Input } from '@angular/core';
import { CardDetails } from '../../dto';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
@Input() card!:CardDetails;
  defaultImage='https://i.redd.it/b3esnz5ra34y.jpg'

}
