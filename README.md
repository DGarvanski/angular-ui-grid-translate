# angular-ui-grid-translate
An extension for [angular-ui-grid](http://ui-grid.info/), which allows the usage of [angular-translate](https://angular-translate.github.io/) for i18n functionality (<b>WIP</b>)

<b>WORK IN PROGRESS, NOT FULLY FUNCTIONAL!</b>

Pagination demo on Plunker: [Pagination Demo](http://plnkr.co/3fkdue)

<h3>What it does</h3>
angular-ui-grid translate overrides the default [angular-ui-grid](http://ui-grid.info/) templates to allow translating grid elements with [angular-translate](https://angular-translate.github.io/), thus avoiding the need to configure both angular-translate and the ui-grid i18n service. The whole idea is to unify your apps internationalization into one configuration and give more flexibility to ui-grids i18n.

<h3>Why?</h3>
ui-grid is pretty limited in what it does with its localization. While it does provide a big array of available translations, it does require that you specifically configure the usage of the i18n service separately from your app internationalization if you're using [angular-translate](https://angular-translate.github.io/).

<h3>What works currently (as of 0.0.1)?</h3>
angular-ui-grid-translate currently works with a handful of languages and elements. It is not production ready or to be used in a production app.<br/>

<b>Elements:</b>
<ul>
<li>Pagination</li>
<li>Footer</li>
<li>More to come...</li>
</ul>

<b>Languages:</b>
<ul>
<li>English (can be used as "en", "en_US", "en_GB")</li>
<li>Bulgarian (can be used as "bg", "bg_BG")</li>
<li>French (can be used as "fr", "fr_FR")</li>
<li>Spanish (can be used as "es", "es_ES")</li>
<li>Italian (can be used as "it", "it_IT")</li>
<li>Finnish (can be used as "fi", "fi_FI")</li>
<li>More to come...</li>
</ul>

<h2>If you want to use it anyway</h2>

<h3>Installation</h3>
<pre>git clone http://github.com/DGarvanski/angular-ui-grid-translate/</pre>
or
<pre>bower install angular-ui-grid-translate --save</pre>
or
<pre>npm install angular-ui-grid-translate</pre>

<h3>Use</h3>
<b>1.Add js file to your index.html:</b>

`<script src="angular-ui-grid-translate/js/angular-ui-grid-translate.js"></script>`

or

`<script src="bower_components/angular-ui-grid-translate/js/angular-ui-grid-translate.js"></script>`

or

`<script src="node_modules/angular-ui-grid-translate/js/angular-ui-grid-translate.js"></script>`

<b>NOTE: MUST BE ADDED AFTER THE UI-GRID IN THE INDEX</b>
<hr/>
<b>2.Declare as dependency:</b>
```
angular.module('myApp',[
  'ui.grid',
  'ui.grid.pagination',
  'pascalprecht.translate', 
  'angular-ui-grid-translate'
]);
```
<hr/>
<b>3.(optional) Use provided `'uigt.LanguageController'` to change the current language with `changeTo(language)`:</b>

Example:
```
<div ng-controller="uigt.LanguageController">
    <div class="btn-group">
      <button class="btn btn-default btn-sm" ng-click="changeTo('en')">EN</button>
      <button class="btn btn-default btn-sm" ng-click="changeTo('bg')">BG</button>
    </div>
</div>
```
<b>NOTE: YOU CAN JUST AS EASILY USE YOUR OWN METHOD.</b>
<hr/>
<b>4.See how your whole app gets translated on language change</b>

<h3>Contributing</h3>
Feel free to contribute with anything from ui-grid templates to translations and doc improvements.

<h3>License</h3>

The MIT License (MIT)

Copyright (c) 2016 Dejan Garvanski

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
