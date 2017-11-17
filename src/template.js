const datauri = require('./datauri.js');

const renderPositions = cv => cv.positions.map(position => `
	<li class="position">
		<img class="position--image" src="${datauri('./src/assets/' + position.logo)}" />
		<h3>${position.jobTitle}</h3>
		<span>${position.company}</span>
		<span>${position.startDate} - ${position.endDate}</span>
		<span>${position.location}</span>
		<p>${position.description}</p>
		<p>${position.keywords.join(', ')}</p>
	</li>
`).join('');

const renderSchools = cv => cv.education.map(school => `
	<li class="school">
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

module.exports = cv => `
	<!DOCTYPE>
	<html>
		<head>
			<style>
				@font-face {
					font-family: Open Sans;
					src: url(${datauri('./src/assets/OpenSans-Regular.ttf')})
				}
			</style>
			<link rel="stylesheet" type="text/css" href="${datauri('./src/assets/style.css')}"/>
		</head>
		<body>
			<img class="photo" src="${datauri('./src/assets/andor_cv_photo.jpg')}" />
			<p>${cv.name}</p>
			<p>Website: <a href="${cv.website}">${cv.website}</a></p>
			<p>Location: ${cv.location}</p>
			<p>Nationalities: ${cv.nationalities.join(', ')}</p>
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
