import { useGetPokemonByNameQuery } from "./pokemon";

export const PokeExample = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  return (
    <div>
      {error ? (
        <>Error occured</>
      ) : isLoading ? (
        <>...loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  );
};
