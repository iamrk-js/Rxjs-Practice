import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Course } from "../model/course";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import * as moment from 'moment';
import { fromEvent, noop } from 'rxjs';
import { concatMap, distinctUntilChanged, exhaustMap, filter, mergeMap, tap } from 'rxjs/operators';
import { fromPromise } from 'rxjs/internal-compatibility';

@Component({
    selector: 'course-dialog',
    templateUrl: './course-dialog.component.html',
    styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements AfterViewInit {
    constructor(
    ) { }

    ngAfterViewInit() {

    }

}
