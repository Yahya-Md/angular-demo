import { Component, OnInit } from '@angular/core';
import {DepartementServiceService} from '../services/departement-service.service';
import {Departement} from '../model/departement';
import {Router} from '@angular/router';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  form = {
    code: '',
    libelle: ''
  };
  e: any;
  departements: Departement[];
  constructor(private departementService: DepartementServiceService, private router: Router) { }

  ngOnInit(): void {
    this.departementService.getDepartement().subscribe(
      data => {
        this.departements = data;
      },
        error => {
        console.log(error);
      }
    );
  }

  addDepartement(formValue: Departement): any {
    this.departementService.postDepartement(formValue).subscribe(
      data => {
        console.log(data);
        this.departements.push(data);
      },
      error => {
        // console.log(error);
        this.e = error;
      }
    );
  }

  deleteDepartement(departement: Departement): any {
    this.departementService.deleteDepartement(departement).subscribe(
      data => {
        console.log(data);
        this.departements = this.departements.filter(deprt => deprt.id !== data.id);
      },
      error => {
        console.log(error);
      }
    );
  }

  navigateToDetails(departement: Departement): any {
    this.router.navigate(['/departement', departement.code]);
  }
}
