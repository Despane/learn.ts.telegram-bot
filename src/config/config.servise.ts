import { config, DotenvParseOutput } from 'dotenv'
import { IConfigService } from './config.interface'

export class ConfigServise implements IConfigService {
	private config: DotenvParseOutput
	constructor() {
		const { error, parsed } = config()
		if (error) {
			throw new Error('Нет файла .env')
		}
		if (!parsed) {
			throw new Error('В файле .env нет записи')
		}
		this.config = parsed
	}
	get(key: string): string {
		const res = this.config[key]
		if (!res) {
			throw new Error(`Нет значения по ключу ${key}`)
		}
		return res
	}
}
