describe('ArticleService', function() {
  beforeEach(module('newsSummaryApp'));

  var ArticleService, httpBackend;

  var articleData = [{
          headline: 'Free ice cream',
          story: 'Computer error leads to free ice cream.',
          imageUrl: '#'
        },
        {
          headline: 'The weather is hot',
          story: 'In other news cold weather is cold',
          imageUrl: '#'
        }];

  beforeEach(inject(function(_ArticleService_, _ArticleFactory_, $httpBackend) {
    ArticleService = _ArticleService_;
    ArticleFactory = _ArticleFactory_;
    httpBackend = $httpBackend;
  }));

  it('fetches a list of articles', function() {
    httpBackend.expectGET("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?page-size=12&type=article&show-fields=thumbnail,headline,trailText,body").respond(articleData);

    var article1 = new ArticleFactory('Free ice cream', 'Computer error leads to free ice cream.', '#');
    var article2 = new ArticleFactory('The weather is hot', 'In other news cold weather is cold', '#');

    ArticleService.getAll().then(function(articles) {
      expect(articles).toEqual([article1, article2]);
    });
    httpBackend.flush();
  });
});
