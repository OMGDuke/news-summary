newsSummaryApp.service('ArticleService', ['$http', 'ArticleFactory', function($http, ArticleFactory) {
  var self = this;

  var articles = [];

  self.getAll = function() {
    var params = 'http://content.guardianapis.com/search?page-size=12&type=article&show-fields=thumbnail,headline,trailText,body';
    return $http.get('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=' + encodeURIComponent(params))
    .then(_handleResponseFromApi);
  };

  function _handleResponseFromApi(response) {
    return response.data.response.results.map(function(articleData) {
      return new ArticleFactory(articleData.fields.headline, articleData.fields.body, articleData.fields.thumbnail);
    });
  }
}]);
