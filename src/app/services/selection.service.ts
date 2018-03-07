import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest, HttpEventType, HttpParams } from '@angular/common/http';
import { Headers, Response, RequestOptions } from "@angular/http";

import { Observable } from 'rxjs/Observable';
import { SELECTION } from './../model/selection';

@Injectable()
export class SelectionService {

    selection: SELECTION;
    headers = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });

    private selectionUrl = 'api/selections';

    constructor(
        private http: HttpClient,
    ) { }

    addSelection(data){

        let body = JSON.stringify(data, null, 2);
        console.log(body);
        return this.http.post(this.selectionUrl, body);
    }



}