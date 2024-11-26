import http from 'http'
import { ResponseProps } from '../types'
import { ErrorText } from './Constants'
export default function ResponseWrapper<T = unknown>(
	res: ApiResponse,
	{ code = 200, message, version = 2, data, errors }: ResponseProps<T>
) {
	if (!code) throw new Error('`code` is required.')
	if (!http.STATUS_CODES[code]) throw new Error('Invalid http code.')
	// res.setHeader('Access-Control-Allow-Origin')
	res.status(code)
	res.json({
		code,
		data,
		errors,
		version,
		...(message || !data ? { message: message || ErrorText[code as keyof typeof ErrorText] || http.STATUS_CODES[code] } : {}),
	})
}

interface ApiResponse {
	status(status: string | number): void
	setHeader(key: string, value: string): void
	json(json: unknown): void
}
