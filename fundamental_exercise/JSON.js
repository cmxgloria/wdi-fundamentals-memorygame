let favoriteMovie = {
  “title”: “Black Panther”,
  “director”: “Ryan Coogler”,
  “year”: 2018,
  “imdb”: 7.5
};

favoriteMovie = JSON.parse(favoriteMovie); 

//
let favoriteMovie = {
  title: 'Black Panther',
  director: 'Ryan Coogler',
  year: 2018,
  imdb: 7.5
};

favoriteMovie = JSON.stringify(favoriteMovie);


//https://jsonlint.com/
{
  "someKey": "someValue",
  "innerArray": [
    "alpha",
    "beta",
    "gamma",
    "delta"
  ]
}
//valid

//convert string and object
var grungeAlbums = {
  "albums":[
    {
        "name": "Bleach",
        "artist": "Nirvana",
        "unitsSold": 1700000
    },
    {
        "name": "Nevermind",
        "artist": "Nirvana",
        "unitsSold": 30000000
    },
    {
        "name": "In Utero",
        "artist": "Nirvana",
        "unitsSold": 15000000
    },
    {
        "name": "Ten",
        "artist": "Pearl Jam",
        "unitsSold": 10000000
    },
    {
        "name": "Vs",
        "artist": "Pearl Jam",
        "unitsSold": 6100000
    },
    {
        "name": "Vitalogy",
        "artist": "Pearl Jam",
        "unitsSold": 4770000
    }
  ]
};

const grungeAlbumsObj = JSON.stringify(grungeAlbums);
const grungeAlbumsJSON = JSON.parse(grungeAlbumsObj);
console.log(grungeAlbumsObj);
console.log(grungeAlbumsJSON);