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
    return isJsFile(path) && ((path.substr(0, builtPath.length) == '/base/app/'));
}

//change here as we keep spec.js in test folder
var allSpecFiles = Object.keys(window.__karma__.files)
    .filter(isSpecFile)
    .filter(isJsFile);

System.config({
    baseURL: '/base',
    packageWithIndex: true,
});

var config = {
    paths: {
        'npm:': 'node_modules/'
    },
    map: {
        'demo': 'demo', // 'dist',
        'angular2-highlight-js': 'src',
        // angular bundles
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

        // angular testing umd bundles
        '@angular/core/testing': 'npm:@angular/core/bundles/core-testing.umd.js',
        '@angular/common/testing': 'npm:@angular/common/bundles/common-testing.umd.js',
        '@angular/compiler/testing': 'npm:@angular/compiler/bundles/compiler-testing.umd.js',
        '@angular/platform-browser/testing': 'npm:@angular/platform-browser/bundles/platform-browser-testing.umd.js',
        '@angular/platform-browser-dynamic/testing': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
        '@angular/http/testing': 'npm:@angular/http/bundles/http-testing.umd.js',
        '@angular/router/testing': 'npm:@angular/router/bundles/router-testing.umd.js',
        '@angular/forms/testing': 'npm:@angular/forms/bundles/forms-testing.umd.js',

        'rxjs': 'node_modules/rxjs',

        '@angular/material': 'npm:@angular/material/material.umd.js'
    },
    packages: {
        'demo': { main: 'main.js', defaultExtension: 'js' },
        'angular2-highlight-js': { defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' }   
    }     
};

System.config(config);

Promise.all([
    System.import('@angular/core/testing'),
    System.import('@angular/platform-browser-dynamic/testing')
]).then(function (providers) {
    var coreTesting = providers[0];
    var browserTesting = providers[1];

    coreTesting.TestBed.initTestEnvironment(
        browserTesting.BrowserDynamicTestingModule,
        browserTesting.platformBrowserDynamicTesting());

}).then(function () {
    // Finally, load all spec files.
    // This will run the tests directly.
    return Promise.all(
        allSpecFiles.map(function (moduleName) {
            return System.import(moduleName);
        }));
}).then(__karma__.start, __karma__.error);