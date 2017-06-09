import { MovieListsPage } from './app.po';

describe('movie-lists App', () => {
  let page: MovieListsPage;

  beforeEach(() => {
    page = new MovieListsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
