import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ICategory } from '../models/category.models';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private BASE_URL = 'https://api.escuelajs.co/api/v1'
  private MY_API_URL = 'http://localhost:5160/api'

  constructor(private http: HttpClient) { }

  //get all categories
  getCategories(): Observable<ICategory[]>{
    return this.http.get<ICategory[]>(`${this.MY_API_URL}/Category`)
  }

  //get all products
  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${this.MY_API_URL}/Product`)
  }

  //get single product
  getProductById(id: number): Observable<IProduct>{
    return this.http.get<IProduct>(`${this.MY_API_URL}/Product/${id}`)
  }

  getProductByCatId(catId: number) : Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${this.MY_API_URL}/Product/category/${catId}`);
  }
}
