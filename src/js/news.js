import getTime from './time';

export default class News {
  constructor(object) {
    this.image = object.image;
    this.time = object.created;
    this.name = object.name;
    this.description = object.description;
  }

  addNewsToDOM() {
    const container = document.querySelector('.news-container');
    const box = document.createElement('div');
    box.classList.add('box');
    const header = document.createElement('div');
    header.classList.add('header');
    const time = document.createElement('div');
    time.classList.add('time');
    time.textContent = getTime(this.time);
    const name = document.createElement('div');
    name.classList.add('name');
    name.textContent = this.name;
    const newsBody = document.createElement('div');
    newsBody.classList.add('newsBody');
    const newsImage = document.createElement('img');
    newsImage.classList.add('newsImage');
    newsImage.src = `${this.image}`;
    const newsText = document.createElement('div');
    newsText.classList.add('newsText');
    newsText.textContent = this.description;

    header.append(time);
    header.append(name);
    newsBody.append(newsImage);
    newsBody.append(newsText);
    box.append(header);
    box.append(newsBody);
    container.append(box);
  }
}
