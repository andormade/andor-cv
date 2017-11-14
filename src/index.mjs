import fs from 'fs';
import CVdata from '../data/cv.json';
import template from './template.mjs';

fs.writeFileSync("./cv-andor-polgar.html", template(CVdata));
