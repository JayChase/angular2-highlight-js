/*global jasmine, __karma__, window*/
Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

__karma__.loaded = function () {
};


function isJsFile(path) {
    return path.slice(-3) == '.js';
}

function isSpecFile(path) {
    //return path.slice(-8) == '_test.js' || path.slice(-8) == '.spec.js';
    return path.indexOf('/test/') > -1;
}

function isBuiltFile(path) {
    return isJsFile(path) && ((path.substr(0, builtPath.length) == '/base/demo/') || (path.substr(0, builtPath.length) == '/base/src/'));
}

//change here as we keep spec.js in test folder
var allSpecFiles = Object.keys(window.__karma__.files)
    .filter(isSpecFile)
    .filter(isJsFile);

// Load our SystemJS configuration.
System.config({
    baseURL: '/base'
});

var packages = {
    'demo': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    '@angular2-material/core': { format: 'cjs', defaultExtension: 'js', main: 'core.js' },
    '@angular2-material/toolbar': { format: 'cjs', defaultExtension: 'js', main: 'toolbar.js' },
    '@angular2-material/card': { format: 'cjs', defaultExtension: 'js', main: 'card.js' },
    '@angular2-material/input': { format: 'cjs', defaultExtension: 'js', main: 'input.js' },
    '@angular2-material/button': { format: 'cjs', defaultExtension: 'js', main: 'button.js' },
    'angular2-highlight-js': { main: 'index.js', defaultExtension: 'js' }
};

var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'forms',
    'platform-browser',
    'platform-browser-dynamic',
    'router'
];

// Add package entries for angular packages
ngPackageNames.forEach(function (pkgName) {
    // Bundled (~40 requests):
    packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };

    // Individual files (~300 requests):
    //packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
});

System.config(
    {
        map: {
            'rxjs': 'node_modules/rxjs',
            '@angular': 'node_modules/@angular',
            '@angular2-material': 'node_modules/@angular2-material',
            'demo': 'demo',
            'angular2-highlight-js': 'src'
        },
        packages: packages
    });

Promise.all([
    System.import('@angular/core/testing'),
    System.import('@angular/platform-browser-dynamic/testing')
]).then(function (providers) {
    var testing = providers[0];
    var testingBrowser = providers[1];

    testing.setBaseTestProviders(testingBrowser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
        testingBrowser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

}).then(function () {
    // Finally, load all spec files.
    // This will run the tests directly.
    return Promise.all(
        allSpecFiles.map(function (moduleName) {
            return System.import(moduleName);
        }));
}).then(__karma__.start, __karma__.error);
