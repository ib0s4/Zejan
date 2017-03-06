import { ZejanPage } from './app.po';

describe('zejan App', function() {
  let page: ZejanPage;

  beforeEach(() => {
    page = new ZejanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
