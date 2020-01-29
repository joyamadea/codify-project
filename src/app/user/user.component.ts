import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User, UserDetail } from '../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users:User[];
  public userdets=[];
  public posts=[];
  id: number;
  tag: string;

  constructor(private dataService: DataService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.dataService.getUserDetail(this.id)
    .subscribe(data=>this.userdets=data);

    this.dataService.getUserPost(this.id)
    .subscribe(data=>this.posts=data);
  }

  indivPostPage(id){
    this.router.navigateByUrl('/post/'+id);
  }

  explore(tag){
    this.router.navigateByUrl('/explore/'+tag);
  }
}
