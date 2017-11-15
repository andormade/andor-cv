import fs from 'fs';
import CVdata from './cv.json';
import template from './template.mjs';

fs.writeFileSync("./cv-andor-polgar.html", template(CVdata));
