import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
   const res = NextResponse.next();

  // Xóa cookie giỏ hàng khi vào trang /checkout
  // if (url.pathname === '/checkout') {
  //   res.cookies.delete('cartId'); // Xóa cookie giỏ hàng
  // }
  return res;
}

export const config = {
  // matcher: ['/hop-banh-trung-thu'],
};
