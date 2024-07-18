const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = [
  'Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 
  'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 
  'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 
  'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 
  'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 
  'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 
  'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 
  'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 
  'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'
];

const search = strFruit => {
  const lowerStr = strFruit.toLowerCase();
  return fruits.filter(fruit => fruit.toLowerCase().includes(lowerStr));
};

const searchHandler = e => {
  const inputVal = e.target.value;
  const results = search(inputVal);
  showSuggestions(results, inputVal);
};

const showSuggestions = (results, inputVal) => {
  suggestions.innerHTML = '';
  if (results.length > 0) {
    results.forEach(result => {
      const li = document.createElement('li');
      li.textContent = result;
      suggestions.appendChild(li);
    });
  }
};

const useSuggestion = e => {
  if (e.target.tagName === 'LI') {
    input.value = e.target.textContent;
    suggestions.innerHTML = '';
  }
};

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
