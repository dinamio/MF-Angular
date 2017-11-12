import { Lab2Page } from './app.po';

describe('lab2 App', () => {
  let page: Lab2Page;

  beforeEach(() => {
    page = new Lab2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
