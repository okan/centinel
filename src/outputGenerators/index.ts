import { Sentinel } from '../constants';

export interface OutputGenerator {
  generate(sentinels: Sentinel[]) : string
}

export { HtmlOutputGenerator } from './html';
export { JSONOutputGenerator } from './json';