import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
  publicRoutes: ["/api/uploadthing", "/api/socket"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
