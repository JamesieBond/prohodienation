import { ProhodiePage } from './app.po';

describe('prohodie App', function() {
  let page: ProhodiePage;

  beforeEach(() => {
    page = new ProhodiePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
