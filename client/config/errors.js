export class ValidationError extends Error {
	constructor(message) {
		super(message);
		this.name = 'ValidationError'
	}
}

export class ConnectionError extends Error {
	constructor(message) {
		super(message);
		this.name = 'ConnectionError'
	}
}
