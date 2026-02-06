import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { growthServices, itServices } from "@/lib/services";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://practicestack.com.au";
  const staticRoutes = [
    "",
    "/services",
    "/industries",
    "/pricing",
    "/about",
    "/resources",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const serviceRoutes = [
    ...itServices.map((service) => `/services/it/${service.slug}`),
    ...growthServices.map((service) => `/services/web/${service.slug}`),
  ];

  const posts = await getAllPosts();
  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/resources/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })),
    ...serviceRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })),
    ...postRoutes,
  ];
}
