#!/usr/bin/env node

const program = require('commander');
const html = require('..');
const pdf = require('html-pdf');

program
	.option('-f, --format [format]', 'Format of the document (A3, A4, A5, Legal, Letter, Tabloid)', /^(A3|A4|A5|Legal|Letter|Tabloid)$/i, 'A4')
	.option('-o, --orientation [orientation]', 'Orientation of the document (portrait or landscape)', /^(portrait|landscape)$/i, 'portrait')
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

pdf.create(html, options).toFile('./out/cv.pdf', (err, res) => {
	if (err) {
		return console.log(err)
	}
	console.log(res);
});
