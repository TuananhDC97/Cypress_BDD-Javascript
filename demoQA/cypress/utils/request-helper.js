export const RequestHelper = {
	sendPostRequest(userToken,endPoint,	data = {},header = {}) {
		if (Object.keys(header).length === 0) {
			header = { 'content-type': 'application/json' }
		}
		var headers = {}
		headers = { ...userToken, ...header }
		let url = Cypress.env('apiUrl') + endPoint
		debugger
		cy.request({
			method: 'POST',
			url: url,
			headers: headers,
			body: data,
			failOnStatusCode: false,
		}).as('response')
	},

	sendDeleteRequest(userToken, endPoint, data = {}, header={}) {
		if (Object.keys(header).length === 0) {
			header = { 'content-type': 'application/json' }
		}
		var headers = {}
		headers = { ...userToken, ...header }

		let url = Cypress.env('apiUrl') + endPoint
		cy.request({
			method: 'DELETE',
			url: url,
			headers: headers,
			failOnStatusCode: false,
		}).as('response')
	},
}