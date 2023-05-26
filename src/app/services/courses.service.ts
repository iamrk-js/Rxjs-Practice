import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Course } from "../model/course";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    getCoursesUrl = `${environment.baseUrlCourses}courses`
    constructor(private _http: HttpClient) {

    }

    getAllCourses(): Observable<{ payload: Course[] }> {
        return this._http.get<{ payload: Course[] }>(this.getCoursesUrl)
    }
}