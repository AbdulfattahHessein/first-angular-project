import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../models/IPost';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(public httpClient: HttpClient) {}
  getAllPosts(): Observable<IPost[]> {
    type Person = {
      name: string;
      age: number;
    };

    return this.httpClient.get<IPost[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
}
