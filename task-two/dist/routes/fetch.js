"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var index_1 = __importDefault(require("../db/index"));
/* GET home page. */
router.get('/', function (req, res, next) {
    var all = index_1.default.readFromDb();
    return res.status(200).json({
        status: "successful",
        data: all
    });
});
exports.default = router;
