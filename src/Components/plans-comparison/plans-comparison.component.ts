import { Component } from '@angular/core';
import { IPlanComparison } from '../../Interfaces/iplan-comparison';

@Component({
  selector: 'app-plans-comparison',
  standalone: true,
  imports: [],
  templateUrl: './plans-comparison.component.html',
  styleUrl: './plans-comparison.component.css'
})
export class PlansComparisonComponent {
  Plans: IPlanComparison[] = [
    {
      Feature: 'Price',
      price: '$9.99/Month',
      content: 'Access to a wide selection of movies and shows, including some new releases.',
      devices: 'Watch on one device simultaneously',
      freeTrial: '7 Days',
      cancelAnytime: "yes",
      hdr: "No",
      dolbyAtmos: "No",
      adFree: "No",
      offlineViewing: 'No',
      familySharing: 'No'
    },
    {
      Feature: 'Content',
      price: '$12.99/Month',
      content: 'Access to a wider selection of movies and shows, including most new releases and exclusive content',
      devices: 'Watch on Two devices simultaneously',
      freeTrial: '7 Days',
      cancelAnytime: "yes",
      hdr: "yes",
      dolbyAtmos: "yes",
      adFree: "yes",
      offlineViewing: 'Yes, for select titles.',
      familySharing: 'Yes, up to 5 family members.',
    },
    {
      Feature: 'Premium',
      price: '$14.99/Month',
      content: 'Access to a widest selection of movies and shows, including all new releases and Offline Viewing',
      devices: 'Watch on Four devices simultaneously',
      freeTrial: '7 Days',
      cancelAnytime: "yes",
      hdr: "yes",
      dolbyAtmos: "yes",
      adFree: "yes",
      offlineViewing: 'Yes, for all titles.',
      familySharing: 'Yes, up to 6 family members.'
    }
  ];
}
