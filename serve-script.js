const { LiveReloadCompiler } = require('@nestjs/ng-universal');

const compiler = new LiveReloadCompiler({
  projectName: 'first-angular-app',
  serverFilePath: 'dist/main.js',
  serverBundlePath: 'dist/server-build/main.js'
});
compiler.run();
