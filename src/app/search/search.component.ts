import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  // Remove or comment out the styleUrls property if not needed
  // styleUrls: ['./search.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class SearchComponent {
  searchTerm: string = '';
  patientDetails: any;

  constructor(private patientService: PatientService) { }

  search() {
    this.patientService.getPatientDetails(this.searchTerm).subscribe(
      (data: any) => {
        this.patientDetails = data;
      },
      error => {
        console.error('Error fetching patient details:', error);
      }
    );
  }
}
