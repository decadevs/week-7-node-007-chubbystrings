"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var fetch_1 = __importDefault(require("./fetch"));
var calculate_1 = __importDefault(require("./calculate"));
var users_1 = __importDefault(require("./users"));
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
router.use('/fetchRecords', fetch_1.default);
router.use('/calculate', calculate_1.default);
router.use('/users', users_1.default);
exports.default = router;
