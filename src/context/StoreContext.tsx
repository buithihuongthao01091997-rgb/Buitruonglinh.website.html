import React, { createContext, useContext, useEffect, useState } from 'react';
import { PageId, SHOP_PRODUCTS, ShopProduct } from '../data/siteData';

export interface CartEntry {
  product: ShopProduct;
  quantity: number;
}

interface StoreContextValue {
  currentPage: PageId;
  navigate: (page: PageId, scrollToId?: string) => void;
  cartQuantities: Record<number, number>;
  cartItems: CartEntry[];
  cartCount: number;
  cartTotal: number;
  addToCart: (productId: number) => void;
  updateQuantity: (productId: number, delta: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  toastMessage: string | null;
  dismissToast: () => void;
  showToast: (message: string) => void;
}

const StoreContext = createContext<StoreContextValue | null>(null);

const CART_STORAGE_KEY = 'btl_official_cart_v1';

const VALID_PAGES: PageId[] = ['home', 'about', 'music', 'schedule', 'shop'];

function getPageFromHash(): PageId {
  if (typeof window === 'undefined') return 'home';
  const raw = window.location.hash.replace('#', '').toLowerCase() as PageId;
  return VALID_PAGES.includes(raw) ? raw : 'home';
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromHash);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [cartQuantities, setCartQuantities] = useState<Record<number, number>>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartQuantities));
    } catch {
      // Ignore storage quota errors
    }
  }, [cartQuantities]);

  useEffect(() => {
    const onHashChange = () => {
      setCurrentPage(getPageFromHash());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: 'buitruonglinh | Home',
      about: 'buitruonglinh | About',
      music: 'buitruonglinh | Music',
      schedule: 'buitruonglinh | Schedule',
      shop: 'buitruonglinh | Shop',
    };
    document.title = titles[currentPage];
  }, [currentPage]);

  useEffect(() => {
    if (!toastMessage) return;
    const timer = window.setTimeout(() => setToastMessage(null), 2800);
    return () => window.clearTimeout(timer);
  }, [toastMessage]);

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  const dismissToast = () => setToastMessage(null);

  const navigate = (page: PageId, scrollToId?: string) => {
    setCurrentPage(page);
    if (window.location.hash !== `#${page}`) {
      window.history.pushState(null, '', `#${page}`);
    }
    if (scrollToId) {
      window.setTimeout(() => {
        const target = document.getElementById(scrollToId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  const addToCart = (productId: number) => {
    const product = SHOP_PRODUCTS.find((p) => p.id === productId);
    if (!product || product.status !== 'available') return;

    setCartQuantities((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
    showToast(`Đã thêm "${product.name}" vào giỏ hàng`);
  };

  const updateQuantity = (productId: number, delta: number) => {
    setCartQuantities((prev) => {
      const nextQty = (prev[productId] || 0) + delta;
      if (nextQty <= 0) {
        const copy = { ...prev };
        delete copy[productId];
        return copy;
      }
      return { ...prev, [productId]: nextQty };
    });
  };

  const removeFromCart = (productId: number) => {
    setCartQuantities((prev) => {
      const copy = { ...prev };
      delete copy[productId];
      return copy;
    });
  };

  const clearCart = () => {
    setCartQuantities({});
  };

  const cartItems: CartEntry[] = SHOP_PRODUCTS.filter(
    (p) => p.status === 'available' && (cartQuantities[p.id] || 0) > 0
  ).map((product) => ({
    product,
    quantity: cartQuantities[product.id],
  }));

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <StoreContext.Provider
      value={{
        currentPage,
        navigate,
        cartQuantities,
        cartItems,
        cartCount,
        cartTotal,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        toastMessage,
        dismissToast,
        showToast,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore must be used inside StoreProvider');
  return ctx;
}
