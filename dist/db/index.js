"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var database = "database.json";
var Db = /** @class */ (function () {
    function Db() {
    }
    Db.readFromDb = function () {
        try {
            var buffer = fs_1.default.readFileSync(database);
            var all = JSON.parse(buffer.toString());
            return all;
        }
        catch (error) {
            return [];
        }
    };
    Db.saveTodb = function (result) {
        try {
            var id = Db.generateId();
            var all = Db.readFromDb();
            var data = __assign(__assign({ id: id }, result), { createdAt: new Date() });
            if (all.length > 0) {
                all.push(data);
                var json = JSON.stringify(all, null, 2);
                fs_1.default.writeFileSync(database, json);
            }
            else {
                var newData = [data];
                var json = JSON.stringify(newData, null, 2);
                fs_1.default.writeFileSync(database, json);
            }
            return data;
        }
        catch (error) {
            throw new Error("could not save to database");
        }
    };
    Db.generateId = function () {
        var all = Db.readFromDb();
        var ID = 1;
        if (all.length > 0) {
            var allIDs = all.map(function (results) { return results.id; });
            var maxId = Math.max.apply(Math, allIDs);
            ID = maxId + 1;
            return ID;
        }
        return ID;
    };
    return Db;
}());
exports.default = Db;
