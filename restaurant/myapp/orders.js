/**
 * @api {get} /orders get all list of orders
 * @apiGroup Orders
 * @apiName GetOrders
 * @apiDescription Request orders information
 */

/**
 * @api {get} /orders/:id get orders form (by id)
 * @apiGroup Orders
 * @apiName GetOrdersById
 * @apiDescription Request orders (master and detail) information (by id)
 */

/**
 * @api {post} /orders add orders 
 * @apiGroup Orders
 * @apiName PostOrders
 * @apiDescription Creating a new orders and adding a new product into orders
 *
 * @apiParam {Integer} [id_orders]  Optional Reference of the Product.
 * @apiParam {String} [orders_no]  Optional Reference of the Product.
 * @apiParam {String} [status]  Optional Reference of the Product.
 * @apiParam {Tinyint} active 0 = delete, 1 = active, 2 = inactive
 * @apiParam {datetime} date_add Date Added
 * @apiParam {datetime} date_upd Date Updated
 * @apiParam {Object[]} detail  detail's list
 * @apiParam {Integer} detail.id_orders_detail id orders detail
 * @apiParam {Integer} detail.id_orders id orders
 * @apiParam {Integer} detail.id_product id id_product
 * @apiParam {Float} detail.unit_price unit price
 * @apiParam {Integer} detail.qty quantity
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id_orders": "1",
 *		 "orders_no": "OD0001",
 *		 "status": "OPEN",
 *		 "detail": [
 *			{
 *				"id_orders_detail": "",
 *				"id_orders": "",
 *				"id_product": "",
 *				"unit_price": "",
 *				"qty": "",
 *			},
 *			{
 *				"id_orders_detail": "",
 *				"id_orders": "",
 *				"id_product": "",
 *				"unit_price": "",
 *				"qty": "",
 *			},
 *		],
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
 * @apiGroup Desk
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