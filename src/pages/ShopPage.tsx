import React, { useState } from 'react';
import { CheckCircle2, ChevronLeft, Landmark, Banknote, Trash2 } from 'lucide-react';
import {
  formatVND,
  SHOP_PRODUCTS,
  ShopProduct,
} from '../data/siteData';
import { CartEntry, useStore } from '../context/StoreContext';
import { ResilientImage } from '../components/ResilientImage';

type ShopViewMode = 'shop' | 'checkout' | 'confirmed';

interface OrderReceipt {
  orderCode: string;
  customerName: string;
  phone: string;
  address: string;
  paymentMethod: 'bank' | 'cash';
  items: CartEntry[];
  totalAmount: number;
  totalQuantity: number;
}

export function ShopPage() {
  const {
    cartItems,
    cartCount,
    cartTotal,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    showToast,
  } = useStore();

  const [viewMode, setViewMode] = useState<ShopViewMode>('shop');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'bank' | 'cash'>('cash');
  const [formError, setFormError] = useState<string | null>(null);
  const [receipt, setReceipt] = useState<OrderReceipt | null>(null);

  const albums = SHOP_PRODUCTS.filter((p) => p.category === 'album');
  const merchandise = SHOP_PRODUCTS.filter((p) => p.category === 'merchandise');

  const startCheckout = () => {
    if (cartCount === 0) {
      showToast('Giỏ hàng đang trống!');
      return;
    }
    setFormError(null);
    setViewMode('checkout');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const backToShop = () => {
    setViewMode('shop');
    setFormError(null);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = customerName.trim();
    const trimmedPhone = customerPhone.trim();
    const trimmedAddress = customerAddress.trim();

    if (!trimmedName || !trimmedPhone || !trimmedAddress) {
      setFormError('Vui lòng điền đầy đủ họ tên, số điện thoại và địa chỉ giao hàng.');
      return;
    }

    if (!/^[0-9]{10,11}$/.test(trimmedPhone)) {
      setFormError('Số điện thoại hợp lệ cần gồm 10 đến 11 chữ số.');
      return;
    }

    const orderSnapshot: OrderReceipt = {
      orderCode: `BTL-${Math.floor(100000 + Math.random() * 900000)}`,
      customerName: trimmedName,
      phone: trimmedPhone,
      address: trimmedAddress,
      paymentMethod,
      items: cartItems,
      totalAmount: cartTotal,
      totalQuantity: cartCount,
    };

    setReceipt(orderSnapshot);
    clearCart();
    setCustomerName('');
    setCustomerPhone('');
    setCustomerAddress('');
    setPaymentMethod('cash');
    setFormError(null);
    setViewMode('confirmed');
    showToast('Đặt hàng thành công!');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const renderProductCard = (product: ShopProduct) => {
    const isAvailable = product.status === 'available';

    return (
      <article
        key={product.id}
        className="flex flex-col bg-[#0b1220] border border-white/[0.08] overflow-hidden text-center pb-5 transition-transform duration-200 hover:-translate-y-0.5"
      >
        <div className="w-full h-[270px] sm:h-[310px] bg-[#080e1a] flex items-center justify-center overflow-hidden">
          <ResilientImage
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="px-4 pt-4 flex-1 flex flex-col justify-between items-center">
          <div>
            <h3 className="text-[15px] font-bold tracking-[0.04em] text-white">
              {product.name}
            </h3>
            <p className="mt-1.5 mb-4 text-[#b8dcff] font-semibold text-[14px] tabular-nums">
              {product.priceLabel}
            </p>
          </div>

          <button
            type="button"
            disabled={!isAvailable}
            onClick={() => isAvailable && addToCart(product.id)}
            className={`px-5 py-3 text-[12px] font-bold tracking-wider uppercase transition-colors border-0 whitespace-nowrap ${
              isAvailable
                ? 'bg-[#b8dcff] text-[#050914] hover:bg-white cursor-pointer'
                : 'bg-[#555d6b] text-[#d1d5db] cursor-not-allowed'
            }`}
          >
            {product.buttonText}
          </button>
        </div>
      </article>
    );
  };

  if (viewMode === 'confirmed' && receipt) {
    return (
      <main className="w-[90%] max-w-[760px] mx-auto pt-[110px] pb-20">
        <div className="bg-[#0b1220] border border-white/15 rounded-lg p-6 sm:p-10">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2 className="w-7 h-7 text-[#b8dcff] shrink-0" />
            <div>
              <p className="text-[11px] font-bold tracking-[2px] text-[#b8dcff] uppercase tabular-nums">
                MÃ ĐƠN HÀNG: #{receipt.orderCode}
              </p>
              <h1 className="text-[22px] sm:text-[26px] font-bold text-white">
                ĐẶT HÀNG THÀNH CÔNG
              </h1>
            </div>
          </div>

          <p className="text-[#a9adc1] text-[14px] mb-6 leading-relaxed">
            Cảm ơn bạn đã ủng hộ sản phẩm chính hãng của Bùi Trường Linh. Đơn
            hàng mô phỏng của bạn đã được ghi nhận với thông tin bên dưới.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5 border-t border-b border-white/10 text-[13px] mb-6">
            <div>
              <p className="text-[#a9adc1] mb-1">Khách hàng</p>
              <p className="text-white font-semibold">{receipt.customerName}</p>
            </div>
            <div>
              <p className="text-[#a9adc1] mb-1">Số điện thoại</p>
              <p className="text-white font-semibold tabular-nums">
                {receipt.phone}
              </p>
            </div>
            <div>
              <p className="text-[#a9adc1] mb-1">Địa chỉ nhận hàng</p>
              <p className="text-white font-semibold">{receipt.address}</p>
            </div>
            <div>
              <p className="text-[#a9adc1] mb-1">Phương thức thanh toán</p>
              <p className="text-white font-semibold">
                {receipt.paymentMethod === 'bank'
                  ? 'Chuyển khoản ngân hàng (Mô phỏng)'
                  : 'Thanh toán khi nhận hàng (COD)'}
              </p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            {receipt.items.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex items-center justify-between gap-4 text-[13px]"
              >
                <span className="text-white font-medium">
                  {product.name}{' '}
                  <span className="text-[#a9adc1] tabular-nums">
                    × {quantity}
                  </span>
                </span>
                <span className="text-[#b8dcff] font-semibold tabular-nums">
                  {formatVND(product.price * quantity)}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/15 mb-8">
            <span className="text-[14px] font-bold text-white uppercase tracking-wider">
              TỔNG THANH TOÁN ({receipt.totalQuantity} SẢN PHẨM)
            </span>
            <span className="text-[18px] font-bold text-[#b8dcff] tabular-nums">
              {formatVND(receipt.totalAmount)}
            </span>
          </div>

          <button
            type="button"
            onClick={backToShop}
            className="w-full sm:w-auto px-6 py-3 bg-[#b8dcff] text-[#050914] font-bold text-[12px] tracking-wider uppercase hover:bg-white transition-colors cursor-pointer border-0"
          >
            QUAY LẠI CỬA HÀNG
          </button>
        </div>
      </main>
    );
  }

  if (viewMode === 'checkout') {
    return (
      <main className="w-[90%] max-w-[1280px] mx-auto pt-[104px] pb-20">
        <button
          type="button"
          onClick={backToShop}
          className="inline-flex items-center gap-1.5 mb-7 text-[#e8ecf3] hover:text-[#b8dcff] text-[13px] font-semibold bg-transparent border-0 cursor-pointer p-0 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          BACK TO SHOP
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Cột trái: Thông tin giao hàng */}
          <section>
            <h2 className="mb-6 text-[18px] font-bold tracking-[3px] text-white uppercase">
              THÔNG TIN GIAO HÀNG
            </h2>

            <form onSubmit={handleSubmitOrder} noValidate className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label
                  htmlFor="customer-name"
                  className="sm:w-[140px] shrink-0 text-[13px] font-bold text-white"
                >
                  HỌ VÀ TÊN:
                </label>
                <input
                  id="customer-name"
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Nguyễn Văn A"
                  className="w-full h-[40px] px-4 rounded-full bg-white text-[#050914] text-[14px] outline-none focus:ring-2 focus:ring-[#b8dcff]"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label
                  htmlFor="customer-phone"
                  className="sm:w-[140px] shrink-0 text-[13px] font-bold text-white"
                >
                  SỐ ĐIỆN THOẠI:
                </label>
                <input
                  id="customer-phone"
                  type="tel"
                  required
                  pattern="[0-9]{10,11}"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="0966445533"
                  className="w-full h-[40px] px-4 rounded-full bg-white text-[#050914] text-[14px] outline-none focus:ring-2 focus:ring-[#b8dcff] tabular-nums"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label
                  htmlFor="customer-address"
                  className="sm:w-[140px] shrink-0 text-[13px] font-bold text-white"
                >
                  ĐỊA CHỈ:
                </label>
                <input
                  id="customer-address"
                  type="text"
                  required
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  placeholder="Số nhà, đường, quận/huyện, tỉnh/thành phố"
                  className="w-full h-[40px] px-4 rounded-full bg-white text-[#050914] text-[14px] outline-none focus:ring-2 focus:ring-[#b8dcff]"
                />
              </div>

              {/* Phương thức thanh toán */}
              <div className="pt-4">
                <h3 className="text-[15px] font-bold tracking-[0.04em] text-white mb-3">
                  THANH TOÁN:
                </h3>

                <div className="flex flex-wrap gap-6">
                  <label className="inline-flex items-center gap-2 text-[13px] font-bold text-white cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="bank"
                      checked={paymentMethod === 'bank'}
                      onChange={() => setPaymentMethod('bank')}
                      className="accent-[#b8dcff]"
                    />
                    <Landmark className="w-4 h-4 text-[#b8dcff]" />
                    NGÂN HÀNG
                  </label>

                  <label className="inline-flex items-center gap-2 text-[13px] font-bold text-white cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={paymentMethod === 'cash'}
                      onChange={() => setPaymentMethod('cash')}
                      className="accent-[#b8dcff]"
                    />
                    <Banknote className="w-4 h-4 text-[#b8dcff]" />
                    TIỀN MẶT (COD)
                  </label>
                </div>
              </div>

              {paymentMethod === 'bank' && (
                <div className="mt-4 p-4 border border-[#39445b] bg-[#0b1220] text-[#b8dcff] text-[13px] leading-relaxed">
                  Chuyển khoản ngân hàng đang ở chế độ mô phỏng. Website chưa
                  kết nối cổng thanh toán thực tế.
                </div>
              )}

              {formError && (
                <p
                  role="alert"
                  className="text-red-300 bg-red-950/50 border border-red-400/40 px-4 py-2.5 text-[13px]"
                >
                  {formError}
                </p>
              )}

              <div className="pt-6 text-center sm:text-left">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#b8dcff] text-[#050914] font-bold text-[14px] tracking-wider uppercase hover:bg-white transition-colors cursor-pointer border-0"
                >
                  HOÀN THÀNH ĐƠN HÀNG
                </button>
              </div>
            </form>
          </section>

          {/* Cột phải: Tóm tắt đơn hàng */}
          <section>
            <div className="flex justify-between pb-4 mb-5 border-b border-white/15 text-[13px] font-bold tracking-wider uppercase text-white">
              <h3>SẢN PHẨM:</h3>
              <h3>SỐ LƯỢNG:</h3>
            </div>

            <div className="space-y-5">
              {cartItems.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="grid grid-cols-[56px_1fr_56px] items-center gap-4"
                >
                  <div className="w-[56px] h-[64px] rounded-lg overflow-hidden bg-[#0b1220] border border-white/10">
                    <ResilientImage
                      src={product.checkoutImage || product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[14px] font-bold text-white mb-1 truncate">
                      {product.name}
                    </h4>
                    <p className="text-[12px] text-[#b8dcff] tabular-nums">
                      {formatVND(product.price)}
                    </p>
                  </div>
                  <div className="text-center font-bold text-[14px] text-white tabular-nums">
                    {quantity}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-[1fr_auto_56px] items-center gap-4 mt-7 pt-4 border-t border-[#929db3] text-[13px]">
              <h3 className="font-bold text-white uppercase">TỔNG GIÁ TRỊ:</h3>
              <span className="font-bold text-[#b8dcff] text-[15px] tabular-nums">
                {formatVND(cartTotal)}
              </span>
              <span className="font-bold text-center text-white tabular-nums">
                {cartCount}
              </span>
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="w-[90%] max-w-[1280px] mx-auto pt-[106px] pb-16">
      {/* Khu vực ALBUM */}
      <section className="mb-16">
        <h2 className="mb-6 pb-3.5 border-b border-[#222c42] text-[18px] font-bold tracking-[3px] text-white uppercase">
          ALBUM
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map(renderProductCard)}
        </div>
      </section>

      {/* Khu vực MERCHANDISE */}
      <section className="mb-16">
        <h2 className="mb-6 pb-3.5 border-b border-[#222c42] text-[18px] font-bold tracking-[3px] text-white uppercase">
          MERCHANDISE
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {merchandise.map(renderProductCard)}
        </div>
      </section>

      {/* Khu vực GIỎ HÀNG */}
      <section id="cart" className="mt-16 mb-8 scroll-mt-[96px]">
        <h2 className="mb-5 pb-3.5 border-b border-[#222c42] text-[18px] font-bold tracking-[3px] text-white uppercase">
          GIỎ HÀNG
        </h2>

        <div className="p-5 sm:p-6 bg-[#0b1220] border border-white/[0.08]">
          {cartItems.length === 0 ? (
            <p className="text-[#a9adc1] text-[14px]">Giỏ hàng đang trống.</p>
          ) : (
            <div className="divide-y divide-[#222c42]">
              {cartItems.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <div>
                    <h3 className="text-[15px] font-bold text-white">
                      {product.name}
                    </h3>
                    <p className="text-[13px] text-[#b8dcff] mt-1 tabular-nums">
                      {formatVND(product.price)}
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => updateQuantity(product.id, -1)}
                      aria-label={`Giảm số lượng ${product.name}`}
                      className="w-8 h-8 border border-[#39445b] bg-transparent text-white hover:border-[#b8dcff] cursor-pointer"
                    >
                      -
                    </button>
                    <span className="min-w-[28px] text-center font-semibold text-white tabular-nums">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(product.id, 1)}
                      aria-label={`Tăng số lượng ${product.name}`}
                      className="w-8 h-8 border border-[#39445b] bg-transparent text-white hover:border-[#b8dcff] cursor-pointer"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => removeFromCart(product.id)}
                      aria-label={`Xóa ${product.name} khỏi giỏ`}
                      className="inline-flex items-center gap-1 ml-2 px-3 h-8 border border-[#39445b] bg-transparent text-[#ff9292] hover:border-[#ff9292] text-[12px] cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Xóa
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4">
          <h3 className="text-[16px] font-bold text-white">
            TỔNG TIỀN:{' '}
            <span className="text-[#b8dcff] tabular-nums ml-1">
              {formatVND(cartTotal)}
            </span>
          </h3>

          <button
            type="button"
            disabled={cartCount === 0}
            onClick={startCheckout}
            className={`px-6 py-3 text-[12px] font-bold tracking-wider uppercase border-0 transition-colors ${
              cartCount > 0
                ? 'bg-[#b8dcff] text-[#050914] hover:bg-white cursor-pointer'
                : 'bg-[#555d6b] text-[#ccc] cursor-not-allowed'
            }`}
          >
            THANH TOÁN
          </button>
        </div>
      </section>
    </main>
  );
}
