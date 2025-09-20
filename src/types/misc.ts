export interface LocalizedString {
  en: string;
  ar: string;
}

export interface Price {
  beforeDiscount: number;
  discountPercentage: number;
  discount: number;
  afterDiscount: number;
}
