const Header = ({ handleOnSubmit, termoBusca, handleOnChange }) => {
    return(
        <header>
            <h1>OMDB API React</h1>
            <form onSubmit={handleOnSubmit}>
                <input 
                type='Search'
                placeholder='Buscar'
                value={termoBusca}
                onChange={handleOnChange}
                />
            </form>
        </header>
    )
}

export default Header