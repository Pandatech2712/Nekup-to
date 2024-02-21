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

// Uložení karty s prvním produktem do proměnné
const firstProductCard = document.querySelector('.card:first-of-type');

// Přidání třídy border-primary pro zvýraznění prvního produktu
firstProductCard.classList.add('border-primary');

// Uložení tlačítka na druhé kartě do proměnné
const secondCardButton = document.querySelector('.card:nth-of-type(2) .btn');

// Odebrání třídy btn-primary z tlačítka
secondCardButton.classList.remove('btn-primary');

// Uložení elementu s třídou card-title posledního produktu do proměnné
const lastProductTitle = document.querySelector('.card:last-of-type .card-title');

// Přepínání třídy text-center na elementu card-title posledního produktu
lastProductTitle.classList.toggle('text-center');
