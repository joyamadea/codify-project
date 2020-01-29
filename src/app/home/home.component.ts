import { Component, OnInit } from '@angular/core';
import { Post, PostData } from '../models/post.model';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public posts=[];
  public indivs=[];
  
  id: number;
  tag: string;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.getPosts()
    .subscribe(data=>this.posts=data);
    //console.log(this.posts);
  }

  indivPostPage(id){
    this.router.navigateByUrl('/post/'+id);
  }

  explore(tag){
    this.router.navigateByUrl('/explore/'+tag);
  }

}
