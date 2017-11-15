const style = require('./style.js');
const fs = require('fs');

const renderPositions = cv => cv.positions.map(position => `
	<li>
		<h3>${position.company}</h3>
		<img src="data:image/jpg;base64,${fs.readFileSync('./src/assets/' + position.logo, 'base64')}" />
		<span>${position.location}</span>
		<span>${position.jobTitle}</span>
		<span>${position.description}</span>
	</li>
`).join('');

const renderSchools = cv => cv.education.map(school => `
	<li>
		<h3>${school.school}</h3>
		<span>${school.degree}</span>
		<span>${school.fieldOfStudy}</span>
	</li>
`).join('');

const renderSocialLinks = cv => cv.socialLinks.map(link => `
	<li>
		<a href="${link.url}" target="_blank">${link.title}</a>
	</li>
`).join('');

const {classes} = style;

module.exports = cv => `
	<!DOCTYPE>
	<html>
		<head>
			<style>${style.toString()}</style>
		</head>
		<body class="${classes.page}">
			<img src="data:image/jpg;base64,${fs.readFileSync('./src/assets/andor_cv_photo.jpg', 'base64')}" />
			<h1 class="${classes.title}">${cv.name}</h1>
			<h2>Experience</h2>
			<ul>
				${renderPositions(cv)}
			</ul>
			<h2>Education</h2>
			<ul>
				${renderSchools(cv)}
			</ul>
			<h2>Social links</h2>
			<ul>
				${renderSocialLinks(cv)}
			</ul>
		</body>
	</html>
`;
