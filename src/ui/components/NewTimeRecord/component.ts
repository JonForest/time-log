import Component from '@glimmer/component';
declare const document: HTMLDocument;
declare const console: any;

export default class NewTimeRecord extends Component {

  start() {
    // todo: Must be a way of limiting this query to the scope of the component
    const code = (document.getElementById('code') as HTMLInputElement).value;
    const description = (document.getElementById('description') as HTMLInputElement).value;
    const startTime = new Date();
    this.args.setDetails({code, description, startTime});
  }
}
