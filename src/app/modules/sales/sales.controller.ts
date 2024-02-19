import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { SalesServices } from './sales.services';
import catchAsync from '../../utils/catchAsync';

const createSales = catchAsync(async (req, res) => {
  const newSales = req.body;
  const result = await SalesServices.createSalesIntoDB(newSales);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Sales created successfully',
    data: result,
  });
});

const deleteSales = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await SalesServices.deleteSellInToDb(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Sales Deleted successfully',
    data: result,
  });
});

const getAllSales = catchAsync(async (req, res) => {
  const { email, role } = req.params;
  const result = await SalesServices.getAllSalesIntoDB(req.query, email, role);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Sales retrieved successfully',
    data: result,
  });
});

export const SalesControllers = { createSales, getAllSales, deleteSales };
