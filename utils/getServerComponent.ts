export async function getServerComponent(type: string, name: string) {
  console.log("getServerComponent", type, name);
  switch (type) {
    case "header":
      switch (name) {
        case "Header1":
          return (await import("@/components/page-builders/headers/Header1")).default;
        case "Header2":
          return (await import("@/components/page-builders/headers/Header2")).default;
        default:
          return null;
      }

    case "banner_top":
      switch (name) {
        case "BannerTop1":
          return (await import("@/components/page-builders/banners/top/BannerTop1")).default;
        case "BannerTop2":
          return (await import("@/components/page-builders/banners/top/BannerTop2")).default;
        default:
          return null;
      }

    case "banner":
      switch (name) {
        case "Banner1":
          return (await import("@/components/page-builders/banners/main/Banner1")).default;
        case "Banner2":
          return (await import("@/components/page-builders/banners/main/Banner2")).default;
        case "Banner3":
          return (await import("@/components/page-builders/banners/main/Banner3")).default;
        default:
          return null;
      }
    case "footer":
      switch (name) {
        case "Footer1":
          return (await import("@/components/page-builders/footers/Footer1")).default;
        case "Footer2":
          return (await import("@/components/page-builders/footers/Footer2")).default;
        case "Footer3":
          return (await import("@/components/page-builders/footers/Footer3")).default;
        default:
          return null;
      }
    default:
      return null;
  }
}