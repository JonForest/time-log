import TimeLog from '../../ui/components/TimeLog/component';
declare const window: Window;
declare const String: any;
declare const Date: any;
declare const JSON: JSON;
declare const Error: any;
import {TimeLogRecord} from '../definitions/interfaces';

export default class LocalStoragePersist {
  static save(timeLog: TimeLogRecord): TimeLogRecord {
    if (!timeLog.id) {
      // Generate a unique-ish id
      timeLog.id = String(new Date().valueOf());
    }
    window.localStorage.setItem(timeLog.id, JSON.stringify(timeLog));
    return timeLog;
  }

  static read(id: string): TimeLogRecord {
    const timeLog = window.localStorage.getItem(id);
    if (!timeLog) {
      throw new Error(`Id ${id} not found in local storage`);
    }
    return JSON.parse(timeLog);
  }

  static readAll(): [TimeLogRecord] {
    const allKeys = Object.keys(window.localStorage);
    return allKeys.map((key) => JSON.parse(window.localStorage.getItem(key)) as TimeLogRecord) as [TimeLogRecord];

  }
}
