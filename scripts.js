/* eslint linebreak-style: ["error", "windows"] */

const API_URL = 'https://apis.is/company?name=';

// helper function to create DOM elements
function el(type, text, className, className2) {
  let element = document.createElement(type);

  if (type === 'text') {
    element = document.createTextNode(text);
  }

  // add class if any
  if (className != null) {
    element.classList.add(className);
  }
  if (className2 != null) {
    element.classList.add(className2);
  }

  return element;
}

// remove all content inside parent node
function removeChildren(parentNode) {
  while (parentNode.firstChild) {
    parentNode.removeChild(parentNode.firstChild);
  }
}

// add waiting content while searching for data
function outputSearchingMessage() {
  const resultsDiv = document.querySelector('.results');
  removeChildren(resultsDiv);

  resultsDiv.classList.add('loading');

  const img = document.createElement('img');
  img.src = 'loading.gif';

  const waitingString = document.createTextNode('Leita að fyrirtækjum...');

  resultsDiv.appendChild(img);
  resultsDiv.appendChild(waitingString);
}

function outputMessage(message) {
  const resultsDiv = document.querySelector('.results');
  removeChildren(resultsDiv);
  const errorMessageNode = document.createTextNode(message);

  resultsDiv.appendChild(errorMessageNode);
}

// search and return data from apis.is if found
async function fetchData(companyName) {
  const url = API_URL + companyName;
  let data = null;
  outputSearchingMessage();

  const result = await fetch(url);

  if (result.status !== 200) {
    console.error('Non 200 status');
    outputMessage('Villa við að sækja gögn');
  } else {
    data = await result.json();
  }

  return data;
}

// output json data to page
function outputResult(data) {
  const resultsDiv = document.querySelector('.results');

  resultsDiv.classList.remove('loading');
  removeChildren(resultsDiv);

  for (let n = 0; n < data.results.length; n += 1) {
    const {
      name,
      sn,
      address,
      active,
    } = data.results[n];

    const div = el('div');
    div.classList.add('company');
    if (active === 0) {
      div.classList.add('company--inactive');
    } else {
      div.classList.add('company--active');
    }
    resultsDiv.appendChild(div);

    const table = el('table');
    div.append(table);

    // Len
    const tr1 = el('tr', null, 'dl');
    const td11 = el('td', null, 'dt');
    const td12 = el('td', null, 'dd');

    td11.appendChild(el('text', 'Lén'));
    td12.appendChild(el('text', name));

    tr1.appendChild(td11);
    tr1.appendChild(td12);

    table.appendChild(tr1);

    // Kennitala
    const tr2 = el('tr', null, 'dl');
    const td21 = el('td', null, 'dt');
    const td22 = el('td', null, 'dd');

    td21.appendChild(el('text', 'Kennitala'));
    td22.appendChild(el('text', sn));

    tr2.appendChild(td21);
    tr2.appendChild(td22);

    table.appendChild(tr2);

    // Heimilisfang
    if (active === 1) {
      const tr3 = el('tr', null, 'dl');
      const td31 = el('td', null, 'dt');
      const td32 = el('td', null, 'dd');

      td31.appendChild(el('text', 'Heimilisfang'));
      td32.appendChild(el('text', address));

      tr3.appendChild(td31);
      tr3.appendChild(td32);

      table.appendChild(tr3);
    }
  }
}

// search for data from api.is
function search(e) {
  e.preventDefault();

  const searchText = document.querySelector('input').value;

  if (searchText == null || searchText === '') {
    outputMessage('Lén verður að vera strengur');
  } else {
    fetchData(searchText).then((data) => {
      if (data.results.length === 0) {
        outputMessage('Ekkert fyrirtæki fannst fyrir leitarstreng');
      } else if (data !== null) {
        console.log('data found', data);
        outputResult(data);
      } else {
        console.log('no data found');
        outputMessage('Villa við að sækja gögn');
      }
    });
  }
}

/**
 * Leit að fyrirtækjum á Íslandi gegnum apis.is
 */
const program = (() => {
  function init(companies) {
    outputResult(companies);
  }

  return {
    init,
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form').addEventListener('submit', search);
});
