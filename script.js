const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '69e3926b9amshc2e276640bb471ap143807jsn929aa6cf1ecb',
    'X-RapidAPI-Host': 'league-of-legends-champions.p.rapidapi.com',
  },
};

fetch(
  'https://league-of-legends-champions.p.rapidapi.com/champions/en-us?page=1&size=10',
  options,
)
  .then((response) => response.json())
  .then((response) => {
    let res = response.champions;
    iter(res);
  })
  .catch((err) => console.error(err));

function iter(arr) {
  arr.forEach((item) => {
    for (node in item) {
      console.log(item[node]['champion_name']);
      console.log(item[node]['champion_splash']);
    }
  });
}
