/**
 * @swagger
 * components:
 *  schemas:
 *   Item:
 *     type: object
 *     properties:
 *       item:
 *         type: string
 *         description: nombre del articulo
 *       itemInfo:
 *         type: string
 *         description: informacion del producto
 *       price:
 *         type: number
 *         format: float
 *         description: precio del producto
 *       amount:
 *         type: integer
 *         description: cantidad del producto
 *     example:
 *      item: "surron x-pro 1000"
 *      itemInfo: "electric bike"
 *      price: 4000
 *      amount: 1
 *     required:
 *       - item
 *       - price
 *       - amount
 * 
 * 
 *   PaymentRequest:
 *     type: object
 *     properties:
 *       items:
 *         type: array
 *         items:
 *           $ref: '#/components/schemas/Item'
 *       success:
 *         type: string
 *         format: uri
 *         example: "http://localhost:4242/payment_items"
 *       cancel:
 *         type: string
 *         format: uri
 *         example: "http://localhost:4242/payment_items"
 *     required:
 *       - items
 *       - success
 *       - cancel
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    subscriptions:
 *      type: object
 *      properties:
 *        idPrice:
 *          type: string
 *          description: id del producto en stripe
 *        success:
 *          type: string
 *          description: url para finalizar el pago
 *        cancel:
 *          type: string
 *          description: url para cancelar el pago
 *      example:
 *        idPrice: "price_1PfWjpCPAgcnoLpT4MqJC8cl"
 *        success: "http://localhost:4242/succes_payment"
 *        cancel: "http://localhost:4242/cancel_payment"
 *      required:
 *        - idPrice
 *        - success
 *        - cancel
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    responseStripe:
 *      type: object
 *      properties:
 *        url:
 *          type: string
 *          description: url a la pasarela de pagos
 *      example:
 *        url: "https://checkout.stripe.com/c/pay/cs_teOOecWmOmL8aaWfxh"
 */

/**
 * @swagger
 * /payment_items:
 *   post:
 *     summary: Procesar pagos por productos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PaymentRequest'
 *     responses:
 *       '200':
 *         description: Pago procesado exitosamente
 *         content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/responseStripe'
 *       '400':
 *         description: Solicitud inválida
 */

/**
 * @swagger
 * /payment_subscription:
 *  post:
 *    summary: Procesar pagos por subscripcion
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/subscriptions'
 *    responses:
 *      200:
 *        description: se crea una session exitosamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/responseStripe'
 *      400:
 *        description: ocurrio un error en la peticion
 */