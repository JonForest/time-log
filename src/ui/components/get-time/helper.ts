import { formatTime } from '../../../utils/libs/date-format';

export default function getTime(params) {
  return formatTime(params[0]);
}
