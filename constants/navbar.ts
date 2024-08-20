interface INavbar {
	id: number
	path: string
	title: string
}

export const navbar: INavbar[] = [
	{
		id: 2,
		path: '/#about',
		title: 'about',
	},
	{
		id: 1,
		path: '/#news',
		title: 'news',
	},

	{
		id: 3,
		path: '/#statistic',
		title: 'statistic',
	},
	{
		id: 4,
		path: '/#gallery',
		title: 'gallery',
	},
	{
		id: 5,
		path: '/#contact',
		title: 'contact',
	},
]
