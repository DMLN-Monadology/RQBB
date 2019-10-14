import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'servers',
  templateUrl: './servers.component.html',
  // template: `
  //   <server></server>
  //   <server></server>
  //   <server></server>
  //   <server></server>
  //   <server></server>
  //   <server></server>
  // `,
  styleUrls: ['./servers.component.sass']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No Server was created";
  serverName = "Default Server Name";
  servers = ['testServer', 'testServer 2']

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {

  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created and the name is ' + this.serverName;
    this.servers.push( this.serverName );
  }

  resetServerName() {
    this.serverName = "Default Server Name";
  }
}
