import { Untitled7Page } from './app.po';

describe('untitled7 App', () => {
  let page: Untitled7Page;

  beforeEach(() => {
    page = new Untitled7Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
