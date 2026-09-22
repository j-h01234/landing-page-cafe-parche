import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the hero title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Ven a parchar');
  });

  it('should render every page section', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const sections = ['app-navbar', 'app-hero', 'app-about', 'app-menu', 'app-gallery', 'app-location', 'app-contact', 'app-footer', 'app-floating-whatsapp'];
    for (const selector of sections) {
      expect(compiled.querySelector(selector)).withContext(selector).toBeTruthy();
    }
  });
});
