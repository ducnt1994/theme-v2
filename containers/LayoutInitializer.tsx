import { redirect, notFound } from "next/navigation";
import { store as rootStore } from "@/redux/store";
import { getLayoutBySlugInitiate, layoutApi } from "@/features/layout/layoutApi";
import PageBuilder from "@/containers/PageBuilder";
import { headers } from "next/headers";

async function fetchLayoutData(slug: string) {
  const store = rootStore();
  await store.dispatch(getLayoutBySlugInitiate(slug));
  const state = store.getState();
  return layoutApi.endpoints.getLayoutBySlug.select(slug)(state)?.data;
}

async function handleLayoutRedirect(domain_custom?: string) {
  if (domain_custom) {
    const headersList = await headers();
    const pathname = headersList.get("x-invoke-path") || "";
    const search = headersList.get("x-search") || "";
    const hash = headersList.get("x-hash") || "";
    const suffix = `${pathname}${search}${hash}`;
    const targetDomain = `https://${domain_custom}`;
    const redirectUrl = `${targetDomain}${suffix}`;
    redirect(redirectUrl);
  }
}

function handleLayoutStatus(is_active?: boolean) {
  if (is_active === false) {
    notFound();
  }
}

interface Props {
  slug: string;
}

export default async function LayoutInitializer({ slug }: Props) {
  const data = await fetchLayoutData(slug);
  const fakeData = [
    {
      is_active: true,
      code: "banner_top",
      name: "BannerTop2"
    },
    {
      is_active: true,
      code: "header",
      name: "Header1"
    },
    {
      is_active: true,
      code: "banner",
      name: "Banner2"
    },
    {
      is_active: true,
      code: "footer",
      name: "Footer3"
    }
  ]
  // await handleLayoutRedirect(data?.domain_custom);
  // handleLayoutStatus(data?.is_active);

  return <PageBuilder layout={fakeData || []} />;
}
