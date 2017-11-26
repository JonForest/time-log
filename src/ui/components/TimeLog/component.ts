import Component from '@glimmer/component';
import {TimeLogRecord} from '../../../utils/definitions/interfaces';

export default class TimeLog extends Component {
  setDetails(details: TimeLogRecord) {
    console.log(details);
  }
}
