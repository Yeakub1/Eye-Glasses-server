import express from 'express';
import { SalesZodValidations } from './sales.validation';
import { SalesControllers } from './sales.controller';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router();

router.post(
  '/create-sales',
  validateRequest(SalesZodValidations.createSalesValidationSchema),
  SalesControllers.createSales,
);

router.get('/all-sales/:email/:role', SalesControllers.getAllSales);
router.delete('/delete-sales/:id', SalesControllers.deleteSales);

export const SalesRoutes = router;
