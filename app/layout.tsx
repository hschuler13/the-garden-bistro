import type { Metadata } from "next";
import {AppSidebar} from '@/components/ui/app-sidebar';
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import "./globals.css";
import FooterSection from '@/components/ui/footer-section';
export const experimental_ppr = true;

export const metadata: Metadata = {
  title: "The Garden Bistro",
  description: "From our garden, to your plate",
};

export default function RootLayout({ 
children}: { children: React.ReactNode}) {
  return (
    <html>
      <body className="h-screen bg-[#003B36]">
      <SidebarProvider>
        <AppSidebar/>
        <div className="flex shrink-0 gap-2 bg-[#AAD922] min-h-screen px-4 ">
        <div className="flex h-16 shrink-0 items-start gap-2 bg-[#AAD922]  pt-4 ">
          <SidebarTrigger className="-ml-1" />
        </div>
        </div>
        <div>
        {children}
        <FooterSection></FooterSection>
        </div>
      </SidebarProvider>  
      </body>
    </html>
  );
}
