class Api {
  constructor({ baseUrl, apiKey }) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
  }

  static getResponse(res) {
    /* статичная функция */
    return res.status === 200 || res.status === 201
      ? res.json()
      : Promise.reject("Ошибка: " + res.status);
  }

  search(searchQuery) {
    return fetch(`${this._baseUrl}/search/photos?query=${searchQuery}`, {
      headers: {
        Authorization: `Client-ID ${this._apiKey}`,
      },
    })
      .then(Api.getResponse)
      .then(({ results }) => results.map(Api.transformFotoData));
  } /*close search function*/

  static transformFotoData(item) {
    console.log('transformFototData: ' + item);
    return {
      id: item.id,
      src: item.urls.regular,
      alt: item.alt_description,
      title: item.user.name,
      subtitle: item.description,
    };
  }

  getPhotoById(id) {
    return fetch(`${this._baseUrl}/photos/${id}`, {
      headers: {
        Authorization: `Client-ID ${this._apiKey}`,
      },
    })
      .then(Api.getResponse)
      .then(Api.transformFotoData);
  } /*close search function*/
} /* close class*/

const config = {
  baseUrl: "https://api.unsplash.com",
  apiKey: "7gDq60ZOAkGuArU8JvMDKXLm88Fb-DWYAT8FIseR8CQ",
};

const api = new Api(config);

export default api;
