
import PokemonCard from "../components/PokemonCard"

function StarterChoice() {

    const starters = [
        { id: 1, name: "Charmander", skills: "tackle" },
        { id: 2, name: "Squirtle", skills: "tackle" }
    ];

    // map to iterate array of starter pokemons and passes to function that will return a component
    // key property is used to update component with unique identifier for separate starters
    return (
        <div className="starter">
            <div className="starters-grid">
                {starters.map((pokemon) => (
                    <PokemonCard pokemon={pokemon} key={pokemon.id} />
                ))}
            </div>
        </div>
    );
}

export default StarterChoice