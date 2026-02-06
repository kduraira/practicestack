import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import ServicePage from "@/components/ServicePage";
import { serviceSchema } from "@/lib/schema";
import { itServices } from "@/lib/services";

interface ServiceDetailProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return itServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServiceDetailProps): Promise<Metadata> {
  const service = itServices.find((item) => item.slug === params.slug);
  if (!service) {
    return {};
  }
  return {
    title: service.title,
    description: service.summary,
    openGraph: {
      title: service.title,
      description: service.summary,
    },
  };
}

export default function ITServicePage({ params }: ServiceDetailProps) {
  const service = itServices.find((item) => item.slug === params.slug);
  if (!service) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: service.title,
          description: service.summary,
        })}
      />
      <ServicePage
        title={service.title}
        summary={service.summary}
        who={service.who}
        problems={service.problems}
        included={service.included}
        response={service.response}
        pricing={service.pricing}
        categoryLabel="IT Service"
      />
    </>
  );
}
