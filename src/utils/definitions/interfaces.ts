export interface TimeLogRecord {
  id?: string|number;
  startTime: Date;
  finishTime?: Date;
  code?: string;
  description?: string;
}
