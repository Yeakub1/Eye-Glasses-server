import httpStatus from 'http-status';
import QueryBuilder from '../../buillder/buildQuery';
import { User } from '../user/user.model';
import { TEyeglasses } from './product.interface';
import { Eyeglass } from './product.model';
import AppError from '../../errors/appErrors';

const createProductIntoDB = async (payload: TEyeglasses) => {
  const userEmail = payload.userEmail;
  const userExist = await User.findOne({ email: userEmail });
  if (!userExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }
  const result = await Eyeglass.create(payload);
  return result;
};

const getAllProductIntoDB = async (
  query: Record<string, unknown>,
  email: string,
  role: string,
) => {
 
  const minPrice = query.minPrice as number;
  const maxPrice = query.maxPrice as number;
  const ProductSearchableFields = [
    'productName',
    'frameMaterial',
    'productQuantity',
    'frameShape',
    'lensType',
    'brand',
    'gender',
    'color',
  ];
  const productQuery = new QueryBuilder(Eyeglass.find(), query)
    .search(ProductSearchableFields)
    .filter()
    .filterByPriceRange(minPrice, maxPrice)
    .paginate();

  let result;
  if (role === 'manager') {
    result = await productQuery.modelQuery;
  } else if (role === 'user') {
  
    result = await productQuery.modelQuery.find({ userEmail: email });
  } else {
    throw new AppError(httpStatus.BAD_REQUEST, 'Invalid user role');
  }
  return result;
};

// const getAllProductIntoDB = async (query: Record<string, unknown>) => {
//   const minPrice = query.minPrice as number;
//   const maxPrice = query.maxPrice as number;
//   const ProductSearchableFields = [
//     'productName',
//     'color',
//     'lensType',
//     'brand',
//     'gender',
//   ];
//   const productQuery = new QueryBuilder(Eyeglass.find(), query)
//     .search(ProductSearchableFields)
//     .filter()
//     .filterByPriceRange(minPrice, maxPrice);
//   const result = await productQuery.modelQuery;
//   return result;
// };
const getSingleProductIntoDB = async (id: string) => {
  const result = await Eyeglass.findById(id);
  return result;
};

const deleteProductIntoDB = async (id: string) => {
  const result = await Eyeglass.findByIdAndDelete(id);
  return result;
};

const deletMultipullShoesIntoDb = async (ids: string[]) => {
  const result = await Eyeglass.deleteMany({ _id: { $in: ids } });
  return result;
};

const updateProductIntoDB = async (
  id: string,
  payload: Partial<TEyeglasses>,
) => {
  const result = await Eyeglass.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const EyeGlassServices = {
  createProductIntoDB,
  getAllProductIntoDB,
  deleteProductIntoDB,
  updateProductIntoDB,
  getSingleProductIntoDB,
  deletMultipullShoesIntoDb
};
