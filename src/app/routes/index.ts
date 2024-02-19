import { Router } from 'express';
// import { UserRoutes } from '../modules/user/user.route';
import { ProductRoutes } from '../modules/product/product.route';
import { SalesRoutes } from '../modules/sales/sales.route';
import { UserRoutes } from '../modules/user/user.route';

const router = Router();

const moduleRoute = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/sales',
    route: SalesRoutes,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
