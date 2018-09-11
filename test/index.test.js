const {
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
} = require('../src');

test('tea bags', () => {

  const teaBags = {
    'earlGrey': 12,
    'rooibos': 23,
    'matcha': 8,
    'englishBreakfast': 17
  };
  const output = teaBagsLeft(teaBags);

  expect(output).toEqual( 60 );
});

test('Shopping list', () => {
  const previousShoppingList = {
    'washing up liquid': 2,
    toothpaste: 1,
    bacon: 3,
    'orange juice': 2
  };

  const newShoppingList = {
    'washing up liquid': 1,
    bacon: 1,
    milk: 2
  };

  const output = shoppingList(previousShoppingList, newShoppingList);

  expect(output).toEqual({
    'washing up liquid': 1,
    toothpaste: 1,
    bacon: 1,
    'orange juice': 2,
    milk: 2
  });

  expect(previousShoppingList).toEqual({
    'washing up liquid': 2,
    toothpaste: 1,
    bacon: 3,
    'orange juice': 2
  });

  expect(newShoppingList).toEqual({
    'washing up liquid': 1,
    bacon: 1,
    milk: 2
  });
});

test('Football results', () => {
  const results = {
    liverpool: 10,
    arsenal: 7,
    newcastle: 6,
    tottenham: 3,
    chelsea: 2
  }

  const output = footballResults(results);

  expect(output).toEqual([
    'liverpool has 10 points',
    'arsenal has 7 points',
    'newcastle has 6 points',
    'tottenham has 3 points',
    'chelsea has 2 points',
  ]);
});

test('Convert array to map', () => {
  const books = [{
      id:1,
      author: "Alexander Dumas",
      title: "The count of Monte Christo",
      year: 1884
  }, {
      id: 2,
      author: "Douglas Crockford",
      title: "JavaScript: The Good Parts",
      year: 2008
  }, {
      id: 3,
      author: "JK Rowling",
      title: "Harry Potter and the Philosopher's Stone",
      year: 1997
  }, {
      id:4,
      author: "Arthur Conan Doyle",
      title: "The Adventures of Sherlock Holmes",
      year: 1892
  }]

  const output = convertBookArrayToMap(books);

  expect(output).toEqual({
    1: {
        id:1,
        author: "Alexander Dumas",
        title: "The count of Monte Christo",
        year: 1884
    },
    2: {
        id: 2,
        author: "Douglas Crockford",
        title: "JavaScript: The Good Parts",
        year: 2008
    },
    3: {
        id: 3,
        author: "JK Rowling",
        title: "Harry Potter and the Philosopher's Stone",
        year: 1997
    },
    4: {
        id:4,
        author: "Arthur Conan Doyle",
        title: "The Adventures of Sherlock Holmes",
        year: 1892
    }
  })
});

test('dog count', () => {
  const dogs = [
    {
        name: 'ruby',
        location: 'liverpool'
    },
    {
        name: 'max',
        location: 'manchester'
    },
    {
        name: 'woofie',
        location: 'liverpool'
    },
    {
        name: 'snoopy',
        location: 'leeds'
    },
    {
        name: 'wellard',
        location: 'manchester'
    }
  ];

  const output = dogCount(dogs);

  expect(output).toEqual({
    liverpool: 2,
    manchester: 2,
    leeds: 1
  })
});

test('dog names', () => {
  const dogs = [
    {
        name: 'ruby',
        location: 'liverpool'
    },
    {
        name: 'max',
        location: 'manchester'
    },
    {
        name: 'woofie',
        location: 'liverpool'
    },
    {
        name: 'snoopy',
        location: 'leeds'
    },
    {
        name: 'wellard',
        location: 'manchester'
    }
  ];

  const output = dogNames(dogs);

  expect(output).toEqual({
    liverpool: ['ruby', 'woofie'],
    manchester: ['max', 'wellard'],
    leeds: ['snoopy']
  })
});

