const Filme = ({ filme }) => {
    return (
        <div>
            <img src = {filme.Poster}/>
            <h3>{filme.Title}</h3>
            <p>{filme.Year}</p>
        </div>
    )
}

export default Filme
