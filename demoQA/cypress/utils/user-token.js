export class UserToken {
	static setToken(accessToken) {
		Cypress.env('token', accessToken)
	}

	static getAuthToken() {
		return { Authorization: `Bearer ${Cypress.env('token')}` }
	}

	static getBasicAuth(username, password) {
        const encodedCredentials = btoa(`${username}:${password}`);
        return { Authorization: `Basic ${encodedCredentials}` };
      }
}
