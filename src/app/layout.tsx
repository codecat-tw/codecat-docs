import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: {
    template: "%s | 程式貓文件",
    default: "程式貓文件中心",
  },
  description:
    "閱讀所有程式貓文件，包含更新、教學、範例等各專案的知識都匯集在這裡。",
};

const banner = (
  <Banner storageKey="tsw-1">
    程式貓正在招募團隊夥伴 🎉
  </Banner>
);
const navbar = (
  <Navbar
    logo={<b>程式貓文件中心</b>}
    // ... Your additional navbar options
  />
);
const footer = <Footer>Copyright © 2024-2025 CodeCat team.</Footer>;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      // Not required, but good for SEO
      lang="zh-Hant"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <GoogleAnalytics gaId="G-ZD4K14S8LC" />
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          // docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
