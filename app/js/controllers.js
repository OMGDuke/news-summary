angular.module("newsSummaryApp")
  .controller("NewsSummaryController", ['ArticleService', 'ArticleFactory', function(ArticleService, ArticleFactory) {
    var self = this;
    self.today = Date.now();

    ArticleService.getAll().then(function(articles) {
      self.articles = articles;
    });

  }]);
