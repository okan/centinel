import dayjs from "dayjs";
import fs from 'fs';
import { getSentinels } from "./utils/calculator";
import { getHtmlOutput } from "./utils/html";

const sentinels = getSentinels();

const list = sentinels.map((sentinel, index) => {
    return {
        date: dayjs().add(index + 1, 'day').format('DD/MM/YYYY').toString(),
        name: sentinel.name
    }
});

const htmlOutput = getHtmlOutput(list);

fs.writeFile('artifacts/index.html', htmlOutput, (err) => {
    if(err) console.log(err.message);
});