import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post, PostData, Tag } from './models/post.model';
import { User, UserDetail } from './models/user.model';


@Injectable({
  providedIn: 'root'
})

export class DataService {
  private postUrl: string='https://n161.tech/api/dummyapi/post';
  private userUrl: string='https://n161.tech/api/dummyapi/user';
  private tagUrl: string="https://n161.tech/api/dummyapi/tag";

  constructor(private http: HttpClient) {}

  getPosts(){
    return this.http.get<Post[]>(this.postUrl);
  }

  getPostIndiv(id){
    return this.http.get<PostData[]>(this.postUrl+'/'+id);
  }

  getUser(){
    return this.http.get<User[]>(this.userUrl);
  }

  getUserDetail(id){
    return this.http.get<UserDetail[]>(this.userUrl+'/'+id);
  }

  getUserPost(id){
    return this.http.get<Post[]>(this.userUrl+'/'+id+'/post');
  }

  getTaggedPost(tag){
    return this.http.get<Post[]>(this.tagUrl+'/'+tag+'/post');
  }

  getComment(id){
    return this.http.get<Comment[]>(this.postUrl+'/'+id+'/comment');
  }

  getTags(){
    return this.http.get<Tag[]>(this.tagUrl);
  }


}
