import { LbackClientPage } from './app.po';

describe('lback-client App', function() {
  let page: LbackClientPage;

  beforeEach(() => {
    page = new LbackClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
