export const GET_DETAILS = "GET_DETAILS";

export const getDetailsAction = (cocktailId) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
      );
      if (response.ok) {
        let details = await response.json();
        dispatch({ type: GET_DETAILS, payload: details.drinks[0] });
      } else {
        throw new Error("Errore nella fetch");
      }
    } catch (err) {
      console.log("errore");
    }
  };
};
