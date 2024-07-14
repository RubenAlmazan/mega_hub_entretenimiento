import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  @Output() disparador = new EventEmitter<{ origen: string, id: number }>();

  
  constructor() { }

  
}
