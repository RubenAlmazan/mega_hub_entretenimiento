import { TestBed } from '@angular/core/testing';
import { EventEmitter } from '@angular/core';
import { PeliculaService } from './pelicula.service';

describe('PeliculaService', () => {
  let service: PeliculaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculaService);
  });

  it('should be created service pelicula', () => {
    expect(service).toBeTruthy();
  });

  it('should be created service emit pelicula', () => {
    expect(service.disparador).toBeInstanceOf(EventEmitter);
  });

  it('should emit an event through disparador', (done) => {
    service.disparador.subscribe(event => {
      expect(event.origen).toBe('borrar');
      expect(event.id).toBe(1);
      done();
    });
    
    service.disparador.emit({ origen: 'borrar', id: 1 });
  });


});
