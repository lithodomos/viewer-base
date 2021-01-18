import Dinero from "dinero.js";

interface PurchaseInfo {
  currencyCode?: string | null;
  price?: number | null;
}

type Args = {
  items: Array<{
    purchaseInfo: PurchaseInfo | null;
    count?: number;
  }>;
  discountRate?: number;
};

// TODO: refactor if we support multiple currencies
export function getTotalAmount({ items, discountRate = 0 }: Args): number {
  const fraction = (100 - discountRate) / 100;

  const totalAmount = items.reduce((accum, item) => {
    const amount = (item.purchaseInfo?.price || 0) * 100;
    const count = item.count || 1;

    const amountTimesCount = Dinero({ amount })
      .multiply(fraction)
      .multiply(count);

    return Dinero({ amount: accum }).add(amountTimesCount).getAmount();
  }, 0);

  return Dinero({ amount: totalAmount }).toUnit();
}
