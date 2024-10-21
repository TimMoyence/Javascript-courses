const div = document.getElementById('root');

const titleWrite = [
  'The best article',
  'The worst article',
  'The most interesting article',
] 

const imageName = [
  'homepage.webp',
  'homepage-2.webp',
  'homepage-1.webp',
]

const linkToImage = './assets/images/';




for (let i = 0; i < titleWrite.length; i++) {
  const article = document.createElement('article');
  const title = document.createElement('h2');
  const image = document.createElement('img');
  
  title.textContent = titleWrite[i];
  image.src = linkToImage + imageName[i];
  image.style.width = '100px';
  image.style.height = '100px';
  article.appendChild(title);
  article.appendChild(image);
  div.appendChild(article);
}
