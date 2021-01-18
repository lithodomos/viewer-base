import { removeDirectivesFromDocument } from '@apollo/client/utilities';
import { CurrencyCode } from '../graphql/globalTypes';
import { getTotalAmount } from './getTotalAmount';

test('it correctly calculates the total amount', () => {
  expect(
    getTotalAmount({
      items: [
        { purchaseInfo: { price: 3.49, currencyCode: CurrencyCode.USD } },
        {
          purchaseInfo: { price: 6.99, currencyCode: CurrencyCode.USD },
          count: 3,
        },
        {
          purchaseInfo: { price: 6.99, currencyCode: CurrencyCode.USD },
          count: 6,
        },
        {
          purchaseInfo: { price: 6.99, currencyCode: CurrencyCode.USD },
          count: 10,
        },
        {
          purchaseInfo: { price: 13.99, currencyCode: CurrencyCode.USD },
          count: 2,
        },
        {
          purchaseInfo: { price: 13.99, currencyCode: CurrencyCode.USD },
          count: 7,
        },
        {
          purchaseInfo: { price: 13.99, currencyCode: CurrencyCode.USD },
          count: 11,
        },
        {
          purchaseInfo: { price: 13.99, currencyCode: CurrencyCode.USD },
          count: 15,
        },
        {
          purchaseInfo: { price: 13.99, currencyCode: CurrencyCode.USD },
          count: 41,
        },
        {
          purchaseInfo: { price: 13.99, currencyCode: CurrencyCode.USD },
          count: 85,
        },
      ],
    })
  ).toBe(2388.69);
});

test('it correctly calculates the total amount with a discount', () => {
  expect(
    getTotalAmount({
      items: [
        { purchaseInfo: { price: 3.49, currencyCode: CurrencyCode.USD } },
        {
          purchaseInfo: { price: 6.99, currencyCode: CurrencyCode.USD },
          count: 43,
        },
        {
          purchaseInfo: { price: 13.99, currencyCode: CurrencyCode.USD },
          count: 85,
        },
      ],
      discountRate: 5,
    })
  ).toBe(1418.49);
});

test('it correctly calculates the total amount with a discount', () => {
  expect(
    getTotalAmount({
      items: [
        { purchaseInfo: { price: 3.49, currencyCode: CurrencyCode.USD } },
        {
          purchaseInfo: { price: 6.99, currencyCode: CurrencyCode.USD },
          count: 43,
        },
        {
          purchaseInfo: { price: 13.99, currencyCode: CurrencyCode.USD },
          count: 85,
        },
      ],
      discountRate: 10,
    })
  ).toBe(1343.76);
});

test('it correctly calculates the total amount with a discount', () => {
  expect(
    getTotalAmount({
      items: [
        { purchaseInfo: { price: 3.49, currencyCode: CurrencyCode.USD } },
        {
          purchaseInfo: { price: 6.99, currencyCode: CurrencyCode.USD },
          count: 43,
        },
        {
          purchaseInfo: { price: 13.99, currencyCode: CurrencyCode.USD },
          count: 85,
        },
      ],
      discountRate: 15,
    })
  ).toBe(1269.04);
});

test('it correctly calculates the total amount with a discount', () => {
  expect(
    getTotalAmount({
      items: [
        { purchaseInfo: { price: 3.49, currencyCode: CurrencyCode.USD } },
        {
          purchaseInfo: { price: 6.99, currencyCode: CurrencyCode.USD },
          count: 43,
        },
        {
          purchaseInfo: { price: 13.99, currencyCode: CurrencyCode.USD },
          count: 85,
        },
      ],
      discountRate: 20,
    })
  ).toBe(1194.31);
});

test('it correctly calculates the total amount with a discount', () => {
  expect(
    getTotalAmount({
      items: [
        { purchaseInfo: { price: 3.49, currencyCode: CurrencyCode.USD } },
        {
          purchaseInfo: { price: 6.99, currencyCode: CurrencyCode.USD },
          count: 43,
        },
        {
          purchaseInfo: { price: 13.99, currencyCode: CurrencyCode.USD },
          count: 85,
        },
      ],
      discountRate: 25,
    })
  ).toBe(1119.59);
});

test('it correctly calculates the total amount with a discount', () => {
  expect(
    getTotalAmount({
      items: [
        { purchaseInfo: { price: 3.49, currencyCode: CurrencyCode.USD } },
        {
          purchaseInfo: { price: 6.99, currencyCode: CurrencyCode.USD },
          count: 43,
        },
        {
          purchaseInfo: { price: 13.99, currencyCode: CurrencyCode.USD },
          count: 85,
        },
      ],
      discountRate: 30,
    })
  ).toBe(1044.86);
});

test('it correctly calculates the total amount with a discount', () => {
  expect(
    getTotalAmount({
      items: [
        { purchaseInfo: { price: 3.49, currencyCode: CurrencyCode.USD } },
        {
          purchaseInfo: { price: 6.99, currencyCode: CurrencyCode.USD },
          count: 43,
        },
        {
          purchaseInfo: { price: 13.99, currencyCode: CurrencyCode.USD },
          count: 85,
        },
      ],
      discountRate: 33,
    })
  ).toBe(1000.03);
});

test('it correctly calculates the total amount with a discount', () => {
  expect(
    getTotalAmount({
      items: [
        { purchaseInfo: { price: 3.49, currencyCode: CurrencyCode.USD } },
        {
          purchaseInfo: { price: 6.99, currencyCode: CurrencyCode.USD },
          count: 43,
        },
        {
          purchaseInfo: { price: 13.99, currencyCode: CurrencyCode.USD },
          count: 85,
        },
      ],
      discountRate: 40,
    })
  ).toBe(895.41);
});

test('it correctly calculates the total amount with a discount', () => {
  expect(
    getTotalAmount({
      items: [
        { purchaseInfo: { price: 3.49, currencyCode: CurrencyCode.USD } },
        {
          purchaseInfo: { price: 6.99, currencyCode: CurrencyCode.USD },
          count: 43,
        },
        {
          purchaseInfo: { price: 13.99, currencyCode: CurrencyCode.USD },
          count: 85,
        },
      ],
      discountRate: 50,
    })
  ).toBe(747.24);
});

test('it correctly calculates the total amount with a discount', () => {
  expect(
    getTotalAmount({
      items: [
        { purchaseInfo: { price: 3.49, currencyCode: CurrencyCode.USD } },
        {
          purchaseInfo: { price: 6.99, currencyCode: CurrencyCode.USD },
          count: 43,
        },
        {
          purchaseInfo: { price: 13.99, currencyCode: CurrencyCode.USD },
          count: 85,
        },
      ],
      discountRate: 60,
    })
  ).toBe(597.8);
});
