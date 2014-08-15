angular.module('templates-app', ['details/details.tpl.html', 'home/home.tpl.html', 'search/search.tpl.html']);

angular.module("details/details.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("details/details.tpl.html",
    "<div class=\"row\">\n" +
    "    <h1 class=\"page-header\">\n" +
    "        Details\n" +
    "        <small>{{name}}</small>\n" +
    "    </h1>\n" +
    "\n" +
    "    <p>{{fromService.title}}</p>\n" +
    "    <img src=\"{{fromService.imageLinks.thumbnail}}\">\n" +
    "    <p>{{fromService.description}}</p>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"jumbotron\">\n" +
    "  <h1>Non-Trivial AngularJS Made Easy</h1>\n" +
    "\n" +
    "  <p class=\"lead\">\n" +
    "    Everything you need to kickstart AngularJS projects: a best-practice\n" +
    "    directory structure, an intelligent build system, and the best web design\n" +
    "    libraries around.\n" +
    "  </p>\n" +
    "\n" +
    "  <ul class=\"list-inline social-buttons\">\n" +
    "\n" +
    "    <li plus-one></li>\n" +
    "  </ul> \n" +
    "  \n" +
    "  <div class=\"btn-group\">\n" +
    "    <a href=\"https://github.com/ngbp/ngbp#readme\" class=\"btn btn-large btn-default\">\n" +
    "      <i class=\"fa fa-book\"></i>\n" +
    "      Read the Docs\n" +
    "    </a>\n" +
    "    <a href=\"https://github.com/ngbp/ngbp\" class=\"btn btn-large btn-success\">\n" +
    "      <i class=\"fa fa-download\"></i>\n" +
    "      Download\n" +
    "    </a>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("search/search.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("search/search.tpl.html",
    "<div class=\"row\">\n" +
    "    <h1 class=\"page-header\">\n" +
    "        Google Books v5\n" +
    "    </h1>\n" +
    "\n" +
    "    <div class=\"container-fluid\" style=\"padding-left: 10px\">\n" +
    "        <h2 id=\"hdr\"></h2>\n" +
    "        <form id=\"myForm\" class=\"form-inline form-search\" name=\"myForm\">\n" +
    "            <label>Search for\n" +
    "                <input id=\"in\" type=\"text\" ng-model=\"searchTerm\" class=\"search-query input-medium\" />\n" +
    "            </label>\n" +
    "            <button class=\"btn btn-primary\" ng-click=\"doSearch()\"> Search</button>\n" +
    "        </form>\n" +
    "        <table id=\"resultsTbl\" class=\"table table-striped\" ng-show=\"bookResults.length\">\n" +
    "            <thead>\n" +
    "            <tr>\n" +
    "                <th>{{bookResults.length}} results</th>\n" +
    "            </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "            <tr ng-repeat=\"item in bookResults\">\n" +
    "                <td><a href=\"\" ng-click=\"changeView(item)\"><img ng-src=\"{{item.volumeInfo.imageLinks.smallThumbnail}}\" /></a></td>\n" +
    "                <td><a href=\"\" ng-click=\"changeView(item)\">{{item.volumeInfo.title}}</a><br />\n" +
    "                    By: {{item.volumeInfo.authors}}<br />\n" +
    "                    Published: {{item.volumeInfo.publisher}}, {{item.volumeInfo.publishedDate}}\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "");
}]);
