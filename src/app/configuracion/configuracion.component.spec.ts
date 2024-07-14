import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionComponent } from './configuracion.component';

describe('ConfiguracionComponent', () => {
  let component: ConfiguracionComponent;
  let fixture: ComponentFixture<ConfiguracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiguracionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add dark-mode', () => {
    component.toggleDarkMode();
    expect(document.body.classList.contains('dark-mode')).toBe(true);
  });

  it('should hide dark-mode', () => {
    // Simular que dark-mode ya está presente
    document.body.classList.add('dark-mode');
    component.toggleDarkMode();
    expect(document.body.classList.contains('dark-mode')).toBe(false);
  });

});
