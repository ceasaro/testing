require(["../dist/jasmine-standalone-2.1.3/lib/jasmine-2.1.3/jasmine",
    "../dist/jasmine-standalone-2.1.3/lib/jasmine-2.1.3/jasmine-html",
    "../dist/jasmine-standalone-2.1.3/lib/jasmine-2.1.3/boot"],
  function(jasminejs, jasmine_html, boot) {
    console.log('require config modules loaded!');
    require(['specs/simple_spec'], function(tests) {
      console.log('run tests!');
      jasmine.getEnv().addReporter(new jasmine.HtmlReporter());
      jasmine.getEnv().execute();
      console.log('tests run!');
    });
  }
);
