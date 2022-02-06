import fs from 'fs';
import { MEMBERS, OutputTypes } from './constants';
import { getSentinelListForThisMonth } from "./helpers/calculator";

const sentinels = getSentinelListForThisMonth(MEMBERS);

OutputTypes.forEach(outputType => {
    var generator = new outputType.Generator();
    
    fs.writeFile(`artifacts/${outputType.FileName}`, generator.generate(sentinels), (err) => {
        if(err) console.log(err.message);
    });
});