const Header = ({ handleOnSubmit, termoBusca, handleOnChangeTermo, handleOnChangeAno, anoBusca,  }) => {
    return(
        <>
            <header>
            <h1>OMDB API React</h1>
                <form onSubmit={handleOnSubmit}>
                    <input type="text" placeholder="Titulo" value={termoBusca} onChange={handleOnChangeTermo}/>
                    <input type="text" placeholder="Ano" value={anoBusca} onChange={handleOnChangeAno}/>
                    <input type="submit"/> <br/>
                </form>
            </header>
        </>
    )
}

export default Header