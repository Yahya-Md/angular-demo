import { Component, OnInit } from '@angular/core';
import {DepartementServiceService} from '../../services/departement-service.service';
import {ActivatedRoute} from '@angular/router';
import {Departement} from '../../model/departement';

@Component({
  selector: 'app-departement-details',
  templateUrl: './departement-details.component.html',
  styleUrls: ['./departement-details.component.css']
})
export class DepartementDetailsComponent implements OnInit {
  code: string;
  error: any;
  constructor(private departementService: DepartementServiceService,
              private activeRoute: ActivatedRoute) { }
  departement: Departement;

  ngOnInit(): void {
    this.code = this.activeRoute.snapshot.paramMap.get('code');
    this.departementService.getDepartementByCode(this.code).subscribe(
      data => {
       // console.log(data);
       this.departement = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  editeDepartement(): any {
    this.departementService.putDepartement(this.departement).subscribe(data => {
        console.log(data);
        this.departement = data;
      },
      error => {
        console.log(error);
        this.error = error;
      }
    );
  }
}
