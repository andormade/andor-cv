import jss from 'jss';
import fs from 'fs';

export default jss.default.createStyleSheet({
	'@font-face' : {
		'font-family' : 'Open Sans',
		'src'         : 'url(' + 'data:application/font-sfnt;base64,' + fs.readFileSync('./src/assets/OpenSans-Regular.ttf', 'base64') +  ')'
	},
	'title' : {
		'color' : '#996633'
	},
	'page' : {
		'padding' : 0,
		'margin'  : 0,
		'font-family' : 'Open Sans'
	},
	'job' : {
		'display'        : 'flex',
		'flex-direction' : 'row'
	},
	'job-picture' : {
	},
	'job-details' : {
	}
});
