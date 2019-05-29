

/**
 * @api {get} /products get product
 * @apiGroup Product
 * @apiName GetProduct
 * @apiDescription Request product information
 *
 */

/**
 * @api {get} /products/:id get product (by id)
 * @apiGroup Product
 * @apiName GetProductById
 * @apiDescription Request product information (by id)
 */

/**
 * @api {post} /products add product
 * @apiGroup Product
 * @apiName PostProduct
 * @apiDescription Adding a new product
 *
 * @apiParam {Integer} [id_product]  Optional id of the Product  (auto increment).
 * @apiParam {String} [reference]  Optional Reference of the Product.
 * @apiParam {String} product_name Mandatory product name.
 * @apiParam {Integer} [unit_cost] Optional the unit cost.
 * @apiParam {Integer} [unit_price] Optional the unit price.
 * @apiParam {Tinyint} active 0 = delete, 1 = active, 2 = inactive
 * @apiParam {datetime} date_add Date Added
 * @apiParam {datetime} date_upd Date Updated
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": 4711
 *     }
 *
 * @apiSuccess {Object[]} data data's list
 * @apiSuccess {String} data.status  <code>S</code> = success, <code>E</code> = error
 * @apiSuccess {String} data.message message response
 * @apiSuccess {Number} data.id_product id product
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 */

/**
 * @api {put} /products edit product
 * @apiGroup Product
 * @apiName PutProduct
 * @apiDescription Editing a product
 *
 * @apiParam {Integer} [id_product]  Optional id of the Product  (auto increment).
 * @apiParam {String} [reference]  Optional Reference of the Product.
 * @apiParam {String} product_name Mandatory product name.
 * @apiParam {Integer} [unit_cost] Optional the unit cost.
 * @apiParam {Integer} [unit_price] Optional the unit price.
 * @apiParam {Tinyint} active 0 = delete, 1 = active, 2 = inactive
 * @apiParam {datetime} date_add Date Added
 * @apiParam {datetime} date_upd Date Updated
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": 4711
 *     }
 *
 * @apiSuccess {Object[]} data data's list
 * @apiSuccess {String} data.status  <code>S</code> = success, <code>E</code> = error
 * @apiSuccess {String} data.message message response
 * @apiSuccess {Number} data.id_product id product
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 */