import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EMPTY, Observable, Subject, Subscription, catchError, combineLatest, concatMap, debounceTime, forkJoin, from, fromEvent, interval, map, mergeMap, of, pluck, shareReplay, switchMap, take, tap, throttleTime, withLatestFrom } from 'rxjs';
import { NumberService } from './modules/core/services/number.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  form: FormGroup;


  constructor(private _fb: FormBuilder, private _numberService:NumberService) {

    this.form = _fb.group({
      name: [, [Validators.required]],
      contacts: _fb.group({
        address: [],
        phone: []
      })
    });

    this.form.controls.name.valueChanges.pipe(debounceTime(2000)).subscribe((val) => {
      console.log(val);
    });

  }
  
  ngOnInit(): void {
    this._numberService.callAfterViewInitial();
  }

  getObs(data: any): Observable<number> {
    return of(data + 5);
  }

  submitData(val: any) {
    console.log(val);
  }

}
