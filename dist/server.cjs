"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/server.ts
var http = __toESM(require("http"), 1);

// src/repositories/podcasts-repository.ts
var import_fs = __toESM(require("fs"), 1);
var import_path = __toESM(require("path"), 1);
var pathData = import_path.default.join(__dirname, "..", "repositories", "podcasts.json");
var repositoryPodcast = () => __async(void 0, null, function* () {
  const rawData = yield import_fs.default.readFileSync(pathData, "utf-8");
  const jsonFile = JSON.parse(rawData);
  return jsonFile;
});

// src/services/list-episodes-service.ts
var serviceListEpisodes = () => __async(void 0, null, function* () {
  const data = yield repositoryPodcast;
  return data;
});

// src/controllers/podcasts-controler.ts
var getListEpisodes = (req, res) => __async(void 0, null, function* () {
  const content = yield serviceListEpisodes();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(content));
});

// src/server.ts
var server = http.createServer(
  (req, res) => __async(void 0, null, function* () {
    if (req.method === "GET") {
      yield getListEpisodes(req, res);
    }
  })
);
server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
