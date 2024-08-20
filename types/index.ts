export interface Ilanguage<T> {
	uz: T
	ru: T
}

export interface IResponse<T> {
	count: number
	next: string | null
	previous: string | null
	results: T
}
