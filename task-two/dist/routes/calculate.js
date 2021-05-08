"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var calculate_1 = __importDefault(require("../utils/calculate"));
var index_1 = __importDefault(require("../db/index"));
/* GET home page. */
router.post('/', function (req, res, next) {
    var shape = req === null || req === void 0 ? void 0 : req.body.shape.toLocaleLowerCase();
    if (shape === 'rectangle') {
        var dimension = req.body.dimension;
        var result = calculate_1.default.rectangle(dimension.length, dimension.breath);
        var data = {
            shape: shape,
            dimension: dimension,
            result: result,
        };
        try {
            var newData = index_1.default.saveTodb(data);
            return res.status(200).json({
                status: 'success',
                data: newData
            });
        }
        catch (error) {
            return res.status(500).json({
                status: 'error',
                message: 'an error occurred'
            });
        }
    }
    if (shape === 'circle') {
        var dimension = req.body.dimension;
        var result = calculate_1.default.circle(dimension);
        var data = {
            shape: shape,
            dimension: dimension,
            result: result,
        };
        try {
            var newData = index_1.default.saveTodb(data);
            return res.status(200).json({
                status: 'success',
                data: newData
            });
        }
        catch (error) {
            return res.status(500).json({
                status: 'error',
                message: 'an error occurred'
            });
        }
    }
    if (shape === 'triangle') {
        var dimension = req.body.dimension;
        var result = calculate_1.default.triangle(dimension.a, dimension.b, dimension.c);
        var data = {
            shape: shape,
            dimension: dimension,
            result: result,
        };
        try {
            var newData = index_1.default.saveTodb(data);
            return res.status(200).json({
                status: 'success',
                data: newData
            });
        }
        catch (error) {
            return res.status(500).json({
                status: 'error',
                message: 'an error occurred'
            });
        }
    }
    if (shape === 'square') {
        var dimension = req.body.dimension;
        var result = calculate_1.default.square(dimension);
        var data = {
            shape: shape,
            dimension: dimension,
            result: result,
        };
        try {
            var newData = index_1.default.saveTodb(data);
            return res.status(200).json({
                status: 'success',
                data: newData
            });
        }
        catch (error) {
            return res.status(500).json({
                status: 'error',
                message: 'an error occurred'
            });
        }
    }
    return res.status(400).json({
        status: "error",
        message: "bad request"
    });
});
exports.default = router;
