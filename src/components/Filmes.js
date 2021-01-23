const Filmes = ({filmes}) => {
    return(
        <div className="movie-container">
            {filmes.map(filme => (
                <div key={filme.imdbID} className="movie">
                    <img src={filme.Poster}/>
                    <div className="movie-info">
                        <h3>{filme.Title}</h3>
                        <p>{filme.Year}</p>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}

export default Filmes