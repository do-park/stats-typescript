"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
var fs_1 = __importDefault(require("fs"));
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
    }
    MatchReader.prototype.read = function () {
        this.data = fs_1.default.readFileSync(this.filename, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map(function (row) {
            return row.split(',');
        });
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
