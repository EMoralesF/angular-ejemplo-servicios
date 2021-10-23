import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {
 ms: any[]=[];
 //ms:any;
  constructor(private ds: DataService) { }

  ngOnInit(): void {
    //this.ds.getData().subscribe(ms =>{console.log(ms)});
    this.ds.getData().subscribe( (ms:any[] )=>{this.ms=ms} );
   //this.ms=this.ds.getData();

  }

}
