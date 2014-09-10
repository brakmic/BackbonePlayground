{exec} = require 'child_process'
task 'build', 'Build JavaScript files from CoffeeScript sources', ->
  exec 'coffee --compile .', (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr
