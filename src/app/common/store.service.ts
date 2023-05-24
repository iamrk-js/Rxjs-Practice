import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject, timer} from 'rxjs';
import {Course} from '../model/course';
import {delayWhen, filter, map, retryWhen, shareReplay, tap, withLatestFrom} from 'rxjs/operators';
import {createHttpObservable} from './util';
import {fromPromise} from 'rxjs/internal-compatibility';


@Injectable({
    providedIn: 'root'
})


export class Store {


}




























