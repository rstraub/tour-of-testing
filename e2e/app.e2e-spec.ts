import { TourOfTestingPage } from './app.po';

describe('tour-of-testing App', () => {
  let page: TourOfTestingPage;

  beforeEach(() => {
    page = new TourOfTestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
