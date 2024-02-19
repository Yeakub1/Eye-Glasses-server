import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { ProductValidation } from "./product.validation";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post(
  "/add-product",
  validateRequest(ProductValidation.createEyeglassesSchema),
  ProductController.createProduct
);
router.get('/single-product/:id', ProductController.getSingleProduct);
// router.get("/all-products", ProductController.getAllProduct);
router.get('/all-products/:email/:role', ProductController.getAllProduct);
router.delete("/delete-product/:id", ProductController.deleteProduct);

router.post('/all-delete', ProductController.deleteMultipullShoes);
router.put(
  '/update-product/:id',
  validateRequest(ProductValidation.updateValidatinEyeglassesSchema),
  ProductController.updateProduct,
);

export const ProductRoutes = router;
