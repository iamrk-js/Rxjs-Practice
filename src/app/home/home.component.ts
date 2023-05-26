import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { map } from 'rxjs/operators';
import { Course } from '../model/course';



@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    courses: Array<Course> = [];
    constructor(private _coursesService: CoursesService) {

    }

    ngOnInit(): void {
        this._coursesService.getAllCourses()
            .pipe(
                map(res => res['payload'])
            )
            .subscribe(
                res => {
                    this.courses = res;
                }
            )
    }


}
