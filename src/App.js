import {useState} from 'react'
import Header from './components/Header'
import Filmes from './components/Filmes'

const App = () => {
  const [filmes, setFilmes] = useState([{
    "Title": "Guardians of the Galaxy Vol. 2",
    "Year": "2017",
    "Rated": "PG-13",
    "Released": "05 May 2017",
    "Runtime": "136 min",
    "Genre": "Action, Adventure, Comedy, Sci-Fi",
    "Director": "James Gunn",
    "Writer": "James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)",
    "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
    "Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 57 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    "Ratings": [{
            "Source": "Internet Movie Database",
            "Value": "7.6/10"
        }, {
            "Source": "Rotten Tomatoes",
            "Value": "85%"
        }, {
            "Source": "Metacritic",
            "Value": "67/100"
        }
    ],
    "Metascore": "67",
    "imdbRating": "7.6",
    "imdbVotes": "562,796",
    "imdbID": "tt3896198",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$389,813,101",
    "Production": "Marvel Studios, Walt Disney Pictures",
    "Website": "N/A",
    "Response": "True"
}, {
    "Title": "Avengers: Infinity War",
    "Year": "2018",
    "Rated": "PG-13",
    "Released": "27 Apr 2018",
    "Runtime": "149 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Anthony Russo, Joe Russo",
    "Writer": "Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Joe Simon (Captain America created by), Jack Kirby (Captain America created by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Jim Starlin (Thanos, Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Steve Englehart (Mantis created by), Don Heck (Mantis created by)",
    "Actors": "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans",
    "Plot": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 1 Oscar. Another 46 wins & 75 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    "Ratings": [{
            "Source": "Internet Movie Database",
            "Value": "8.4/10"
        }, {
            "Source": "Rotten Tomatoes",
            "Value": "85%"
        }, {
            "Source": "Metacritic",
            "Value": "68/100"
        }
    ],
    "Metascore": "68",
    "imdbRating": "8.4",
    "imdbVotes": "828,791",
    "imdbID": "tt4154756",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$678,815,482",
    "Production": "Marvel Studios",
    "Website": "N/A",
    "Response": "True"
}, {
    "Title": "Captain Marvel",
    "Year": "2019",
    "Rated": "PG-13",
    "Released": "08 Mar 2019",
    "Runtime": "123 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Anna Boden, Ryan Fleck",
    "Writer": "Anna Boden (screenplay by), Ryan Fleck (screenplay by), Geneva Robertson-Dworet (screenplay by), Nicole Perlman (story by), Meg LeFauve (story by), Anna Boden (story by), Ryan Fleck (story by), Geneva Robertson-Dworet (story by)",
    "Actors": "Brie Larson, Samuel L. Jackson, Ben Mendelsohn, Jude Law",
    "Plot": "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
    "Language": "English",
    "Country": "USA, Australia",
    "Awards": "8 wins & 48 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg",
    "Ratings": [{
            "Source": "Internet Movie Database",
            "Value": "6.9/10"
        }, {
            "Source": "Rotten Tomatoes",
            "Value": "79%"
        }, {
            "Source": "Metacritic",
            "Value": "64/100"
        }
    ],
    "Metascore": "64",
    "imdbRating": "6.9",
    "imdbVotes": "437,802",
    "imdbID": "tt4154664",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$426,829,839",
    "Production": "Marvel Studios",
    "Website": "N/A",
    "Response": "True"
}
]
)
  return (
    
    <div className="container">
      <Header />
      <Filmes filmes={filmes}/>
    </div>
  );
}

export default App;
