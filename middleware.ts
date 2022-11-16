import { routes } from '@utility/constants/enums';
import { NextResponse, NextRequest } from 'next/server';

export const middleware = async (req: NextRequest) => {
  const { pathname } = req.nextUrl;
  if (!Object.values(routes).includes(pathname as routes)) NextResponse.redirect(routes.dashboard);
  NextResponse.next();
};
