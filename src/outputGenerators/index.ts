export interface OutputGenerator {
  generate(list: Array<{ date:string, name:string }>) : string
}

export { HtmlOutputGenerator } from './html';
export { JSONOutputGenerator } from './json';