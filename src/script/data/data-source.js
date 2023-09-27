
class DataSource {
  static searchDrinkByName(keyword) {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok (${response.status} - ${response.statusText})`);
        }
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.cocktails) {
          return Promise.resolve(responseJson.cocktails);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        return Promise.reject('Failed to fetch drink by name.');
      });
  }

  static searchDrinkByIngredient(ingredient) {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok (${response.status} - ${response.statusText})`);
        }
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.cocktails) {
          return Promise.resolve(responseJson.cocktails);
        } else {
          return Promise.reject(`${ingredient} is not found in any drinks`);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        return Promise.reject('Failed to fetch drinks by ingredient.');
      });
  }

  static searchDrinkByCategory(category) {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok (${response.status} - ${response.statusText})`);
        }
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.cocktails) {
          return Promise.resolve(responseJson.cocktails);
        } else {
          return Promise.reject(`No drinks found in the category ${category}`);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        return Promise.reject('Failed to fetch recipes by category.');
      });
  }

  static searchDrinkByGlass(glass) {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok (${response.status} - ${response.statusText})`);
        }
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.cocktails) {
          return Promise.resolve(responseJson.cocktails);
        } else {
          return Promise.reject(`No drinks found in the glass ${glass}`);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        return Promise.reject('Failed to fetch drinks by glass.');
      });
  }
}

export default DataSource;

