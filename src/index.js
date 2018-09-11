const teaBagsLeft = teaBags => {
  // function receives an object where keys are names of tea types
  // and values are the number of teaBags we have of that type.

  // return the total number teabags we have left

  const arr = Object.values(teaBags);
  const teaBagsTotal = arr.reduce((acc, item) => {
    return acc + item;
  }, 0);
  return teaBagsTotal;
}

const shoppingList = (previousShoppingList, newShoppingList) => {
  // function receives two shopping list objects
  // a shopping list has items names as keys and the number of items required as values

  // return a new shopping list which has properties from both shopping lists
  // properties from newShoppingList should overwrite properties from previousShoppingList
  // previousShoppingList and newShoppingList should not be mutated

  const mergeShoppingList = Object.assign({}, previousShoppingList, newShoppingList);
  return mergeShoppingList;

}

const footballResults = (results) => {
  // function receives an object called results
  // results has football team names as keys and their number of points as values
  // {
  //   arsenal: 7,
  //   tottenham: 3,
  //   chelsea: 2
  // }

  // return an array of strings containing the results,
  // which follows the format '<teamname> has <points> points'
  // for above input it would be

  // [
  //   'arsenal has 7 points',
  //   'tottenham has 3 points',
  //   'chelsea has 2 points'
  // ]
   const teamname = Object.keys(results);
   const scoreString = teamname.map(team => {
     return `${team} has ${results[team]} points`;
   });
   return scoreString;

}

const convertBookArrayToMap = books => {
  // the function receives an array of books where each book has an id, author, title and year

  // for example
  // {
  //   id:1,
  //   author: "Alexander Dumas",
  //   title: "The count of Monte Christo",
  //   year: 1884
  // }

  // convert the array of books into a map, where each key is a book id and the corresponding value
  // is the object with that id from the array

  // for example
  // {
  //   1: {
  //     id:1,
  //     author: "Alexander Dumas",
  //     title: "The count of Monte Christo",
  //     year: 1884
  //   }
  // }

  // hint: create a new output object and assign new properties with id as key and the book as value
  
  const newBookMap = {};
  books.map(book => {
    return Object.assign(newBookMap, {[book.id]:book})
  });
  return newBookMap;
      
  



}

const dogCount = dogs => {
  // function receives an array of dogs, each dog has a name and location
  // for example
  // {
  //     name: 'ruby',
  //     location: 'liverpool'
  // }

  // return an object which has locations as keys and
  // the number of dogs at that location as values

  // hint: create a new output object and loop over dogs array.
  // For each dog increment the value corresponding to the location key.

  const objDogCount = {};
  dogs.map(dog => {
     (!objDogCount[dog.location]) ? objDogCount[dog.location] = 1 : objDogCount[dog.location]++;
  })
  return objDogCount;

}

const dogNames = dogs => {
  // function receives an array of dogs, each dog has a name and location
  // for example
  // {
  //     name: 'ruby',
  //     location: 'liverpool'
  // }

  // return an object which has locations as keys and
  // as values an array which contains the names of the dogs
  // at that location

  const locationDogs = {}

  dogs.map(dog => {
    (!locationDogs[dog.location]) ? locationDogs[dog.location] = [dog.name] : locationDogs[dog.location].push(dog.name);
  })
  return locationDogs;
}

const fruitMarket = boxes => {
  // function receives an array of fruit box objects.
  // each fruit box object has a name and number of contents
  // for example
  // {
  //   contents: 'apples',
  //   number: 10
  // }

  // return an object that has contents as keys and the total for that
  // fruit in all boxes as values.
  const fruitTotal = {}

  boxes.map(box => {
    console.log(fruitTotal[box.contents]);
    (!fruitTotal[box.contents]) ? fruitTotal[box.contents] = box.number : fruitTotal[box.contents] += box.number;
  })
  return fruitTotal;

}

