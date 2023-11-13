import { TestBed } from '@angular/core/testing';

import { JuegoServicioService } from './juego-servicio.service';

describe('JuegoServicioService', () => {
  let service: JuegoServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuegoServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
