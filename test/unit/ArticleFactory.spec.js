describe('ArticleFactory', function() {
  beforeEach(module('newsSummaryApp'));

  var article;

  beforeEach(inject(function(ArticleFactory) {
    article = new ArticleFactory('Free ice cream', 'Computer error leads to free ice cream.', '#');
  }));

  it('stores the headline', function() {
    expect(article.headline).toEqual('Free ice cream');
  });

  it('stores the body', function() {
    expect(article.story).toEqual('Computer error leads to free ice cream.');
  });

  it('stores the url', function() {
    expect(article.imageUrl).toEqual('#');
  });
});
