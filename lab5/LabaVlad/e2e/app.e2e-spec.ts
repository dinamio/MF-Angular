import { Lab4Page } from './app.po';

describe('lab4 App', () => {
  let page: Lab4Page;

  beforeEach(() => {
    page = new Lab4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
