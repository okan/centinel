import dayjs from "dayjs";
import fs from 'fs';
import { getSentinels } from "./helpers/calculator";
import { HtmlOutputGenerator, JSONOutputGenerator } from './outputGenerators';

const htmlGenerator = new HtmlOutputGenerator();
const jsonGenerator = new JSONOutputGenerator();

const sentinels = getSentinels();

const list = sentinels.map((sentinel, index) => {
    return {
        date: dayjs().add(index + 1, 'day').format('DD/MM/YYYY').toString(),
        name: sentinel.name
    }
});

const htmlOutput = htmlGenerator.generate(list);
const jsonOutput = jsonGenerator.generate(list);

fs.writeFile('artifacts/sentinels.html', htmlOutput, (err) => {
    if(err) console.log(err.message);
});

fs.writeFile('artifacts/sentinels.json', jsonOutput, (err) => {
    if(err) console.log(err.message);
});