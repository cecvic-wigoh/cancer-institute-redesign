import Header from "@/components/variation-c/Header";
import Footer from "@/components/variation-c/Footer";

export default function VariationCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
