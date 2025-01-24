import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {AppSidebar} from '@/components/app-sidebar';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import "./globals.css";
import FooterSection from '@/components/ui/footer-section';
export const experimental_ppr = true;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Garden Bistro",
  description: "mmm yummy yummy in my tummyyy",
};


/*export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}*/

export default function RootLayout({ 
children}: { children: React.ReactNode}) {
  return (
    <html>
      <body className="h-screen bg-[#003B36]">
      <SidebarProvider>
        <AppSidebar />
        <div className="flex shrink-0 gap-2 bg-[#AAD922] min-h-screen px-4 ">
        <div className="flex h-16 shrink-0 items-start gap-2 bg-[#AAD922] px-2 pt-4 ">
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
