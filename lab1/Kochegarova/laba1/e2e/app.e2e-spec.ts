import { Laba1Page } from './app.po';

describe('laba1 App', () => {
  let page: Laba1Page;

  beforeEach(() => {
    page = new Laba1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
