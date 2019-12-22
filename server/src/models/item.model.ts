import { AddressModel } from "./address.model";
import { BillingInformationModel } from './billing-information.model';

export interface ItemModel {
  id?: string;
  firstName: string;
  lastName: string;
  address: AddressModel;
  billing: BillingInformationModel;
}
