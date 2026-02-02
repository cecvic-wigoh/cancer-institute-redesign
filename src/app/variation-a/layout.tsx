import Header from "@/components/variation-a/Header";
import Footer from "@/components/variation-a/Footer";
import MockupNav from "@/components/MockupNav";

export default function VariationALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
