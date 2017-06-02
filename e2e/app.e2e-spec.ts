import { AngularCliWallabyNgxMalihuScrollbarPage } from './app.po';

describe('angular-cli-wallaby-ngx-malihu-scrollbar App', () => {
  let page: AngularCliWallabyNgxMalihuScrollbarPage;

  beforeEach(() => {
    page = new AngularCliWallabyNgxMalihuScrollbarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