const averageFruitPerBox = boxes => {
  // function receives an array of fruit box objects.
  // each fruit box object has a contents and number property
  // for example
  // {
  //   contents: 'apples',
  //   number: 10
  // }

  // return an object that has contents as keys and the average number of
  // fruit per box for that fruit type as value

  const fruitAverage = {};

  // Create object with key fruit and value array of numbers of fruit
  boxes.map(box => {
    (!fruitAverage[box.contents]) ? fruitAverage[box.contents] = [box.number] : fruitAverage[box.contents].push(box.number);
  });
  const fruitNames = Object.keys(fruitAverage);

  const fruitResult = {};

  fruitNames.forEach(fruit => {
    let fruitTotal = fruitAverage[fruit].reduce((acc, item) => {
      acc += item;
      return acc
    }, 0);
    let resultAvg = fruitTotal / fruitAverage[fruit].length
    fruitResult[fruit] = resultAvg;
  })
  return fruitResult;
}

/* STRETCH GOALS */

const footballResultsWithObject = (teams, results) => { 
  // function receives two parameters:
  // 1. an object where which contains football team ids as keys and team names as values
  // 2. object which contains football team ids as keys and how many points the team has as values

  // take a look at the test for sample data

  // return an object has team names as keys and their number of points as values
 const resultObj = {};
 const teamIDS = Object.keys(teams);

 teamIDS.forEach(id => {
   resultObj[teams[id]] = results[id];
 })
 return resultObj;
 

}

const footballResultsWithArray = (teams, results) => {
  // function receives two parameters:
  // 1. array of football team objects
  // 2. object which contains football team ids as keys and how many points the team has as values

  // take a look at the test for sample data

  // return an object has team names as keys and their number of points as values
 const teamObj = {};
 const resultObj = {};
 const resultsIDS = Object.keys(results);
 teams.forEach(team => {
  teamObj[team.id] = team.name;
 });
 
 resultsIDS.forEach(id => {
   resultObj[teamObj[id]] = results[id];
 })

 return resultObj;
 


}

const stockMarket = prices => {
  // function receives an array of share prices produced during the day
  // each share price is an object which has a ticker and a price property.

  // { ticker: 'GOOG', price: 99}

  // return an object which has ticker as key another object as value,
  // the value object should have two properties: min and max which each contain
  // the min and max price achieved during the day

  // boxes.map(box => {
  //   (!fruitAverage[box.contents]) ? fruitAverage[box.contents] = [box.number] : fruitAverage[box.contents].push(box.number);
  // });

  const priceTicker = {};

  prices.map(index => {
    (!priceTicker[index.ticker]) ? priceTicker[index.ticker] = [index.price] : priceTicker[index.ticker].push(index.price);

  })
  console.log(priceTicker);

  const tickerKeys = Object.keys(priceTicker);

  tickerKeys.forEach

}

const calculateOrderPrice = (menu, order) => {
  // function receives two parameters: `menu` and `order`

  // menu has item names as keys and prices as values
  // order has item names as keys and quantities as values

  // calculate a total cost for each order using quantities from `order` and prices from `menu`
}


const calculateOrderPriceWithType = (menu, order, type) => {
  // function receives three parameters: `menu`, `order` and `type`

  // menu has item names as keys and prices as values
  // order has item names as keys and quantities as values
  // type is a string whose value is either `eatIn` or `takeAway`

  // calculate a total cost for each order using quantities from `order` and prices from `menu`
  // add 10% service charge for `eatIn` orders and a fixed delivery charge of 5 to `takeAway` orders

  // try to implement the service charge and delivery charge calculation without using if/else
  // hint: you can create an object with methods that calculate the charges and call the relevant one using
  // the order type provided
}

module.exports = {
  teaBagsLeft,
  shoppingList,
  footballResults,
  convertBookArrayToMap,
  dogCount,
  dogNames,
  fruitMarket,
  averageFruitPerBox,
  footballResultsWithObject,
  footballResultsWithArray,
  stockMarket,
  calculateOrderPrice,
  calculateOrderPriceWithType
}
