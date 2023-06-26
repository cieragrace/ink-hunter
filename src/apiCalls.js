// function getArtistAPICalls(endpoint) {
//   return fetch(`https://ink-hntr-api-gzjw.vercel.app/api/v1/${endpoint}`)
//   .then((res) => res.json())
// }

function getArtistAPICalls(endpoint) {
  return fetch(`https://ink-hntr-api-gzjw.vercel.app/api/v1/${endpoint}`)
    .then((res) => {
      console.log('API response:', res);
      return res.text(); // Get the response body as text
    })
    .then((data) => {
      console.log('API response body:', data);
      return JSON.parse(data); // Parse the response body as JSON
    });
}

export default getArtistAPICalls