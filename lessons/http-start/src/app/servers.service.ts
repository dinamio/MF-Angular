import { Injectable } from "@angular/core";
import { Http,Response } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class ServersService {

  url = 'http://localhost:8080/rest';

  constructor(private http: Http) {

  }

  storeServers(servers: any[]) {
    return this.http.post(this.url + "/servers", servers);
  }
  getServers() {
    return this.http.get(this.url + "/servers")
    .map((response : Response) => {
        return response.json();
    }
  );
  }

  getAppName() {
    return this.http.get(this.url + "/appName").map(
      (response : Response) => {
        return response.json();
    })
  }
}
