import { OutputGenerator } from '.';
import { Sentinel } from '../constants';

export class JSONOutputGenerator implements OutputGenerator {
    generate(sentinels: Sentinel[]): string {
        return JSON.stringify(sentinels.map(({ date, timestamp, member: { name } }) => {
            return {
                date,
                timestamp,
                name
            }
        }))
    }
}