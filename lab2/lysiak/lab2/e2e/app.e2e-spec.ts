import { Untitled9Page } from './app.po';

describe('untitled9 App', () => {
  let page: Untitled9Page;

  beforeEach(() => {
    page = new Untitled9Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
