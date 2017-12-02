import {TimeLogRecord} from '../definitions/interfaces';
import LocalStoragePersist from './local-storage-persist';

export default class Persist {
  static save(timeLog: TimeLogRecord): TimeLogRecord {
    return LocalStoragePersist.save(timeLog);
  }

  static readAll(): [TimeLogRecord] {
    return LocalStoragePersist.readAll();
  }
}