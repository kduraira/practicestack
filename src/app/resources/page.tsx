import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { blurDataUrl, imageLibrary } from "@/lib/images";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides and insights on managed IT, clinic websites, SEO, and safe AI adoption.",
};

export default async function ResourcesPage() {
  const posts = await getAllPosts();

  return (
    <div>
      <section className="section section-muted">
        <div className="container-wrapper grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="eyebrow">Resources</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Practical guidance for clinic teams.
            </h1>
            <p className="text-lg text-slate-600">
              Articles on stabilising IT, improving clinic marketing, and adopting
              AI safely. Built for dental and healthcare practices across Victoria.
            </p>
          </div>
          <div className="card-muted">
            <Image
              src={imageLibrary.growth.src}
              alt={imageLibrary.growth.alt}
              width={imageLibrary.growth.width}
              height={imageLibrary.growth.height}
              className="h-full w-full rounded-2xl object-cover"
              placeholder="blur"
              blurDataURL={blurDataUrl}
            />
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-wrapper grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="card card-hover">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-emerald-700">
                <span>{post.category}</span>
                <span>{post.readingTime}</span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold">{post.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
              <p className="mt-4 text-xs text-slate-500">{post.date}</p>
              <Link
                href={`/resources/${post.slug}`}
                className="mt-6 inline-flex items-center text-sm font-semibold text-emerald-700"
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
