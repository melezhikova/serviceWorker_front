import News from './news';

(async () => {
  try {
    if (navigator.serviceWorker) {
      await navigator.serviceWorker.register(
        'src/service.worker.js',
      );
      console.log('sw registered');
    }
  } catch (e) {
    console.log(e);
  }

  setTimeout(async () => {
    try {
      const response = await fetch('https://service-worker-back.herokuapp.com/?method=allNews');
      const data = await response.json().then((news) => {
        if (news) {
          try {
            const container = document.querySelector('.news-container');
            container.classList.remove('picture');
            container.textContent = 'Новости мира моды';
            Array.from(news).forEach((element) => {
              const item = new News(element);
              console.log(item);
              item.addNewsToDOM();
            });
          } catch (e) {
            console.error(e);
          }
        }
      });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }, 5000);
})();
