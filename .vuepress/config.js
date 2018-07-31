module.exports = {
    title: "VuePress Tutorial",
    description: "Free VuePress Course",
	themeConfig: {
		
		sidebar: [
			{
				title: 'Tutorial',
				children: [
					'/default1.md', 
					'/default2.md',
					'/default3.md',
					'/default4.md',
					'/default5.md',
					'/default6.md',
					'/default7.md',
					'/default8.md',
					'/config1.md',
					'/config-title.md',
					'/config-description.md',
				]
			},
			'/markdown.md',
			'/yaml.md',
			'/style-overriding-default.md',
			['/netlify.md', 'Deploying to Netlify'],
			{
				title: 'Custom themes',
				children: [
					'/custom1.md',
					'/custom2.md',
				]
			},
			'/feedback.md',
			'/contact.md',
			'/reference.md',
			'/cheatsheet.md',
			'/credits.md',
			
		]
	}
}

