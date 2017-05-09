import { NgFormsTeradataPage } from './app.po';

describe('ng-forms-teradata App', () => {
  let page: NgFormsTeradataPage;

  beforeEach(() => {
    page = new NgFormsTeradataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
