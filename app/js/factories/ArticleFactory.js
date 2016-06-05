newsSummaryApp.factory('ArticleFactory', function() {
  var Article = function(headline, story, imageUrl) {
    this.headline = headline;
    this.story = story;
    this.imageUrl = imageUrl || 'assets/img/404.jpg';
  };

  return Article;
});
