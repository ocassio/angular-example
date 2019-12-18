export interface BillingInformationModel {
  cardType: string;
  cardNumber: string;
  cvc: string;
  expiration: {
    month: number;
    year: number;
  }
}
