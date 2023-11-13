import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Juego } from '../Interfaces/juego';

@Injectable({
  providedIn: 'root'
})
export class JuegoServicioService {

  private dbPath = '/juegos';

  juegosLista?: AngularFireList<Juego>;

  constructor(private db: AngularFireDatabase) { 
    this.juegosLista = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Juego> {
    return this.juegosLista;
  }

  create(juego: Juego): any {
    return this.juegosLista?.push(juego);
  }

  update(key: string, value: any): Promise<void> {
    return this.juegosLista?.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.juegosLista.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.juegosLista.remove();
  }
}
