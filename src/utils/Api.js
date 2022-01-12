class Api {
    constructor({baseUrl, apiKey}) {
        this._baseUrl = baseUrl;
        this._apiKey = apiKey;
    }

    search(searchQuery) {
        return fetch(`${this._baseUrl}/search/photos?query=${searchQuery}`,
        {
        headers: {
            Authorization: `Client-ID ${this._apiKey}`

        }
    }).then(res => res.ok ? res.json() : Promise.reject(res.status));
    } /*close search function*/
} /* close class*/

const config = {
    baseUrl: 'https://api.unsplash.com',
    apiKey: '7gDq60ZOAkGuArU8JvMDKXLm88Fb-DWYAT8FIseR8CQ'
};

const api = new Api(config);

export default api;