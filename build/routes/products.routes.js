"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var productsCtrl = _interopRequireWildcard(require("../controllers/products.controller"));

var _middlewares = require("../middlewares");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = (0, _express.Router)();
router.get("/", productsCtrl.getProducts);
router.get("/:productId", productsCtrl.getProductById);
router.post("/", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isModerator], productsCtrl.createProduct);
router.put("/:productId", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isModerator], productsCtrl.updateProductById);
router.delete("/:productId", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], productsCtrl.deleteProductById);
var _default = router;
exports.default = _default;