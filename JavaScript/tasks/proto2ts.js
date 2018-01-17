var exec = require('child_process').exec;
var fs = require('fs');
var path = require('path');

module.exports = function (gulp, plugins) {

  gulp.task('proto2ts', function (cb) {

    var pbjs = 'node '+path.resolve('./node_modules//protobufjs/bin/pbjs')+' '+path.resolve('../../java/contidio-sdk/gpb/metadata.proto')+' > metadata.json';
    var proto2ts = 'node '+path.normalize('./node_modules/proto2ts/command.js')+' --no-camelCaseGetSet --file metadata.json --prependTypePackage --no-b -t ./templates/proto/ > '+path.normalize('src/proto.ts');

    console.log('exec: ' + pbjs);
    exec(pbjs, function (error, stdout, stderr) {

      if (error) {
        console.log('Error: ' + error);
        console.log('StdError: ' + stderr);
      }

      var json = JSON.parse(fs.readFileSync('metadata.json', 'utf8'));
      json.package = 'Proto';

      var config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

      var checkConstEnum = function(message) {
        if (!message.enums) {
          return message;
        }

        message.enums = message.enums.map(function(iEnum) {
          iEnum.const = config.normalEnums.indexOf(iEnum.name) > -1 ? "" : "const";
          return iEnum;
        });

        return message;
      };

      json.messages = json.messages.map(function(message){
        return checkConstEnum(message);
      });

      json = checkConstEnum(json);

      fs.writeFileSync('metadata.json', JSON.stringify(json));

      console.log('exec: ' + proto2ts);
      exec(proto2ts, function (error, stdout, stderr) {
        if (error) {
          console.log('Error: ' + error);
          console.log('StdError: ' + stderr);
        }

        proto2ts = 'node '+path.normalize('./node_modules/proto2ts/command.js')+' --no-camelCaseGetSet --prependTypePackage --file metadata.json --no-b -t '+path.normalize('./templates/proto-definitions') + ' > '+path.normalize('definitions/proto.d.ts');

        exec(proto2ts, function (error, stdout, stderr) {
          if (error) {
            console.log('Error: ' + error);
            console.log('StdError: ' + stderr);
          }
          cb();
        });

      });
    });

  })

};
