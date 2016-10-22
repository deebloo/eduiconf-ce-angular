import { EduiconfCeAngularPage } from './app.po';

describe('eduiconf-ce-angular App', function() {
  let page: EduiconfCeAngularPage;

  beforeEach(() => {
    page = new EduiconfCeAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
