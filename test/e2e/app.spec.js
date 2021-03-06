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
    var article = $$('#articles').first().isPresent();
    expect(article).toBe(true);
  });

  it('displays an image for the article', function() {
    browser.get('/');
    expect(element(by.id('thumb')).isPresent()).toBe(true);
  });

  it('clicking a headline takes you to the article summary', function() {
    browser.get('/');
    $$('#articles').first().click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/article');
  });
});
