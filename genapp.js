#!/usr/bin/env node
/*** Generated by streamline 0.4.5 (callbacks) - DO NOT EDIT ***/ var __rt=require('streamline/lib/callbacks/runtime').runtime(__filename),__func=__rt.__func,__cb=__rt.__cb,__trap=__rt.__trap,__tryCatch=__rt.__tryCatch; (function main(_) { var fgen, path, fs, util, readline, optimist, argv, homeDir, configFile, options, userOptions, templates, gen, rl, contextFile, context, realContext, question, i; var __frame = { name: "main", line: 1 }; return __func(_, this, arguments, main, 0, __frame, function __$main() { fgen = require("fgen");
    path = require("path");
    fs = require("fs");
    util = require("util");
    readline = require("readline");
    optimist = require("optimist");









    argv = optimist.usage(("gen bundle file [-o output]\n" + "gen bundle --all [-o output_dir] [--exclude=regex]")).alias("o", "output").alias("h", "help").default("o", "./").describe("o", "A destination file/folder where you want to generate to.").describe("all", "Generate all files, excluding those specified by 'exclude'.").describe("exclude", "a regular expression pattern to exclude from generation.").argv;
    templates = { }; return (function __$main(_) { return (function __$main(_) {


        var __5 = argv.h; if (__5) { return _(null, __5); } ; return (function __$main(_) { var __6 = argv.all; if (!__6) { return _(null, __6); } ; var __7 = (argv._.length !== 1); return _(null, __7); })(__cb(_, __frame, 0, 21, _, true)); })(__cb(_, __frame, 0, 21, function ___(__0, __4) { var __7 = __4; return (function __$main(__then) { if (__7) { var __8 = __4; return _(null, __8); } else { __then(); } ; })(function __$main() { return (function __$main(_) { var __6 = !argv.all; if (!__6) { return _(null, __6); } ; var __7 = (argv._.length !== 2); return _(null, __7); })(__cb(_, __frame, 0, 21, _, true)); }); }, true)); })(__cb(_, __frame, 0, 21, function ___(__0, __5) { return (function __$main(__then) { if (__5) {
          optimist.showHelp();
          process.exit(1); __then(); } else { __then(); } ; })(function __$main() {



        options = {
          roots: [path.join(__dirname, "templates"),] };



        homeDir = (process.env["HOME"] || process.env["USERPROFILE"]);
        configFile = path.join(homeDir, ".genappconfig"); return (function __$main(__then) {
          if (fs.existsSync(configFile)) {
            return fs.readFile(configFile, "utf8", __cb(_, __frame, 33, 27, function ___(__0, __6) { userOptions = JSON.parse(__6); __then(); }, true)); } else { __then(); } ; })(function __$main() {

          if (userOptions) {
            options.roots = userOptions.roots.map(function(root) {

              return root.replace(/^~/, homeDir);

            }).concat(options.roots); } ;



          return options.roots.forEach_(__cb(_, __frame, 44, 0, function __$main() {












            var __7 = !((argv._[0] in templates)); return (function __$main(__then) { if (__7) {
                console.log(("Bundle '%s' does not exist in your current roots configuration.\n" + "Your current roots are:"), argv._[0]);

                for (i = 0; (i < options.roots.length); i++) {
                  console.log(options.roots[i]); };

                process.exit(1); __then(); } else { __then(); } ; })(function __$main() {


              contextFile = path.join(templates[argv._[0]], "..", (argv._[0] + ".js")); return (function ___(__then) { (function ___(_) { __tryCatch(_, function __$main() {

                    context = require(contextFile); __then(); }); })(function ___(ex, __result) { __tryCatch(_, function __$main() { if (ex) {

                      console.log("Cannot read set %s's context file.", argv._[0]);
                      process.exit(1); __then(); } else { _(null, __result); } ; }); }); })(function ___() { __tryCatch(_, function __$main() {


                  question = function(query, callback) {
                    rl.question(query, function(answer) { callback(null, answer); }); };


                  constructContext = function constructContext__2(key, val, ctx, prefix, _) { var type, item, more, answer, number; var __frame = { name: "constructContext__2", line: 79 }; return __func(_, this, arguments, constructContext__2, 4, __frame, function __$constructContext__2() {
                      more = true; return (function __$constructContext__2(__then) {

                        if (Array.isArray(val)) {
                          ctx[key] = [];
                          console.log(util.format("ctrl+c to quit '%s'", key));
                          rl.once("SIGINT", function() {
                            more = false;
                            rl.write(null, { ctrl: true, name: "u" });
                            rl.write(null, { ctrl: true, name: "k" });
                            rl.write("\n"); }); return (function ___(__break) { var __more; var __loop = __cb(_, __frame, 0, 0, function __$constructContext__2() { __more = false;

                              var __5 = more; if (__5) {
                                item = { };
                                ctx[key].push(item);
                                return Object.keys(val[0]).forEach_(__cb(_, __frame, 15, 6, function __$constructContext__2() { while (__more) { __loop(); }; __more = true; }, true), function __1(_, k) { var __frame = { name: "__1", line: 94 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() {
                                    return constructContext(k, val[0][k], item, key, __cb(_, __frame, 1, 8, _, true)); }); }); } else { __break(); } ; }); do { __loop(); } while (__more); __more = true; })(function __$constructContext__2() {


                            ctx[key].length = (ctx[key].length - 1); __then(); }); } else { return (function __$constructContext__2(__then) {
                            if ((typeof (val) === "function")) {
                              ctx[key] = val; __then(); } else { return (function __$constructContext__2(__then) {
                                if ((val != null)) {
                                  type = typeof (val); return (function __$constructContext__2(__break) {
                                    switch (type) {
                                    case "string": return question(((((prefix ? (prefix + "> ") : "")) + key) + "? "), __cb(_, __frame, 26, 15, function ___(__0, __2) {
                                        answer = __2; ctx[key] = answer;
                                        return __break(); }, true));

                                    case "number": return question(((((prefix ? (prefix + "> ") : "")) + key) + "? (number)"), __cb(_, __frame, 30, 15, function ___(__0, __3) {
                                        answer = __3; number = parseInt(answer);
                                        return (function __$constructContext__2(__then) { if (isNaN(number)) {
                                            console.log("It's not number.");
                                            return constructContext(key, val, ctx, prefix, __cb(_, __frame, 34, 8, __then, true));
                                          } else { ctx[key] = number;

                                            __then(); } ; })(__break); }, true));


                                    case "boolean": return question(((((prefix ? (prefix + "> ") : "")) + key) + "? (yes/no)"), __cb(_, __frame, 40, 15, function ___(__0, __4) {
                                        answer = __4.toLowerCase(); return (function __$constructContext__2(__then) { if ((answer === "yes")) {
                                            ctx[key] = true;
                                            __then(); } else { return (function __$constructContext__2(__then) { if ((answer === "no")) {
                                                ctx[key] = false;
                                                __then(); } else { console.log("yes or no please.");

                                                return constructContext(key, val, ctx, prefix, __cb(_, __frame, 47, 8, __then, true));
                                              } ; })(__then); } ; })(__break); }, true)); default: return __break(); }; })(__then); } else { __then(); } ; })(__then); } ; })(__then); } ; })(_); }); };






                  rl = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout });


                  realContext = { };
                  return Object.keys(context.context).forEach_(__cb(_, __frame, 138, 0, function __$main() {


                    rl.close();
                    context.postProcess(realContext); return (function ___(__then) { (function ___(_) { __tryCatch(_, function __$main() { return (function __$main(__then) {


                            if (argv.all) {

                              return fgen.createGenerator(templates[argv._[0]], __cb(_, __frame, 147, 10, function ___(__0, __8) { gen = __8;
                                gen.context = realContext; return (function __$main(__then) {
                                  if ((argv.exclude != null)) {
                                    return gen.generateAll(argv.output, function(key) {
                                      return !(new RegExp(argv.exclude)).test(key); }, __cb(_, __frame, 150, 6, __then, true)); } else {


                                    return gen.generateAll(argv.output, __cb(_, __frame, 154, 6, __then, true)); } ; })(__then); }, true)); } else {



                              return fgen.createGenerator(templates[argv._[0]], __cb(_, __frame, 158, 10, function ___(__0, __9) { gen = __9;
                                gen.context = realContext;
                                return gen.generate(argv._[1], argv.output, __cb(_, __frame, 160, 4, __then, true)); }, true)); } ; })(function __$main() {

                            console.log("done."); __then(); }); }); })(function ___(e, __result) { __tryCatch(_, function __$main() { if (e) {

                            console.log();
                            console.log(e.message); __then(); } else { _(null, __result); } ; }); }); })(function ___() { __tryCatch(_, _); }); }, true), function __3(_, key) { var __frame = { name: "__3", line: 139 }; return __func(_, this, arguments, __3, 0, __frame, function __$__3() { return constructContext(key, context.context[key], realContext, null, __cb(_, __frame, 1, 2, _, true)); }); }); }); }); }); }, true), function __1(_, root) { var __frame = { name: "__1", line: 45 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() { if (!fs.existsSync(root)) { return _(null); } ; return fs.readdir(root, __cb(_, __frame, 3, 2, function ___(__0, __2) { return __2.filter_(__cb(_, __frame, 4, 2, function ___(__0, __3) { __3.forEach(function(folder) { if (!((folder in templates))) { templates[folder] = path.join(root, folder); }; }); _(); }, true), -1, function __1(_, file) { var __frame = { name: "__1", line: 49 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() { return fs.stat(path.join(root, file), __cb(_, __frame, 1, 13, function ___(__0, __2) { var __1 = __2.isDirectory(); return _(null, __1); }, true)); }); }); }, true)); }); }); }); }); }, true)); });}).call(this, __trap);
