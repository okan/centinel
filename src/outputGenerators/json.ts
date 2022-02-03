import { OutputGenerator } from '.';

export class JSONOutputGenerator implements OutputGenerator {
    generate(list: { date: string; name: string; }[]): string {
        return JSON.stringify(list.map(({ date, name }) => {
            return {
                date,
                name
            }
        }))
    }
}