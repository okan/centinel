import { HtmlOutputGenerator, JSONOutputGenerator } from "./outputGenerators"

export type Member = {
  id: number;
  name: string;
}

export type Sentinel = {
  member: Member;
  date: string;
  timestamp: number;
}

export const OutputTypes = [
  {
    FileName: 'sentinels.html',
    Generator: HtmlOutputGenerator
  },
  {
    FileName: 'sentinels.json',
    Generator: JSONOutputGenerator
  }
];

export const MEMBERS: Member[] = [
  { id: 1, name: 'Efe' },
  { id: 2, name: 'Arda' },
  { id: 3, name: 'İrem' },
  { id: 4, name: 'Murat' },
  { id: 5, name: 'Sude' },
  { id: 6, name: 'Derya' },
  { id: 7, name: 'Yağmur' },
  { id: 8, name: 'Hakan' },
]