import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';



@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    courses: Array<Course> = [];
    beginnersCourses: Array<Course> = []
    advanceCourses: Array<Course> = []
    constructor(private _coursesService: CoursesService) {

    }

    ngOnInit(): void {
        let courses$ = this._coursesService.getAllCourses()
            .pipe(
                map(res => res['payload'])
            );

        courses$
            .subscribe(
                res => {
                    this.courses = res;
                    this.beginnersCourses = res.filter(course => course.category === "BEGINNER");
                    this.advanceCourses = res.filter(course => course.category === "ADVANCED")
                }
            )
    }


}
