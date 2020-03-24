import { AppCurrencyPipe } from './app-currency.pipe';

describe('AppCurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new AppCurrencyPipe();
    expect(pipe).toBeTruthy();
  });

  it('Is currency formatted correctly', () => {
    const pipe = new AppCurrencyPipe();
    const price = 100;
    const expectedString = 'US $100';
    const actualString = pipe.transform(price);

    expect(actualString).toEqual(expectedString);
  });
});
