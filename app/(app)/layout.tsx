import { CartStoreProvider } from "@/lib/store/cart-store-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { SanityLive } from "@/sanity/lib/live";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/Header";
import { ChatStoreProvider } from "@/lib/store/chat-store-provider";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <CartStoreProvider>
        <ChatStoreProvider>
        <Header />
        <main>{children}</main>
        <Toaster position="bottom-center" />
        <SanityLive />
        </ChatStoreProvider>
      </CartStoreProvider>
    </ClerkProvider>
  );
}

export default AppLayout;