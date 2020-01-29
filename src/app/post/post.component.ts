import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public indivs=[];
  public comments=[];
  id: number;
  tag: string;

  constructor(private dataService:DataService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    
    this.dataService.getPostIndiv(this.id)
    .subscribe(data=>this.indivs=data);

    this.dataService.getComment(this.id)
    .subscribe(data=>this.comments=data);
  }
  
  explore(tag){
    this.router.navigateByUrl('/explore/'+tag);
  }

}
