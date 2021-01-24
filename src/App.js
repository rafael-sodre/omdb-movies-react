import { useState, useEffect } from 'react'
import Filmes from './components/Filmes';
import Header from './components/Header' 

const App = () => {

    const [filmes, setFilmes] = useState([])
    useEffect(async (termoBusca) => {
        termoBusca = 'Avengers'
        const response = await fetch(`http://www.omdbapi.com/?apikey=45353287&s=${termoBusca}`)
        const data = await response.json();
        const filmes = []
        for(var i = 0; i < data.Search.length; i++){
            const resp = await fetch(`http://www.omdbapi.com/?apikey=45353287&i=${data.Search[i].imdbID}`);
            const dat = await resp.json();
            filmes.push(dat)
        }
        filmes.sort((a,b) => a.Title > b.Title ? 1 : -1)
        setFilmes(filmes)
    },[]);

    const [filme, setFilme] = useState([])
    useEffect( async (imdbID) => {
        imdbID = 'tt3896198'
        const response = await fetch(`http://www.omdbapi.com/?apikey=45353287&i=${imdbID}`)
        const data = await response.json();
        setFilme(data)
    },[])

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        var request = constuirRequisicao(termoBusca, anoBusca)
        const response = await fetch(request);
        const data = await response.json();
        const filmes = []
        for(var i = 0; i < data.Search.length; i++){
            const resp = await fetch(`http://www.omdbapi.com/?apikey=45353287&i=${data.Search[i].imdbID}`);
            const dat = await resp.json();
            filmes.push(dat)
        }
        filmes.sort((a,b) => a.Title > b.Title ? 1 : -1)
        setFilmes(filmes)
    }

    function constuirRequisicao(termoBusca, anoBusca){
        if(termoBusca && anoBusca)
            return `http://www.omdbapi.com/?apikey=45353287&s=${termoBusca}&y=${anoBusca}`
        if(!termoBusca && !anoBusca )
            return `http://www.omdbapi.com/?apikey=45353287&s=Avengers`
        if(termoBusca && !anoBusca)
            return `http://www.omdbapi.com/?apikey=45353287&s=${termoBusca}`
        if(!termoBusca && anoBusca)
            return `http://www.omdbapi.com/?apikey=45353287&s=Avengers&y=${anoBusca}`
    }
    const [termoBusca, setTermoBusca] = useState('');
    const handleOnChangeTermo = (e) => {
        setTermoBusca(e.target.value)
    }
    
    const [anoBusca, setAnoBusca] = useState('');
    const handleOnChangeAno= (e) => {
        setAnoBusca(e.target.value)
    }

    return  <> 
                <Header 
                    handleOnSubmit={handleOnSubmit} 
                    termoBusca={termoBusca} 
                    handleOnChangeTermo={handleOnChangeTermo} 
                    handleOnChangeAno={handleOnChangeAno} 
                    anoBusca={anoBusca}
                    
                />
                
        
                <Filmes filmes={filmes}/>

            </>;
}

export default App