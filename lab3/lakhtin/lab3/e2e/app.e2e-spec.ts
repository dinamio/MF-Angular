import { Lab3Page } from './app.po';

describe('lab3 App', () => {
  let page: Lab3Page;

  beforeEach(() => {
    page = new Lab3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
