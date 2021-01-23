import { useState, useEffect } from 'react'
import Filmes from './components/Filmes';
import Header from './components/Header' 

const App = () => {

    const [filmes, setFilmes] = useState([])
    useEffect(async (termoBusca) => {
        termoBusca = 'Avengers'
        const response = await fetch(`http://www.omdbapi.com/?apikey=45353287&s=${termoBusca}`)
        const data = await response.json();
        
        setFilmes(data.Search)
    },[]);

    const [filme, setFilme] = useState([])
    useEffect( async (imdbID) => {
        imdbID = 'tt3896198'
        const response = await fetch(`http://www.omdbapi.com/?apikey=45353287&i=${imdbID}`)
        const data = await response.json();
        setFilme(data)
    },[])

    const [termoBusca, setTermoBusca] = useState('');

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`http://www.omdbapi.com/?apikey=45353287&s=${termoBusca}`)
        const data = await response.json();
        setFilmes(data.Search)
    }

    const handleOnChange = (e) => {
        setTermoBusca(e.target.value)
    }

    return  <div> 
                <Header termoBusca={termoBusca} 
                        handleOnSubmit={handleOnSubmit} 
                        handleOnChange={handleOnChange}/>
                <Filmes filmes={filmes}/>
            </div>;
}

export default App