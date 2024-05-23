export const GET_COCKTAIL = "GET_COCKTAIL";

export const getCocktailAction = (input) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${input}`
      );
      if (response.ok) {
        let cocktails = await response.json();
        dispatch({ type: GET_COCKTAIL, payload: cocktails.drinks });
      } else {
        throw new Error("Errore nella fetch");
      }
    } catch (err) {
      console.log("errore");
    }
  };
};
