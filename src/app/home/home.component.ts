import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { map, pluck, shareReplay } from 'rxjs/operators';
import { Course } from '../model/course';
import { Observable } from 'rxjs';



@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    courses: Array<Course> = [];
    // beginnerCourses: Array<Course> = [];
    // advanceCourses: Array<Course> = [];
    beginnerCourses$: Observable<Course[]>;
    advanceCourses$: Observable<Course[]>;
    constructor(private _coursesService: CoursesService) {

    }

    ngOnInit(): void {
        // this._coursesService.getAllCourses()
        //     .pipe(
        //         map(res => res['payload'])
        //     )
        //     .subscribe(
        //         res => {
        //             this.courses = res;
        //             this.beginnerCourses = res.filter(course => course.category === "BEGINNER");
        //             this.advanceCourses= res.filter(course => course.category === "ADVANCED")
        //         }
        //     )
        let courses$ = this._coursesService.getAllCourses()
            .pipe(
                // map(res => res['payload'])
                pluck('payload'),
                shareReplay()
            )
        this.beginnerCourses$ = courses$.pipe(
            map(course => course.filter(c => c.category === "BEGINNER") )
        )

        this.advanceCourses$ = courses$.pipe(
            map(courseArray => courseArray.filter(c => c.category === "ADVANCED"))
        )
    }


}
