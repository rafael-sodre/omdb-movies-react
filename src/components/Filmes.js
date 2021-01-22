import Filme from './Filme'

const Filmes = ({ filmes }) => {
    return (
        <>
        {filmes.map((filme) => (
            <Filme key={filme.imdbID} filme={filme}/>
        ))}
        </>
    )
}


export default Filmes