import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { ServersService } from "app/servers.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = this.serversService.getAppName();
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  constructor(private serversService: ServersService) {

  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
  onSave() {
    this.serversService.storeServers(this.servers)
    .subscribe(
      (response) => console.log(response),
      (failResponse) => console.log(failResponse)
    );
  }
  onGet() {
    this.serversService.getServers()
    .subscribe(
      (servers: any) => {
      console.log(servers);
      this.servers = servers;
    },
      (failResponse) => console.log(failResponse)
    );
  }
}
