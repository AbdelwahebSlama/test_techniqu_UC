import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {InscriptionService} from '../../services/inscription.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private  inscriptionService: InscriptionService) { }

  ngOnInit(): void {
  }

  inscription(form: NgForm): void {
    // console.log(form.value);
    this.inscriptionService.postSudents(form.value).subscribe(
      (data) => {
        console.log('studnets ', data);
        form.onReset();
      }
    );
  }
}
