import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { blurDataUrl, imageLibrary } from "@/lib/images";

interface ResourcePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: ResourcePageProps): Promise<Metadata> {
  const { slug } = params;
  try {
    const post = await getPostBySlug(slug);
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: "article",
      },
    };
  } catch {
    return {};
  }
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = params;
  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <div className="section section-light">
      <div className="container-wrapper grid gap-10 lg:grid-cols-[1fr_0.45fr]">
        <article className="space-y-6">
          <div className="space-y-3">
            <p className="eyebrow">{post.category}</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span>{post.date}</span>
              <span>{post.readingTime}</span>
            </div>
          </div>
          <div
            className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-strong:text-slate-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
        <aside className="space-y-6">
          <div className="card-muted">
            <Image
              src={imageLibrary.caseStudy.src}
              alt={imageLibrary.caseStudy.alt}
              width={imageLibrary.caseStudy.width}
              height={imageLibrary.caseStudy.height}
              className="h-full w-full rounded-2xl object-cover"
              placeholder="blur"
              blurDataURL={blurDataUrl}
            />
          </div>
          <div className="card">
            <p className="text-sm font-semibold text-slate-900">
              Want a tailored plan?
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Book a consult to discuss your clinic&apos;s IT or growth priorities.
            </p>
            <Link href="/contact?intent=consult" className="btn btn-primary mt-4">
              Book a consult
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
