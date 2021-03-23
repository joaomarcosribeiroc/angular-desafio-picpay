import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceiverService {

  constructor(private http: HttpClient) {  }

  getReceiverList():any{
    return this.http.get("https://randomuser.me/api/?inc=gender,name,nat,picture&results=10") 
  }

}