test('fruit market', () => {
  const boxes = [
    {
        contents: 'apples',
        number: 10
    },
    {
        contents: 'oranges',
        number: 8
    },
    {
        contents: 'apples',
        number: 26
    },
    {
        contents: 'pears',
        number: 3
    },
    {
        contents: 'oranges',
        number: 22
    }
  ];

  const output = fruitMarket(boxes);
  expect(output).toEqual({
    apples: 36,
    oranges: 30,
    pears: 3
  });
});

test('averageFruitPerBox', () => {
  const boxes = [
    {
        contents: 'apples',
        number: 10
    },
    {
        contents: 'oranges',
        number: 8
    },
    {
        contents: 'apples',
        number: 26
    },
    {
        contents: 'pears',
        number: 3
    },
    {
        contents: 'oranges',
        number: 22
    }
  ];

  const output = averageFruitPerBox(boxes);
  expect(output).toEqual({
    apples: 18,
    oranges: 15,
    pears: 3
  });
});

test('Football results with object', () => {
  const teams = {
    1: 'Liverpool',
    2: 'Arsenal',
    3: 'Newcastle',
    4: 'Tottenham',
    5: 'Chelsea'
  };

  const results = {
    5: 11,
    2: 8,
    3: 5,
    1: 3,
    4: 3
  };

  const output = footballResultsWithObject(teams, results);

  expect(output).toEqual({
    Chelsea: 11,
    Arsenal: 8,
    Newcastle: 5,
    Liverpool: 3,
    Tottenham: 3
  })
});

test('Football results with array', () => {
  const teams = [{
    id: 1,
    name: 'Liverpool'
  }, {
    id: 2,
    name: 'Arsenal'
  }, {
    id: 3,
    name: 'Newcastle'
  }, {
    id: 4,
    name: 'Tottenham'
  }, {
    id: 5,
    name: 'Chelsea'
  }];

  const results = {
    5: 11,
    2: 8,
    3: 5,
    1: 3,
    4: 3
  };

  const output = footballResultsWithArray(teams, results);

  expect(output).toEqual({
    Chelsea: 11,
    Arsenal: 8,
    Newcastle: 5,
    Liverpool: 3,
    Tottenham: 3
  })
});

test.only('Stock market', () => {
  const prices = [
    {
      ticker: 'GOOG',
      price: 99
    },
    {
      ticker: 'AMZN',
      price: 201
    },
    {
      ticker: 'AMZN',
      price: 198
    },
    {
      ticker: 'FB',
      price: 301
    },
    {
      ticker: 'FB',
      price: 311
    },
    {
      ticker: 'GOOG',
      price: 103
    },
    {
      ticker: 'FB',
      price: 299
    },
    {
      ticker: 'GOOG',
      price: 97
    },
    {
      ticker: 'AMZN',
      price: 200
    }
  ];

  const output = stockMarket(prices);

  expect(output).toEqual({
    GOOG: {
      min: 97,
      max: 103
    },
    AMZN: {
      min: 198,
      max: 201
    },
    FB: {
      min: 299,
      max: 311
    }
  });
});

test('calculate order price', () => {
  const menu = {
    hotdog: 8,
    burger: 10,
    fries: 3,
    cheeseCake: 5,
    macNCheese: 4
  };

  const order = {
    burger: 2,
    fries: 3
  };

  const output = calculateOrderPrice(menu, order);
  expect(output).toEqual(29);
});

test('calculate order price with type - eat in', () => {
  const menu = {
    hotdog: 8,
    burger: 10,
    fries: 3,
    cheeseCake: 5,
    macNCheese: 4
  };

  const order = {
    burger: 2,
    cheeseCake: 4
  };

  const output = calculateOrderPriceWithType(menu, order, 'eatIn');
  expect(output).toEqual(44);
});

test('calculate order price with type - take away', () => {
  const menu = {
    hotdog: 8,
    burger: 10,
    fries: 3,
    cheeseCake: 5,
    macNCheese: 4
  };

  const order = {
    hotdog: 3,
    macNCheese: 4
  };

  const output = calculateOrderPriceWithType(menu, order, 'takeAway');
  expect(output).toEqual(45);
});
