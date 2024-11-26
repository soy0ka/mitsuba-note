interface Data<T = unknown> {
	[key: string]: T
}

export interface ResponseProps<T = Data> {
	code?: number
	message?: string
	version?: number
	data?: T
	errors?: string[]
}