describe('ArticleService', function() {
  beforeEach(module('newsSummaryApp'));

  var ArticleService, httpBackend;
  var firstArticle = {
    fields:{headline: 'Free ice cream',
    body: 'Computer error leads to free ice cream.',
    thumbnail: '#'}
  };

  var secondArticle = {
    fields:{headline: 'The weather is hot',
    body: 'In other news cold weather is cold',
    thumbnail: '#'}
  };
  var articleData = {
    response: {
      results: [firstArticle, secondArticle]
    }
  };

  beforeEach(inject(function(_ArticleService_, _ArticleFactory_, $httpBackend) {
    ArticleService = _ArticleService_;
    ArticleFactory = _ArticleFactory_;
    httpBackend = $httpBackend;
  }));

  it('fetches a list of articles', function() {
    httpBackend.expectGET("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http%3A%2F%2Fcontent.guardianapis.com%2Fsearch%3Fpage-size%3D12%26type%3Darticle%26show-fields%3Dthumbnail%2Cheadline%2CtrailText%2Cbody").respond(articleData);

    var article1 = new ArticleFactory('Free ice cream', 'Computer error leads to free ice cream.', '#');
    var article2 = new ArticleFactory('The weather is hot', 'In other news cold weather is cold', '#');

    ArticleService.getAll().then(function(articles) {

      expect(articles).toEqual([article1, article2]);
    });
    httpBackend.flush();
  });
});
