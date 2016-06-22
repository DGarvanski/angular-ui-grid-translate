(function () {
    angular.module('angular-ui-grid-translate').run(function ($templateCache) {
        $templateCache.put('ui-grid/pagination',
            "<div role=\"contentinfo\" class=\"ui-grid-pager-panel\" ui-grid-pager ng-show=\"grid.options.enablePaginationControls\">" +
            "<div role=\"navigation\" class=\"ui-grid-pager-container\">" +
            "<div role=\"menubar\" class=\"ui-grid-pager-control\">" +
            "<button type=\"button\" role=\"menuitem\" class=\"ui-grid-pager-first\" title=\"{{'pagination_firstPage' | translate}}\" ui-grid-one-bind-aria-label=\"aria.pageToFirst\" ng-click=\"pageFirstPageClick()\" ng-disabled=\"cantPageBackward()\">" +
            "<div class=\"first-triangle\"><div class=\"first-bar\"></div></div></button> <button type=\"button\" role=\"menuitem\" class=\"ui-grid-pager-previous\" title=\"{{'pagination_pageBack' | translate}}\" ui-grid-one-bind-aria-label=\"aria.pageBack\" ng-click=\"pagePreviousPageClick()\" ng-disabled=\"cantPageBackward()\">" +
            "<div class=\"first-triangle prev-triangle\"></div></button> " +
            "<input readonly type=\"text\" class=\"ui-grid-pager-control-input\" ng-model=\"grid.options.paginationCurrentPage\" min=\"1\" max=\"{{ paginationApi.getTotalPages() }}\" required> " +
            "<span class=\"ui-grid-pager-max-pages-number\" ng-show=\"paginationApi.getTotalPages() > 0\">" +
            "<span class=\"default-cursor\"<abbr>/</abbr> {{ paginationApi.getTotalPages() }}</span> " +
            "<button type=\"button\" role=\"menuitem\" class=\"ui-grid-pager-next\" title=\"{{'pagination_nextPage' | translate}}\" ui-grid-one-bind-aria-label=\"aria.pageForward\" ng-click=\"pageNextPageClick()\" ng-disabled=\"cantPageForward()\"><div class=\"last-triangle next-triangle\"></div></button> " +
            "<button type=\"button\" role=\"menuitem\" class=\"ui-grid-pager-last\" title=\"{{'pagination_lastPage' | translate}}\" ui-grid-one-bind-aria-label=\"aria.pageToLast\" ng-click=\"pageLastPageClick()\" ng-disabled=\"cantPageToLast()\"><div class=\"last-triangle\"><div class=\"last-bar\"></div></div></button></div><div class=\"ui-grid-pager-row-count-picker\" ng-if=\"grid.options.paginationPageSizes.length > 1\"><select class=\"select-box\" ui-grid-one-bind-aria-labelledby-grid=\"'items-per-page-label'\" ng-model=\"grid.options.paginationPageSize\" ng-options=\"o as o for o in grid.options.paginationPageSizes\"></select><span ui-grid-one-bind-id-grid=\"'items-per-page-label'\" class=\"ui-grid-pager-row-count-label\"><span class=\"default-cursor\">&nbsp;{{'pagination_itemsPerPage' | translate}}</span></div><span ng-if=\"grid.options.paginationPageSizes.length <= 1\" class=\"ui-grid-pager-row-count-label\">{{grid.options.paginationPageSize}}&nbsp;{{sizesLabel}}</span></div><div class=\"ui-grid-pager-count-container\"><div class=\"ui-grid-pager-count\"><span ng-show=\"grid.options.totalItems > 0\"><span class=\"default-cursor\"> {{showingLow}} " +
            "<abbr>-</abbr> {{showingHigh}} {{'pagination_of' | translate}} {{grid.options.totalItems}} {{'pagination_items' | translate}}</span></div></div></div>"
        );
        $templateCache.put('ui-grid/ui-grid-grid-footer',
            "<div class=\"ui-grid-footer-info ui-grid-grid-footer\">" +
            "<span>{{'footer_totalItems' | translate}} {{grid.rows.length}}</span> " +
            "<span ng-if=\"grid.renderContainers.body.visibleRowCache.length !== grid.rows.length\" class=\"ngLabel\">({{\"footer_showingItems\" | translate}} {{grid.renderContainers.body.visibleRowCache.length}})</span></div>"
        );
        $templateCache.put('ui-grid/uiGridColumnMenu',
            "<div class=\"ui-grid-column-menu\"><div ui-grid-menu menu-items=\"menuItems\"><!-- <div class=\"ui-grid-column-menu\">\n" +
            "    <div class=\"inner\" ng-show=\"menuShown\">\n" +
            "      <ul>\n" +
            "        <div ng-show=\"grid.options.enableSorting\">\n" +
            "          <li ng-click=\"sortColumn($event, asc)\" ng-class=\"{ 'selected' : col.sort.direction == asc }\"><i class=\"ui-grid-icon-sort-alt-up\"></i> {{sort_ascending | translate}}</li>\n" +
            "          <li ng-click=\"sortColumn($event, desc)\" ng-class=\"{ 'selected' : col.sort.direction == desc }\"><i class=\"ui-grid-icon-sort-alt-down\"></i> {{sort_descending | translate}}</li>\n" +
            "          <li ng-show=\"col.sort.direction\" ng-click=\"unsortColumn()\"><i class=\"ui-grid-icon-cancel\"></i> {{sort_remove | translate}}</li>\n" +
            "        </div>\n" +
            "      </ul>\n" +
            "    </div>\n" +
            "  </div> --></div></div>"
        );
        $templateCache.put('ui-grid/gridFooterSelectedItems',
            "<span ng-if=\"grid.selection.selectedCount !== 0 && grid.options.enableFooterTotalSelected\">({{\"footer_selectedItems\" | translate}} {{grid.selection.selectedCount}})</span>"
        );
    }).controller("uigt.LanguageController", function ($translate, $scope) {
        var languageController = $scope;
        languageController.changeTo = function (lang) {
            $translate.use(lang);
        };
    }) .config(function ($translateProvider) {
        $translateProvider.translations('bg', {
            pagination_firstPage: "Първа страница",
            pagination_pageBack: "Предишна страница",
            pagination_nextPage: "Следваща страница",
            pagination_lastPage: "Последна страница",
            pagination_itemsPerPage: "обекта на страница",
            pagination_of: "от",
            pagination_items: "обекта",
            /* End Pagination Translations */

            footer_totalItems: "Брой обекти:",
            footer_showingItems: "Показване на обекти:",
            footer_selectedItems: "Избрани:"
        });
        $translateProvider.translations('bg_BG', {
            pagination_firstPage: "Първа страница",
            pagination_pageBack: "Предишна страница",
            pagination_nextPage: "Следваща страница",
            pagination_lastPage: "Последна страница",
            pagination_itemsPerPage: "обекта на страница",
            pagination_of: "от",
            pagination_items: "обекта",
            /* End Pagination Translations */

            footer_totalItems: "Брой обекти:",
            footer_showingItems: "Показване на обекти:",
            footer_selectedItems: "Избрани:"
            /*End Footer Translations*/
        });
        $translateProvider.translations('en', {
            pagination_firstPage: "First page",
            pagination_pageBack: "Previous page",
            pagination_nextPage: "Next page",
            pagination_lastPage: "Last page",
            pagination_itemsPerPage: "items per page",
            pagination_of: "of",
            pagination_items: "items",
            /* End Pagination Translations */

            footer_totalItems: "Total items:",
            footer_showingItems: "Showing items:",
            footer_selectedItems: "Selected:"
            /*End Footer Translations*/

        });
        $translateProvider.translations('en_US', {
            pagination_firstPage: "First page",
            pagination_pageBack: "Previous page",
            pagination_nextPage: "Next page",
            pagination_lastPage: "Last page",
            pagination_itemsPerPage: "items per page",
            pagination_of: "of",
            pagination_items: "items",
            /* End Pagination Translations */

            footer_totalItems: "Total items:",
            footer_showingItems: "Showing items:",
            footer_selectedItems: "Selected:"
            /*End Footer Translations*/

        });
        $translateProvider.translations('en_GB', {
            pagination_firstPage: "First page",
            pagination_pageBack: "Previous page",
            pagination_nextPage: "Next page",
            pagination_lastPage: "Last page",
            pagination_itemsPerPage: "items per page",
            pagination_of: "of",
            pagination_items: "items",
            /* End Pagination Translations */

            footer_totalItems: "Total items:",
            footer_showingItems: "Showing items:",
            footer_selectedItems: "Selected:"
            /*End Footer Translations*/

        });
        $translateProvider.preferredLanguage('en' | 'en_US');
        //Enable escaping of HTML. Improves security, removes console warning.
        $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
    });
})();
