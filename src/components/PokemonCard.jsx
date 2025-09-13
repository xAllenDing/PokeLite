// pokemon prop will be an object containing information about the
// starter pokemon such as skills, typing, hp, levels, dex entry
// passive skill

function PokemonCard({ pokemon }) {

    function onSelectPokemon() {
        alert("clicked");
    }

    return <div className="pokemon-card">
        <div className="pokemon-poster">
            <img src={pokemon.url} alt={pokemon.name} />
        </div>
        <div className="pokemon-info">
            <h3>{pokemon.name}</h3>
            <p>{pokemon.skills}</p>
        </div>
        <div className="pokemon-select">
            <button className="choice-btn" onClick={onSelectPokemon}>
                Select Pokemon
            </button>
        </div>
    </div>
}

export default PokemonCard;