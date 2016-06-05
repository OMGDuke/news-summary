describe("app", function() {

  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("News Summary");
  });

  it('shows todays date in the heading', function() {
    var todayDate = "Jun 5, 2016";
    jasmine.clock().mockDate(todayDate);
    expect($('#title').getText()).toMatch('Todays Headlines for ' + todayDate);
  });

  it('displays all the headlines', function() {
    browser.get('/');
    var article = $$('#articles').first().getText();
    expect(article).toMatch('Free ice cream');
  });
});
