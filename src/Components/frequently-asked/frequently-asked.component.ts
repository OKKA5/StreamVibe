import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-frequently-asked',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './frequently-asked.component.html',
  styleUrl: './frequently-asked.component.css',
})
export class FrequentlyAskedComponent {
  @ViewChild('answer1') answer1!: ElementRef;
  @ViewChild('answer2') answer2!: ElementRef;
  @ViewChild('answer3') answer3!: ElementRef;
  @ViewChild('answer4') answer4!: ElementRef;
  @ViewChild('answer5') answer5!: ElementRef;
  @ViewChild('answer6') answer6!: ElementRef;
  @ViewChild('answer7') answer7!: ElementRef;
  @ViewChild('answer8') answer8!: ElementRef;
  toggleanswer1() {
   this.answer1.nativeElement.classList.toggle('topHide')
  }
  toggleanswer2() {
    this.answer2.nativeElement.classList.toggle('topHide')
   }
   toggleanswer3() {
    this.answer3.nativeElement.classList.toggle('topHide')
   }
   toggleanswer4() {
    this.answer4.nativeElement.classList.toggle('topHide')
   }
   toggleanswer5() {
    this.answer5.nativeElement.classList.toggle('topHide')
   }
   toggleanswer6() {
    this.answer6.nativeElement.classList.toggle('topHide')
   }
   toggleanswer7() {
    this.answer7.nativeElement.classList.toggle('topHide')
   }
   toggleanswer8() {
    this.answer8.nativeElement.classList.toggle('topHide')
   }
 


}
