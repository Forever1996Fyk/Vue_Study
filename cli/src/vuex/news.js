var news = {
  state: {
    news: [
      {id: 1, title: 'test1'},
      {id: 2, title: 'test2'}
    ]
  },
  getters: {
    getAllNews(state) {
      return state.news
    }

  }
};

export default news;
