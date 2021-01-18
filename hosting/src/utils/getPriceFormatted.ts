import Dinero from "dinero.js";

interface PurchaseInfoArgs {
  currencyCode?: string | null;
  price?: number | null;
}

export function getPriceFormatted(
  purchaseInfo: PurchaseInfoArgs | null
): string {
  const currency = purchaseInfo?.currencyCode || "USD";

  // Dinero works with cents
  const amount = (purchaseInfo?.price || 0) * 100;

  return `${currency} ${Dinero({
    // When you multiply by 100, there is a chance it would add .000000001 etc to the end
    amount: parseInt(amount.toString()),
    precision: 2,
  }).toFormat("0,0.00")}`;
}
