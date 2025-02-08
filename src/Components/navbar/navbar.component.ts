import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, FormsModule, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  public SearchQuery: string = '';
  constructor(private _Router:Router){}
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }
  @ViewChild('navbar') nav!: ElementRef;

  sendSearch(query: string) {
    if (query.trim()) {
      this._Router.navigate(['/Search'], { queryParams: { search: query } });
    }
  }
  @HostListener('window:scroll', [])
  onScroll() {
    if (
      this.searchInput &&
      !this.searchInput.nativeElement.classList.contains('opacity-0') &&
      window.scrollY > 20
    ) {
      this.searchInput.nativeElement.classList.add('opacity-0');
    }
    if (window.scrollY > 20) {
      this.nav.nativeElement.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
    } else {
      this.nav.nativeElement.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
  }
  @ViewChild('searchInput') searchInput!: ElementRef;
  toggleInput() {
    this.searchInput.nativeElement.classList.toggle('opacity-0');
  }
}
