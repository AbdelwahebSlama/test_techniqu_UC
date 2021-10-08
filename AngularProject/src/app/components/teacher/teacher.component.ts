import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {InscriptionService} from '../../services/inscription.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private inscriptionService: InscriptionService) { }

  ngOnInit(): void {
  }
  inscription(form: NgForm): void {
    // console.log(form.value);
    this.inscriptionService.postTeacher(form.value).subscribe(
      (data) => {
        console.log('studnets ', data);
        form.onReset();
      }
    );
  }
}
