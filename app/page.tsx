import { createStore } from "@/redux/store";
import { getLayoutBySlugInitiate, layoutApi } from "@/features/layout/layoutApi";
import PageBuilder from "@/containers/PageBuilder";
import BannerExtra1 from "@/components/page-builders/banners/extra/BannerExtra1";

export default async function HomePage() {
  const store = createStore();

  // 👇 Gọi RTK Query ở SSR
  await store.dispatch(getLayoutBySlugInitiate("home"));

  // 👇 Lấy lại dữ liệu từ store sau khi gọi
  const state = store.getState();
  const layoutResult = layoutApi.endpoints.getLayoutBySlug.select("home")(state);
  const layout = layoutResult?.data?.layout ?? null;

  return <BannerExtra1/>

  return <PageBuilder layout={layout?.sections || []} />;
}