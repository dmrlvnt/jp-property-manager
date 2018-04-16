export class Price {
  priceId: Number;
  date: Date;
  amount: Number;
  constructor(priceId: Number, date: Date, amount: Number){
    this.priceId = priceId;
    this.date = date;
    this.amount = amount;
  }
}
