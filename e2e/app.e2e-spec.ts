import { DemoAngularProject1Page } from './app.po';

describe('demo-angular-project1 App', () => {
  let page: DemoAngularProject1Page;

  beforeEach(() => {
    page = new DemoAngularProject1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
