import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const res = NextResponse.next();

  // Xóa cookie giỏ hàng khi vào trang /checkout
  if (url.pathname === '/checkout') {
    res.cookies.delete('cartId'); // Xóa cookie giỏ hàng
  }

  // Redirect nếu truy cập /shop hoặc /hop-banh-trung-thu mà chưa có /null
  if (url.pathname === '/shop' && !url.pathname.endsWith('/null')) {
    return NextResponse.redirect(new URL('/shop/null', req.url));
  }

  if (url.pathname === '/hop-banh-trung-thu' && !url.pathname.endsWith('/null')) {
    return NextResponse.redirect(new URL('/hop-banh-trung-thu/null', req.url));
  }

  return res;
}

export const config = {
  matcher: ['/shop', '/hop-banh-trung-thu', '/checkout'],
};
