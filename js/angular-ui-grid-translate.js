(function () {
    'use strict';

    angular
        .module('angular-ui-grid-translate', []);
})();

(function () {
    angular.module('angular-ui-grid-translate').run(function ($templateCache) {
        //Templates start
        //ToDo: add all templates
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
        /*$templateCache.put('ui-grid/uiGridColumnMenu',
         "<div class=\"ui-grid-column-menu\"><div ui-grid-menu menu-items=\"menuItems\"><div class=\"ui-grid-column-menu\"> " +
         "    <div class=\"inner\" ng-show=\"menuShown\"> " +
         "      <ul> " +
         "        <div ng-show=\"grid.options.enableSorting\"> " +
         "          <li ng-click=\"sortColumn($event, asc)\" ng-class=\"{ 'selected' : col.sort.direction == asc }\"><i class=\"ui-grid-icon-sort-alt-up\"></i> {{sort_ascending | translate}}</li> " +
         "          <li ng-click=\"sortColumn($event, desc)\" ng-class=\"{ 'selected' : col.sort.direction == desc }\"><i class=\"ui-grid-icon-sort-alt-down\"></i> {{sort_descending | translate}}</li> " +
         "          <li ng-show=\"col.sort.direction\" ng-click=\"unsortColumn()\"><i class=\"ui-grid-icon-cancel\"></i> {{sort_remove | translate}}</li> " +
         "        </div> " +
         "      </ul>" +
         "    </div>" +
         "  </div></div></div>"
         );*/
        $templateCache.put('ui-grid/gridFooterSelectedItems',
            "<span ng-if=\"grid.selection.selectedCount !== 0 && grid.options.enableFooterTotalSelected\">({{\"footer_selectedItems\" | translate}} {{grid.selection.selectedCount}})</span>"
        );
        //Templates end

        //Optional controller. Should it be removed or left as an option?
    }).controller("uigt.LanguageController", function ($translate, $scope) {
        var languageController = $scope;
        languageController.changeTo = function (lang) {
            $translate.use(lang);
        };
    }).config(function ($translateProvider) {
        //Translations start
        //ToDo: move translations from ui-grid files to here. Add more(?)
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
            footer_selectedItems: "Избрани:",
            /*End Footer Translations*/

            sort_ascending: "Възходящ ред",
            sort_descending: "Низходящ ред",
            sort_remove: "Премахване на сортирането"
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
            footer_selectedItems: "Избрани:",
            /*End Footer Translations*/

            sort_ascending: "Възходящ ред",
            sort_descending: "Низходящ ред",
            sort_remove: "Премахване на сортирането"
            /*End column menu translations*/
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
            footer_selectedItems: "Selected:",
            /*End Footer Translations*/

            sort_ascending: "Sort ascending",
            sort_descending: "Sort descending",
            sort_remove: "Remove sort"
            /*End column menu translations*/

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
            footer_selectedItems: "Selected:",
            /*End Footer Translations*/

            sort_ascending: "Sort ascending",
            sort_descending: "Sort descending",
            sort_remove: "Remove sort"
            /*End column menu translations*/
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
            footer_selectedItems: "Selected:",
            /*End Footer Translations*/

            sort_ascending: "Sort ascending",
            sort_descending: "Sort descending",
            sort_remove: "Remove sort"
            /*End column menu translations*/

        });

        $translateProvider.translations('es', {
            pagination_firstPage: "Primera Página",
            pagination_pageBack: "Página Anterior",
            pagination_nextPage: "Página Siguiente",
            pagination_lastPage: "Última Página",
            pagination_itemsPerPage: "registros por página",
            pagination_of: "de",
            pagination_items: "registros",
            /* End Pagination Translations */

            footer_totalItems: "Artículos Totales:",
            footer_showingItems: "Artículos Mostrados:",
            footer_selectedItems: "Artículos Seleccionados:",
            /*End Footer Translations*/

            sort_ascending: "Orden Ascendente",
            sort_descending: "Orden Descendente",
            sort_remove: "Sin Ordenar"
            /*End column menu translations*/

        });

        $translateProvider.translations('es_ES', {
            pagination_firstPage: "Primera Página",
            pagination_pageBack: "Página Anterior",
            pagination_nextPage: "Página Siguiente",
            pagination_lastPage: "Última Página",
            pagination_itemsPerPage: "registros por página",
            pagination_of: "de",
            pagination_items: "registros",
            /* End Pagination Translations */

            footer_totalItems: "Artículos Totales:",
            footer_showingItems: "Artículos Mostrados:",
            footer_selectedItems: "Artículos Seleccionados:",
            /*End Footer Translations*/

            sort_ascending: "Orden Ascendente",
            sort_descending: "Orden Descendente",
            sort_remove: "Sin Ordenar"
            /*End column menu translations*/

        });

        $translateProvider.translations('fr', {
            pagination_firstPage: "Première page",
            pagination_pageBack: "Page précédente",
            pagination_nextPage: "Page Suivante",
            pagination_lastPage: "Dernière page",
            pagination_itemsPerPage: "éléments par page",
            pagination_of: "sur",
            pagination_items: "éléments",
            /* End Pagination Translations */

            footer_totalItems: "Nombre total d\'éléments:",
            footer_showingItems: "Affichage des éléments:",
            footer_selectedItems: "Éléments sélectionnés:",
            /*End Footer Translations*/

            sort_ascending: "Trier par ordre croissant",
            sort_descending: "Trier par ordre décroissant",
            sort_remove: "Enlever le tri"
            /*End column menu translations*/

        });

        $translateProvider.translations('fr_FR', {
            pagination_firstPage: "Première page",
            pagination_pageBack: "Page précédente",
            pagination_nextPage: "Page Suivante",
            pagination_lastPage: "Dernière page",
            pagination_itemsPerPage: "éléments par page",
            pagination_of: "sur",
            pagination_items: "éléments",
            /* End Pagination Translations */

            footer_totalItems: "Nombre total d\'éléments:",
            footer_showingItems: "Affichage des éléments:",
            footer_selectedItems: "Éléments sélectionnés:",
            /*End Footer Translations*/

            sort_ascending: "Trier par ordre croissant",
            sort_descending: "Trier par ordre décroissant",
            sort_remove: "Enlever le tri"
            /*End column menu translations*/

        });

        $translateProvider.translations('it', {
            pagination_firstPage: "Prima",
            pagination_pageBack: "Precedente",
            pagination_nextPage: "Prossima",
            pagination_lastPage: "Ultima",
            pagination_itemsPerPage: "articoli per pagina",
            pagination_of: "di",
            pagination_items: "articoli",
            /* End Pagination Translations */

            footer_totalItems: "Totali:",
            footer_showingItems: "Mostra:",
            footer_selectedItems: "Selezionati:",
            /*End Footer Translations*/

            sort_ascending: "Asc.",
            sort_descending: "Desc.",
            sort_remove: "Annulla ordinamento"
            /*End column menu translations*/

        });

        $translateProvider.translations('it_IT', {
            pagination_firstPage: "Prima",
            pagination_pageBack: "Precedente",
            pagination_nextPage: "Prossima",
            pagination_lastPage: "Ultima",
            pagination_itemsPerPage: "articoli per pagina",
            pagination_of: "di",
            pagination_items: "articoli",
            /* End Pagination Translations */

            footer_totalItems: "Totali:",
            footer_showingItems: "Mostra:",
            footer_selectedItems: "Selezionati:",
            /*End Footer Translations*/

            sort_ascending: "Asc.",
            sort_descending: "Desc.",
            sort_remove: "Annulla ordinamento"
            /*End column menu translations*/

        });

        $translateProvider.translations('fi', {
            pagination_firstPage: "Ensimmäinen sivu",
            pagination_pageBack: "Edellinen sivu",
            pagination_nextPage: "Seuraava sivu",
            pagination_lastPage: "Viimeinen sivu",
            pagination_itemsPerPage: "kohdetta per sivu",
            pagination_of: "/",
            pagination_items: "kohdetta",
            /* End Pagination Translations */

            footer_totalItems: "Rivejä yht.:",
            footer_showingItems: "Näytetään rivejä:",
            footer_selectedItems: "Valitut rivit:",
            /*End Footer Translations*/

            sort_ascending: "Järjestä nouseva",
            sort_descending: "Järjestä laskeva",
            sort_remove: "Poista järjestys"
            /*End column menu translations*/

        });

        $translateProvider.translations('fin', {
            pagination_firstPage: "Ensimmäinen sivu",
            pagination_pageBack: "Edellinen sivu",
            pagination_nextPage: "Seuraava sivu",
            pagination_lastPage: "Viimeinen sivu",
            pagination_itemsPerPage: "kohdetta per sivu",
            pagination_of: "/",
            pagination_items: "kohdetta",
            /* End Pagination Translations */

            footer_totalItems: "Rivejä yht.:",
            footer_showingItems: "Näytetään rivejä:",
            footer_selectedItems: "Valitut rivit:",
            /*End Footer Translations*/

            sort_ascending: "Järjestä nouseva",
            sort_descending: "Järjestä laskeva",
            sort_remove: "Poista järjestys"
            /*End column menu translations*/

        });

        $translateProvider.translations('fi_FI', {
            pagination_firstPage: "Ensimmäinen sivu",
            pagination_pageBack: "Edellinen sivu",
            pagination_nextPage: "Seuraava sivu",
            pagination_lastPage: "Viimeinen sivu",
            pagination_itemsPerPage: "kohdetta per sivu",
            pagination_of: "/",
            pagination_items: "kohdetta",
            /* End Pagination Translations */

            footer_totalItems: "Rivejä yht.:",
            footer_showingItems: "Näytetään rivejä:",
            footer_selectedItems: "Valitut rivit:",
            /*End Footer Translations*/

            sort_ascending: "Järjestä nouseva",
            sort_descending: "Järjestä laskeva",
            sort_remove: "Poista järjestys"
            /*End column menu translations*/

        });
        $translateProvider.translations('ru', {
            pagination_firstPage: "Первая страница",
            pagination_pageBack: "Предыдущая страница",
            pagination_nextPage: "Следующая страница",
            pagination_lastPage: "Последняя страница",
            pagination_itemsPerPage: "строк на страницу",
            pagination_of: "из",
            pagination_items: "строк",
            /* End Pagination Translations */

            footer_totalItems: "Всего элементов:",
            footer_showingItems: "Показать элементы:",
            footer_selectedItems: "Выбранные элементы:",
            /*End Footer Translations*/

            sort_ascending: "По возрастанию",
            sort_descending: "По убыванию",
            sort_remove: "Убрать сортировку"
            /*End column menu translations*/

        });

        $translateProvider.translations('ru', {
            pagination_firstPage: "Первая страница",
            pagination_pageBack: "Предыдущая страница",
            pagination_nextPage: "Следующая страница",
            pagination_lastPage: "Последняя страница",
            pagination_itemsPerPage: "строк на страницу",
            pagination_of: "из",
            pagination_items: "строк",
            /* End Pagination Translations */

            footer_totalItems: "Всего элементов:",
            footer_showingItems: "Показать элементы:",
            footer_selectedItems: "Выбранные элементы:",
            /*End Footer Translations*/

            sort_ascending: "По возрастанию",
            sort_descending: "По убыванию",
            sort_remove: "Убрать сортировку"
            /*End column menu translations*/

        });

        $translateProvider.translations('ru_RU', {
            pagination_firstPage: "Первая страница",
            pagination_pageBack: "Предыдущая страница",
            pagination_nextPage: "Следующая страница",
            pagination_lastPage: "Последняя страница",
            pagination_itemsPerPage: "строк на страницу",
            pagination_of: "из",
            pagination_items: "строк",
            /* End Pagination Translations */

            footer_totalItems: "Всего элементов:",
            footer_showingItems: "Показать элементы:",
            footer_selectedItems: "Выбранные элементы:",
            /*End Footer Translations*/

            sort_ascending: "По возрастанию",
            sort_descending: "По убыванию",
            sort_remove: "Убрать сортировку"
            /*End column menu translations*/

        });

        $translateProvider.translations('cz', {
            pagination_firstPage: "První strana",
            pagination_pageBack: "Předchozí strana",
            pagination_nextPage: "Další strana",
            pagination_lastPage: "Poslední strana",
            pagination_itemsPerPage: "položek na stránku",
            pagination_of: "/",
            pagination_items: "položek",
            /* End Pagination Translations */

            footer_totalItems: "Celkem položek:",
            footer_showingItems: "Zobrazuji položky:",
            footer_selectedItems: "Vybrané položky:",
            /*End Footer Translations*/

            sort_ascending: "Seřadit od A-Z",
            sort_descending: "Seřadit od Z-A",
            sort_remove: "Odebrat seřazení"
            /*End column menu translations*/

        });

        $translateProvider.translations('cz_CZ', {
            pagination_firstPage: "První strana",
            pagination_pageBack: "Předchozí strana",
            pagination_nextPage: "Další strana",
            pagination_lastPage: "Poslední strana",
            pagination_itemsPerPage: "položek na stránku",
            pagination_of: "/",
            pagination_items: "položek",
            /* End Pagination Translations */

            footer_totalItems: "Celkem položek:",
            footer_showingItems: "Zobrazuji položky:",
            footer_selectedItems: "Vybrané položky:",
            /*End Footer Translations*/

            sort_ascending: "Seřadit od A-Z",
            sort_descending: "Seřadit od Z-A",
            sort_remove: "Odebrat seřazení"
            /*End column menu translations*/

        });

        $translateProvider.translations('pl', {
            pagination_firstPage: "Pierwsza strona",
            pagination_pageBack: "Poprzednia strona",
            pagination_nextPage: "Następna strona",
            pagination_lastPage: "Ostatnia strona",
            pagination_itemsPerPage: "pozycji na stronę",
            pagination_of: "z",
            pagination_items: "pozycji",
            /* End Pagination Translations */

            footer_totalItems: "Wszystkich pozycji:",
            footer_showingItems: "Widoczne pozycje:",
            footer_selectedItems: "Zaznaczone pozycje:",
            /*End Footer Translations*/

            sort_ascending: "Sortuj rosnąco",
            sort_descending: "Sortuj malejąco",
            sort_remove: "Wyłącz sortowanie"
            /*End column menu translations*/

        });

        $translateProvider.translations('pl_PL', {
            pagination_firstPage: "Pierwsza strona",
            pagination_pageBack: "Poprzednia strona",
            pagination_nextPage: "Następna strona",
            pagination_lastPage: "Ostatnia strona",
            pagination_itemsPerPage: "pozycji na stronę",
            pagination_of: "z",
            pagination_items: "pozycji",
            /* End Pagination Translations */

            footer_totalItems: "Wszystkich pozycji:",
            footer_showingItems: "Widoczne pozycje:",
            footer_selectedItems: "Zaznaczone pozycje:",
            /*End Footer Translations*/

            sort_ascending: "Sortuj rosnąco",
            sort_descending: "Sortuj malejąco",
            sort_remove: "Wyłącz sortowanie"
            /*End column menu translations*/

        });

        $translateProvider.translations('da', {
            pagination_firstPage: "Første side",
            pagination_pageBack: "Forrige side",
            pagination_nextPage: "Næste side",
            pagination_lastPage: "Sidste side",
            pagination_itemsPerPage: "rækker per sida",
            pagination_of: "af",
            pagination_items: "rækker",
            /* End Pagination Translations */

            footer_totalItems: "Rækker totalt:",
            footer_showingItems: "Viste rækker:",
            footer_selectedItems: "Valgte rækker:",
            /*End Footer Translations*/

            sort_ascending: "Sorter stigende",
            sort_descending: "Sorter faldende",
            sort_remove: "Fjern sortering"
            /*End column menu translations*/

        });

        $translateProvider.translations('da_DA', {
            pagination_firstPage: "Første side",
            pagination_pageBack: "Forrige side",
            pagination_nextPage: "Næste side",
            pagination_lastPage: "Sidste side",
            pagination_itemsPerPage: "rækker per sida",
            pagination_of: "af",
            pagination_items: "rækker",
            /* End Pagination Translations */

            footer_totalItems: "Rækker totalt:",
            footer_showingItems: "Viste rækker:",
            footer_selectedItems: "Valgte rækker:",
            /*End Footer Translations*/

            sort_ascending: "Sorter stigende",
            sort_descending: "Sorter faldende",
            sort_remove: "Fjern sortering"
            /*End column menu translations*/

        });

        $translateProvider.translations('sv', {
            pagination_firstPage: "Första sidan",
            pagination_pageBack: "Föregående sida",
            pagination_nextPage: "Nästa sida",
            pagination_lastPage: "Sista sidan",
            pagination_itemsPerPage: "Artiklar per sida",
            pagination_of: "av",
            pagination_items: "artiklar",
            /* End Pagination Translations */

            footer_totalItems: "Antal artiklar:",
            footer_showingItems: "Visar artiklar:",
            footer_selectedItems: "Valda artiklar:",
            /*End Footer Translations*/

            sort_ascending: "Sortera stigande",
            sort_descending: "Sortera fallande",
            sort_remove: "Inaktivera sortering"
            /*End column menu translations*/

        });

        $translateProvider.translations('sv_SE', {
            pagination_firstPage: "Första sidan",
            pagination_pageBack: "Föregående sida",
            pagination_nextPage: "Nästa sida",
            pagination_lastPage: "Sista sidan",
            pagination_itemsPerPage: "Artiklar per sida",
            pagination_of: "av",
            pagination_items: "artiklar",
            /* End Pagination Translations */

            footer_totalItems: "Antal artiklar:",
            footer_showingItems: "Visar artiklar:",
            footer_selectedItems: "Valda artiklar:",
            /*End Footer Translations*/

            sort_ascending: "Sortera stigande",
            sort_descending: "Sortera fallande",
            sort_remove: "Inaktivera sortering"
            /*End column menu translations*/

        });

        $translateProvider.translations('de', {
            pagination_firstPage: "Erste Seite",
            pagination_pageBack: "Vorherige Seite",
            pagination_nextPage: "Nächste Seite",
            pagination_lastPage: "Letzte Seite",
            pagination_itemsPerPage: "objekte pro seite",
            pagination_of: "von",
            pagination_items: "objekte",
            /* End Pagination Translations */

            footer_totalItems: "Einträge gesamt:",
            footer_showingItems: "Zeige Einträge:",
            footer_selectedItems: "Ausgewählte Einträge:",
            /*End Footer Translations*/

            sort_ascending: "aufsteigend sortieren",
            sort_descending: "absteigend sortieren",
            sort_remove: "Sortierung zurücksetzen"
            /*End column menu translations*/

        });

        $translateProvider.translations('de_DE', {
            pagination_firstPage: "Erste Seite",
            pagination_pageBack: "Vorherige Seite",
            pagination_nextPage: "Nächste Seite",
            pagination_lastPage: "Letzte Seite",
            pagination_itemsPerPage: "objekte pro seite",
            pagination_of: "von",
            pagination_items: "objekte",
            /* End Pagination Translations */

            footer_totalItems: "Einträge gesamt:",
            footer_showingItems: "Zeige Einträge:",
            footer_selectedItems: "Ausgewählte Einträge:",
            /*End Footer Translations*/

            sort_ascending: "aufsteigend sortieren",
            sort_descending: "absteigend sortieren",
            sort_remove: "Sortierung zurücksetzen"
            /*End column menu translations*/

        });

        $translateProvider.translations('nl', {
            pagination_firstPage: "Eerste pagina",
            pagination_pageBack: "Vorige pagina",
            pagination_nextPage: "Volgende pagina",
            pagination_lastPage: "Laatste pagina",
            pagination_itemsPerPage: "items per pagina",
            pagination_of: "van de",
            pagination_items: "items",
            /* End Pagination Translations */

            footer_totalItems: "Totaal aantal items:",
            footer_showingItems: "Getoonde items:",
            footer_selectedItems: "Geselecteerde items:",
            /*End Footer Translations*/

            sort_ascending: "Sorteer oplopend",
            sort_descending: "Sorteer aflopend",
            sort_remove: "Verwijder sortering"
            /*End column menu translations*/

        });

        $translateProvider.translations('nl_NL', {
            pagination_firstPage: "Eerste pagina",
            pagination_pageBack: "Vorige pagina",
            pagination_nextPage: "Volgende pagina",
            pagination_lastPage: "Laatste pagina",
            pagination_itemsPerPage: "items per pagina",
            pagination_of: "van de",
            pagination_items: "items",
            /* End Pagination Translations */

            footer_totalItems: "Totaal aantal items:",
            footer_showingItems: "Getoonde items:",
            footer_selectedItems: "Geselecteerde items:",
            /*End Footer Translations*/

            sort_ascending: "Sorteer oplopend",
            sort_descending: "Sorteer aflopend",
            sort_remove: "Verwijder sortering"
            /*End column menu translations*/

        });

        $translateProvider.translations('nl_BE', {
            pagination_firstPage: "Eerste pagina",
            pagination_pageBack: "Vorige pagina",
            pagination_nextPage: "Volgende pagina",
            pagination_lastPage: "Laatste pagina",
            pagination_itemsPerPage: "items per pagina",
            pagination_of: "van de",
            pagination_items: "items",
            /* End Pagination Translations */

            footer_totalItems: "Totaal aantal items:",
            footer_showingItems: "Getoonde items:",
            footer_selectedItems: "Geselecteerde items:",
            /*End Footer Translations*/

            sort_ascending: "Sorteer oplopend",
            sort_descending: "Sorteer aflopend",
            sort_remove: "Verwijder sortering"
            /*End column menu translations*/

        });

        $translateProvider.translations('ja', {
            pagination_firstPage: "最初のページ",
            pagination_pageBack: "前のページ",
            pagination_nextPage: "次のページ",
            pagination_lastPage: "前のページ",
            pagination_itemsPerPage: "項目/ページ",
            pagination_of: "項目/全",
            pagination_items: " ",
            /* End Pagination Translations */

            footer_totalItems: "項目の総数:",
            footer_showingItems: "表示中の項目:",
            footer_selectedItems: "選択した項目:",
            /*End Footer Translations*/

            sort_ascending: "昇順に並べ替え",
            sort_descending: "降順に並べ替え",
            sort_remove: "並べ替えの解除"
            /*End column menu translations*/

        });

        $translateProvider.translations('ja_JP', {
            pagination_firstPage: "最初のページ",
            pagination_pageBack: "前のページ",
            pagination_nextPage: "次のページ",
            pagination_lastPage: "前のページ",
            pagination_itemsPerPage: "項目/ページ",
            pagination_of: "項目/全",
            pagination_items: " ",
            /* End Pagination Translations */

            footer_totalItems: "項目の総数:",
            footer_showingItems: "表示中の項目:",
            footer_selectedItems: "選択した項目:",
            /*End Footer Translations*/

            sort_ascending: "昇順に並べ替え",
            sort_descending: "降順に並べ替え",
            sort_remove: "並べ替えの解除"
            /*End column menu translations*/

        });

        $translateProvider.translations('ko', {
            pagination_firstPage: "첫번째 페이지",
            pagination_pageBack: "이전 페이지",
            pagination_nextPage: "다음 페이지",
            pagination_lastPage: "마지막 페이지",
            pagination_itemsPerPage: "페이지당 항목",
            pagination_of: "/",
            pagination_items: "항목",
            /* End Pagination Translations */

            footer_totalItems: "전체 항목:",
            footer_showingItems: "항목 보여주기:",
            footer_selectedItems: "선택 항목:",
            /*End Footer Translations*/

            sort_ascending: "오름차순 정렬",
            sort_descending: "내림차순 정렬",
            sort_remove: "소팅 제거"
            /*End column menu translations*/

        });

        $translateProvider.translations('ko_KR', {
            pagination_firstPage: "첫번째 페이지",
            pagination_pageBack: "이전 페이지",
            pagination_nextPage: "다음 페이지",
            pagination_lastPage: "마지막 페이지",
            pagination_itemsPerPage: "페이지당 항목",
            pagination_of: "/",
            pagination_items: "항목",
            /* End Pagination Translations */

            footer_totalItems: "전체 항목:",
            footer_showingItems: "항목 보여주기:",
            footer_selectedItems: "선택 항목:",
            /*End Footer Translations*/

            sort_ascending: "오름차순 정렬",
            sort_descending: "내림차순 정렬",
            sort_remove: "소팅 제거"
            /*End column menu translations*/

        });

        $translateProvider.translations('pt', {
            pagination_firstPage: "Primeira Página",
            pagination_pageBack: "Página Anterior",
            pagination_nextPage: "Próxima Página",
            pagination_lastPage: "Última Página",
            pagination_itemsPerPage: "itens por página",
            pagination_of: "de",
            pagination_items: "itens",
            /* End Pagination Translations */

            footer_totalItems: "Total de Itens:",
            footer_showingItems: "Mostrando os Itens:",
            footer_selectedItems: "Itens Selecionados:",
            /*End Footer Translations*/

            sort_ascending: "Ordenar Ascendente",
            sort_descending: "Ordenar Descendente",
            sort_remove: "Remover Ordenação"
            /*End column menu translations*/

        });

        $translateProvider.translations('pt_BR', {
            pagination_firstPage: "Primeira Página",
            pagination_pageBack: "Página Anterior",
            pagination_nextPage: "Próxima Página",
            pagination_lastPage: "Última Página",
            pagination_itemsPerPage: "itens por página",
            pagination_of: "de",
            pagination_items: "itens",
            /* End Pagination Translations */

            footer_totalItems: "Total de Itens:",
            footer_showingItems: "Mostrando os Itens:",
            footer_selectedItems: "Itens Selecionados:",
            /*End Footer Translations*/

            sort_ascending: "Ordenar Ascendente",
            sort_descending: "Ordenar Descendente",
            sort_remove: "Remover Ordenação"
            /*End column menu translations*/

        });

        $translateProvider.translations('pt_PT', {
            pagination_firstPage: "Primeira Página",
            pagination_pageBack: "Página Anterior",
            pagination_nextPage: "Próxima Página",
            pagination_lastPage: "Última Página",
            pagination_itemsPerPage: "itens por página",
            pagination_of: "de",
            pagination_items: "itens",
            /* End Pagination Translations */

            footer_totalItems: "Total de Itens:",
            footer_showingItems: "Mostrando os Itens:",
            footer_selectedItems: "Itens Selecionados:",
            /*End Footer Translations*/

            sort_ascending: "Ordenar Ascendente",
            sort_descending: "Ordenar Descendente",
            sort_remove: "Remover Ordenação"
            /*End column menu translations*/

        });

        $translateProvider.translations('ro', {
            pagination_firstPage: "Prima pagina",
            pagination_pageBack: "Pagina anterioara",
            pagination_nextPage: "Pagina urmatoare",
            pagination_lastPage: "Ultima pagina",
            pagination_itemsPerPage: "elemente per pagina",
            pagination_of: "of",
            pagination_items: "elemente",
            /* End Pagination Translations */

            footer_totalItems: "Total elemente:",
            footer_showingItems: "Arata elementele:",
            footer_selectedItems: "Elementele selectate:",
            /*End Footer Translations*/

            sort_ascending: "Ordoneaza crescator",
            sort_descending: "Ordoneaza descrescator",
            sort_remove: "Sterge ordonarea"
            /*End column menu translations*/

        });

        $translateProvider.translations('ro_RO', {
            pagination_firstPage: "Prima pagina",
            pagination_pageBack: "Pagina anterioara",
            pagination_nextPage: "Pagina urmatoare",
            pagination_lastPage: "Ultima pagina",
            pagination_itemsPerPage: "elemente per pagina",
            pagination_of: "of",
            pagination_items: "elemente",
            /* End Pagination Translations */

            footer_totalItems: "Total elemente:",
            footer_showingItems: "Arata elementele:",
            footer_selectedItems: "Elementele selectate:",
            /*End Footer Translations*/

            sort_ascending: "Ordoneaza crescator",
            sort_descending: "Ordoneaza descrescator",
            sort_remove: "Sterge ordonarea"
            /*End column menu translations*/

        });

        $translateProvider.translations('sk', {
            pagination_firstPage: "Prvá strana",
            pagination_pageBack: "Predchádzajúca strana",
            pagination_nextPage: "Ďalšia strana",
            pagination_lastPage: "Posledná strana",
            pagination_itemsPerPage: "položiek na stránku",
            pagination_of: "z",
            pagination_items: "položiek",
            /* End Pagination Translations */

            footer_totalItems: "Počet položiek:",
            footer_showingItems: "Zobrazujem položky:",
            footer_selectedItems: "Vybraté položky:",
            /*End Footer Translations*/

            sort_ascending: "Zotriediť vzostupne",
            sort_descending: "Zotriediť zostupne",
            sort_remove: "Vymazať triedenie"
            /*End column menu translations*/

        });

        $translateProvider.translations('sk_SK', {
            pagination_firstPage: "Prvá strana",
            pagination_pageBack: "Predchádzajúca strana",
            pagination_nextPage: "Ďalšia strana",
            pagination_lastPage: "Posledná strana",
            pagination_itemsPerPage: "položiek na stránku",
            pagination_of: "z",
            pagination_items: "položiek",
            /* End Pagination Translations */

            footer_totalItems: "Počet položiek:",
            footer_showingItems: "Zobrazujem položky:",
            footer_selectedItems: "Vybraté položky:",
            /*End Footer Translations*/

            sort_ascending: "Zotriediť vzostupne",
            sort_descending: "Zotriediť zostupne",
            sort_remove: "Vymazať triedenie"
            /*End column menu translations*/

        });

        $translateProvider.translations('ta', {
            pagination_firstPage: "முதல் பக்கம",
            pagination_pageBack: "முந்தைய பக்கம்",
            pagination_nextPage: "அடுத்த பக்கம",
            pagination_lastPage: "இறுதி பக்கம",
            pagination_itemsPerPage: "உருப்படிகள் / பக்கம",
            pagination_of: " ",
            pagination_items: "உருப்படிகள்",
            /* End Pagination Translations */

            footer_totalItems: "மொத்த உருப்படிகள்:",
            footer_showingItems: "உருப்படிகளை காண்பித்தல்:",
            footer_selectedItems: "தேர்ந்தெடுக்கப்பட்ட  உருப்படிகள்:",
            /*End Footer Translations*/

            sort_ascending: "ேலிருந்து கீழாக",
            sort_descending: "கீழிருந்து மேலாக",
            sort_remove: "வரிசையை நீக்க"
            /*End column menu translations*/

        });

        $translateProvider.translations('ta_IN', {
            pagination_firstPage: "முதல் பக்கம",
            pagination_pageBack: "முந்தைய பக்கம்",
            pagination_nextPage: "அடுத்த பக்கம",
            pagination_lastPage: "இறுதி பக்கம",
            pagination_itemsPerPage: "உருப்படிகள் / பக்கம",
            pagination_of: " ",
            pagination_items: "உருப்படிகள்",
            /* End Pagination Translations */

            footer_totalItems: "மொத்த உருப்படிகள்:",
            footer_showingItems: "உருப்படிகளை காண்பித்தல்:",
            footer_selectedItems: "தேர்ந்தெடுக்கப்பட்ட  உருப்படிகள்:",
            /*End Footer Translations*/

            sort_ascending: "ேலிருந்து கீழாக",
            sort_descending: "கீழிருந்து மேலாக",
            sort_remove: "வரிசையை நீக்க"
            /*End column menu translations*/

        });

        $translateProvider.translations('tr', {
            pagination_firstPage: "İlk Sayfa",
            pagination_pageBack: "Önceki Sayfa",
            pagination_nextPage: "Sonraki Sayfa",
            pagination_lastPage: "Son Sayfa",
            pagination_itemsPerPage: "Sayfadaki nesne sayısı",
            pagination_of: " ",
            pagination_items: "kayıtlar",
            /* End Pagination Translations */

            footer_totalItems: "Toplam Kayıt:",
            footer_showingItems: "Gösterilen Kayıt:",
            footer_selectedItems: "Seçili Kayıt:",
            /*End Footer Translations*/

            sort_ascending: "Artan Sırada Sırala",
            sort_descending: "Azalan Sırada Sırala",
            sort_remove: "Sıralamayı Kaldır"
            /*End column menu translations*/

        });

        $translateProvider.translations('tr_TR', {
            pagination_firstPage: "İlk Sayfa",
            pagination_pageBack: "Önceki Sayfa",
            pagination_nextPage: "Sonraki Sayfa",
            pagination_lastPage: "Son Sayfa",
            pagination_itemsPerPage: "Sayfadaki nesne sayısı",
            pagination_of: " ",
            pagination_items: "kayıtlar",
            /* End Pagination Translations */

            footer_totalItems: "Toplam Kayıt:",
            footer_showingItems: "Gösterilen Kayıt:",
            footer_selectedItems: "Seçili Kayıt:",
            /*End Footer Translations*/

            sort_ascending: "Artan Sırada Sırala",
            sort_descending: "Azalan Sırada Sırala",
            sort_remove: "Sıralamayı Kaldır"
            /*End column menu translations*/

        });

        $translateProvider.translations('hy', {
            pagination_firstPage: "Առաջին էջ",
            pagination_pageBack: "Նախորդ էջ",
            pagination_nextPage: "Հաջորդ էջ",
            pagination_lastPage: "Վերջին էջ",
            pagination_itemsPerPage: "Ապրանքներ մեկ էջում",
            pagination_of: "/",
            pagination_items: "նյութեր",
            /* End Pagination Translations */

            footer_totalItems: "Ընդամենը",
            footer_showingItems: "Ցուցադրված տվյալներ",
            footer_selectedItems: "Ընտրված",
            /*End Footer Translations*/

            sort_ascending: "Աճման կարգով",
            sort_descending: "Նվազման կարգով",
            sort_remove: "Հանել "
            /*End column menu translations*/

        });

        $translateProvider.translations('hy_AM', {
            pagination_firstPage: "Առաջին էջ",
            pagination_pageBack: "Նախորդ էջ",
            pagination_nextPage: "Հաջորդ էջ",
            pagination_lastPage: "Վերջին էջ",
            pagination_itemsPerPage: "Ապրանքներ մեկ էջում",
            pagination_of: "/",
            pagination_items: "նյութեր",
            /* End Pagination Translations */

            footer_totalItems: "Ընդամենը",
            footer_showingItems: "Ցուցադրված տվյալներ",
            footer_selectedItems: "Ընտրված",
            /*End Footer Translations*/

            sort_ascending: "Աճման կարգով",
            sort_descending: "Նվազման կարգով",
            sort_remove: "Հանել "
            /*End column menu translations*/

        });



        //Translations end

        $translateProvider.preferredLanguage('en');
        //Enable escaping of HTML. Improves security, removes console warning.
        $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
    });
})();
