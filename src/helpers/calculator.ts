import _ from "lodash";
import { Member, Sentinel } from "../constants";
import { getDateAsStringForIndex, getRemainingDaysCountForThisMonth, getTimestampForIndex } from "./date";

function getShuffledMemberListForRemainingDaysCount(members: Member[], remainingDaysCount: number) {
  const membersLength = members.length;

  if (remainingDaysCount < membersLength) {
    return _.shuffle(members).slice(0, remainingDaysCount);
  }

  let _remainingDays = remainingDaysCount;
  let memberList: Member[] = [];
  let _memberList: Member[] = [];

  while (_remainingDays > 0) {
    const _lastMember = _.last(memberList);
    const _sliceCount =
      _remainingDays < membersLength ? _remainingDays : membersLength;
    _memberList = _.shuffle(members).slice(0, _sliceCount);

    if (_lastMember?.id !== _.first(_memberList)!.id) {
      memberList = [...memberList, ..._memberList];
      _remainingDays -= _sliceCount;
    }
  }

  return memberList;
}

function getShuffledMemberList(members: Member[]) {
  const remainingDaysCountForThisMonth =  getRemainingDaysCountForThisMonth();

  return getShuffledMemberListForRemainingDaysCount(members, remainingDaysCountForThisMonth);
}

export function getSentinelListForThisMonth(members: Member[]) : Sentinel[] {
  const shuffledMemberList = getShuffledMemberList(members);

  return shuffledMemberList.map((member, index) => {
    return {
      member,
      date: getDateAsStringForIndex(index),
      timestamp: getTimestampForIndex(index)
    }
});
}