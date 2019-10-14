export class HeaderModel {
  classes: string;
  headers: {}[];
  constructor( classes: string, headers: {classes: string, label: string, onClick: Function}[] ) {
    this.classes = classes;
    this.headers = headers;
  }
}
