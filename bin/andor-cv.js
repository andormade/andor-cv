#!/usr/bin/env node

const program = require('commander');
const html = require('..');
const pdf = require('html-pdf');
const fs = require('fs');

program
	.option('-f, --format [format]', 'format of the document (A3, A4, A5, Legal, Letter, Tabloid)', /^(A3|A4|A5|Legal|Letter|Tabloid)$/i, 'A4')
	.option('-o, --orientation [orientation]', 'orientation of the document (portrait or landscape)', /^(portrait|landscape)$/i, 'portrait')
	.option('-d, --debug', 'generate html output')
	.parse(process.argv);

const options = {
	format      : program.format,
	orientation : program.orientation,
	border      : {
		top    : '1in',
		right  : '0.5in',
		bottom : '1in',
		left   : '0.5in'
	}
};

if (program.debug) {
	fs.writeFileSync("./andor_polgar_cv.html", html);
}


pdf.create(html, options).toFile('./andor_polgar_cv.pdf', (err, res) => {
	if (err) {
		return console.log(err)
	}
	console.log(res);
});
