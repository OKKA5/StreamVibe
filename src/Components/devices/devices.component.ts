import { Component } from '@angular/core';
import { Idevices } from '../../Interfaces/idevices';

@Component({
  selector: 'app-devices',
  standalone: true,
  imports: [],
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.css'
})
export class DevicesComponent {
  devices:Idevices[]=[
    {icon:'fa-solid fa-mobile red fs-4',name:'SmartPhones',description:'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'},
    {icon:'fa-solid fa-tablet red fs-4',name:'Tablet',description:'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'},
    {icon:'fa-solid fa-tv red fs-4',name:'Smart TV',description:'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'},
    {icon:'fa-solid fa-laptop red fs-4',name:'laptops',description:'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'},
    {icon:'fa-solid fa-gamepad red fs-4',name:'Gaming Consoles',description:'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'},
    {icon:'fa-solid fa-vr-cardboard red fs-4',name:'VR Headsets',description:'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'}
  ]

}
