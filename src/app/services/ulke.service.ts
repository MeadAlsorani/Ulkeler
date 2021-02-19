import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ulke} from '../interfaces/ulke';
import { Observable } from 'rxjs';
import * as Globals from '../../assets/globals';
@Injectable({
  providedIn: 'root'
})
export class UlkeService {

constructor(
  private http:HttpClient
) { }


  getUlkeler():Observable<Ulke[]>{
    return this.http.get<Ulke[]>(Globals.apiUrl);
  }
}
