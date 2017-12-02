import Component, {tracked} from '@glimmer/component';
import {TimeLogRecord} from '../../../utils/definitions/interfaces';
import Persist from '../../../utils/libs/persist';

export default class TimeLog extends Component {
  @tracked timeLogRecords: [TimeLogRecord];

  constructor(options) {
    super(options);
    this.timeLogRecords = Persist.readAll() || [] as [TimeLogRecord];
  }

  setDetails(details: TimeLogRecord) {
    // Must be called from within an {{action helper to retain the the correct `this` context
    const record = Persist.save(details);
    this.timeLogRecords.push(record);
    // Create a new reference for the object such that it knows it changes
    // todo: investigate if there is a better way of doing this
    this.timeLogRecords = JSON.parse(JSON.stringify(this.timeLogRecords));
  }
}