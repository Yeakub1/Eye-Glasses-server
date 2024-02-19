import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import { EyeGlassServices } from "./product.services";
import catchAsync from "../../utils/catchAsync";

const createProduct = catchAsync(async (req, res) => {
  const newUser = req.body;
  const result = await EyeGlassServices.createProductIntoDB(newUser);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product Added successfully",
    data: result,
  });
});

const getSingleProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await EyeGlassServices.getSingleProductIntoDB(id);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Single product retrieved successfully',
    data: result,
  });
});

const getAllProduct = catchAsync(async (req, res) => {
    const { email, role } = req.params;
    const result = await EyeGlassServices.getAllProductIntoDB(
      req.query,
      email,
      role,
    );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Products retrieved successfully",
    data: result,
  });
});

const deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await EyeGlassServices.deleteProductIntoDB(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Products deleted successfully",
    data: result,
  });
});

const deleteMultipullShoes = catchAsync(async (req, res) => {
  const ids = req.body;
  const result = await EyeGlassServices.deletMultipullShoesIntoDb(ids);
  
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All Glass are deleted successfully',
    data: result,
  });
});

const updateProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const newProduct = req.body;
  const result = await EyeGlassServices.updateProductIntoDB(id, newProduct);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Products Updated successfully",
    data: result,
  });
});

export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
  deleteMultipullShoes,
};
