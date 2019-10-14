import { Component } from '@angular/core';

@Component({
  selector: 'server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.sass']
})
export class ServerComponent {
  serverId = Math.round(Math.random()*100);
  serverStatus = "offline";

  getServerStatus() {
    return this.serverStatus
  }
}
