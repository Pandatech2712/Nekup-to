const product1 = {
  image: 'images/destniklobouk.jpg',
  name: 'Deštníklobouk',
  description: 'Vynikající pokud si často zapomínáte deštník a nechcete být nikdy překvapeni nečekanou přeháňkou.',
};

const product2 = {
  image: 'images/slepickabelka.jpg',
  name: 'Slepičkabelka',
  description: 'Nejlepší způsob jak zaujmout neotřelou módou v ulíčkách kolem Staroměstkého náměstí.',
};

const product3 = {
  image: 'images/anatoplavky.jpg',
  name: 'Anatoplavky',
  description: 'Aby muži na rozpálených plážích kromě vašeho těla obdivovali také vaše nitro.',
};

function updateProductCard(product, cardIndex) {
  const card = document.querySelector(`.card:nth-of-type(${cardIndex})`);
  const imageElement = card.querySelector('.card-img-top');
  const nameElement = card.querySelector('.card-title');
  const descriptionElement = card.querySelector('.card-text');

  imageElement.src = product.image;
  nameElement.textContent = product.name;
  descriptionElement.textContent = product.description;
}

// Aktualizace karet pro jednotlivé produkty
updateProductCard(product1, 1);
updateProductCard(product2, 2);
updateProductCard(product3, 3);
