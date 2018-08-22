module.exports = {
	title: 'VuePress tutorial',
	description: 'VuePress examples and demo code',
	ga: 'UA-11825324-2', // 'UA-124245419-1',
	serviceWorker: true,
	head: [
		['link', { rel: 'icon', href: '/hero.png' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
		['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
	],
	themeConfig: {
		sidebar: [
			'/introduction',
			{
				title: 'Tutorial',
				children: [
					'/tutorial/tutorial1',
					'/tutorial/tutorial2',
					'/tutorial/tutorial3',
					'/tutorial/emoji',
					'/tutorial/tutorial4',
					'/tutorial/tutorial5',
					'/tutorial/tutorial6',
					'/tutorial/special'
				]
			},
			{
				title: 'Site configuration: config.js',
				children: [
					'/config/config1',
					'/config/config-title',
					'/config/config-description',
				]
			},
			{
				title: 'Customizing the default theme',
				children: [
					'/default-theme/hero-text.md',
					'/default-theme/hero-image.md',
					'/default-theme/action-link.md',
					'/default-theme/tagline.md',
					'/default-theme/features.md',
					'/default-theme/footer.md',
				]
			},
			{
				title: 'Custom themes',
				children: [
					'/custom-themes/custom1',
					'/custom-themes/custom2',
				]
			},
			'/netlify',
			'/feedback',
			'/reference',
 			'/contact',
			'/'
		]

	}
}

