import { StoreFontPage } from './app.po';

describe('store-font App', function() {
  let page: StoreFontPage;

  beforeEach(() => {
    page = new StoreFontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
