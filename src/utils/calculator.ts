import _ from "lodash";
import { Member, MEMBERS } from "../constants";
import { getRemainingDaysCountForThisMonth } from "../utils/date";

export function getSentinels() {
  const remainingDaysCountForThisMonth =  getRemainingDaysCountForThisMonth();

  let sentinels: Member[] = [];

  if (remainingDaysCountForThisMonth < MEMBERS.length) {
    sentinels = _.shuffle(MEMBERS).slice(0, remainingDaysCountForThisMonth);
  } else {
    let _remainingDays = remainingDaysCountForThisMonth;
    let _sentinels = [];
    while (_remainingDays > 0) {
      const _lastMember = _.last(sentinels);
      const _sliceCount =
        _remainingDays < MEMBERS.length ? _remainingDays : MEMBERS.length;
      _sentinels = _.shuffle(MEMBERS).slice(0, _sliceCount);

      if (_lastMember?.id !== _.first(_sentinels)!.id) {
        sentinels = [...sentinels, ..._sentinels];
        _remainingDays -= _sliceCount;
      }
    }
  }

  return sentinels;
}
