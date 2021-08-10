"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var typeorm_1 = require("typeorm");
var coupons_routes_1 = __importDefault(require("./routes/coupons.routes"));
var stores_routes_1 = __importDefault(require("./routes/stores.routes"));
var app = express_1.default();
typeorm_1.createConnection();
var port = 3000;
//middlewares
app.use(morgan_1.default("dev"));
app.use(cors_1.default());
app.use(express_1.default.json());
//routes
app.use(coupons_routes_1.default);
app.use(stores_routes_1.default);
app.listen(port, function () {
    console.log('Server started at http://localhost:$', port);
});
