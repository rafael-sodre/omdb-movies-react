
const Filmes = ({filmes}) => {
    return(
        <div className="movie-container">
            {filmes.map(filme => (
                <div key={filme.imdbID} className="movie">
                    <img src={filme.Poster} />
                    <div className="movie-info">
                        <h4>{filme.Title}</h4>
                        <p>{filme.Year}</p>
                    </div>
                    <div className="movie-plot">
                        <h3>Plot</h3>
                        {filme.Plot}
                        <div><br/>
                        <h3>Ratings</h3>
                        {filme.Ratings.map(x =>(
                            <div className="rating-container">
                                <p>{x.Source}</p>
                                <span>{x.Value}</span>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Filmes