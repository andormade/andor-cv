const datauri = require('./datauri.js');

const renderPositions = cv => cv.positions.map(position => `
	<li class="position">
		<div class="dont-brake">
			<img class="position--image" src="${datauri('./src/assets/' + position.logo)}" />
			<h3>${position.jobTitle}</h3>
			<span>${position.company}</span><br />
			<small>${position.startDate} - ${position.endDate}
			&bull; ${position.location}</small>
			<p>${position.description}</p>
		</div>
		<p>Responsibilites: ${position.responsibilites.join(', ')}</p>
		<p>Technolgies: ${position.technologies.join(', ')}</p>
	</li>
`).join('');

const renderConferences = cv => cv.conferences.map(conference => `
	<li class="conference dont-brake">
		<img class="conference--logo" src="${datauri('./src/assets/' + conference.logo)}" />
		<h3>${conference.title}</h3>
		<small>${conference.date} &bull; ${conference.location}</small>
		<p>${conference.summary}</p>
	</li>
`).join('');

const renderSchools = cv => cv.education.map(school => `
	<li class="school dont-brake">
		<img class="school--logo" src="${datauri('./src/assets/' + school.logo)}" />
		<h3>${school.school}</h3>
		<span>${school.fieldOfStudy} ${school.degree}</span><br />
		<small>${school.startDate} - ${school.endDate}
		&bull; ${school.location}</small>
		<p>Completed courses: ${school.completedCourses.join(', ')}</p>
	</li>
`).join('');

const renderFaq = cv => cv.faq.map(qa => `
	<li class="qa dont-break">
		<h3>${qa.q}</h3>
		<span>${qa.a}</span>
	</li>
`).join('');

const renderSocialLinks = cv => cv.socialLinks.map(link => `
	<li class="dont-break">
		${link.title}: <a href="${link.url}" target="_blank">${link.url}</a>
	</li>
`).join('');

module.exports = cv => `
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8" />
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
			<span>${cv.name}
			<br />Website: <a href="${cv.website}">${cv.website}</a>
			<br />Location: ${cv.location}
			<br />Phone: ${cv.phone}
			<br />Nationalities: ${cv.nationalities.join(', ')}</span>
			<p>${cv.introduction}</p>
			<h2>Professional experience</h2>
			<ul class="positions">
				${renderPositions(cv)}
			</ul>
			<h2>Conferences</h2>
			<ul class="conferences">
				${renderConferences(cv)}
			</ul>
			<h2>Education</h2>
			<ul>
				${renderSchools(cv)}
			</ul>
			<h2>Social links</h2>
			<ul>
				${renderSocialLinks(cv)}
			</ul>
			<h2>Frequently Asked Questions</h2>
			<ul>
				${renderFaq(cv)}
			</ul>
			<h2>Other skills</h2>
			<p>${cv.otherSkills.join(', ')}</p>
			<h2>Hobbies</h2>
			<p>${cv.hobbies.join(', ')}</p>
		</body>
	</html>
`;
