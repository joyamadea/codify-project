import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  tag: string;
  checker: boolean;
  checker2:boolean=false;
  total:number;
  public tags=[];
  public posts=[];
  constructor(private route: ActivatedRoute, private dataService: DataService, private router:Router) { }

  ngOnInit() {
    this.tag=this.route.snapshot.params['tag'];
    //console.log(this.tag);
    if(this.tag==null){
      this.checker=false;
      this.dataService.getTags()
      .subscribe(data=>this.tags=data);
    }
    else{
      this.checker=true;
      /*this.dataService.getTaggedPost(this.tag)
      .subscribe(data=>{
        this.posts=data;
        if(data.total==0){
          this.checker2=true;
        }
        else{
          this.checker2=false;
        }
      });*/
      this.newTag(this.tag);
    }
  }

  explore(tag){
    this.router.navigateByUrl('/explore/'+tag);
  }

  indivPostPage(id){
    this.router.navigateByUrl('/post/'+id);
  }

  newTag(tag){
    this.dataService.getTaggedPost(tag)
      .subscribe(data=>{
        this.posts=data;
        //console.log(data.total);
       // this.total=data.total;
        if(data.total==0){
          this.checker2=true;
        }
        else{
          this.checker2=false;
        }
      });
    console.log(this.checker2);
    this.tag=tag;
    
    window.scroll(0,0);
  }

}
