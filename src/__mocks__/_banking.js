import _mock from './_mock';

// ----------------------------------------------------------------------

export const _bankingContacts = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.name.fullName(index),
  email: _mock.email(index),
  avatar: _mock.image.avatar(index + 4),
}));

export const _bankingQuickTransfer = [...Array(12)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.name.fullName(index),
  email: _mock.email(index),
  avatar: _mock.image.avatar(index),
}));

export const _bankingCreditCard = [
  {
    id: _mock.id(2),
    balance: 23432.03,
    cardType: 'mastercard',
    cardHolder: _mock.name.fullName(2),
    cardNumber: '**** **** **** 3640',
    cardValid: '11/22',
  },
  {
    id: _mock.id(3),
    balance: 18000.23,
    cardType: 'visa',
    cardHolder: _mock.name.fullName(3),
    cardNumber: '**** **** **** 8864',
    cardValid: '11/25',
  },
  {
    id: _mock.id(4),
    balance: 2000.89,
    cardType: 'mastercard',
    cardHolder: _mock.name.fullName(4),
    cardNumber: '**** **** **** 7755',
    cardValid: '11/22',
  },
];

//export const _bankingRecentTransitions = [
export const _recentReports = [
  {
    id: _mock.id(2),
    name: _mock.name.fullName(2),
    avatar: _mock.image.avatar(8),
    type: 'Income',
    message: 'Campaign Manager Report #1',
    category: 'Details Report about Hertz Offer no Date limit',
    date: 1627556358365,
    status: 'in_progress',
    amount: 811.45,
  },
  {
    id: _mock.id(3),
    name: _mock.name.fullName(3),
    avatar: _mock.image.avatar(9),
    type: 'Expenses',
    message: 'Campaign Manager Report #2',
    category: 'More Details about Joe Coffee - last 2 months',
    date: 1627556329038,
    status: 'completed',
    amount: 436.03,
  },
  {
    id: _mock.id(4),
    name: _mock.name.fullName(4),
    avatar: _mock.image.avatar(12),
    type: 'Receive',
    message: 'Campaign Manager Report #3',
    category: 'Pizzeria Bronto - content first month',
    date: 1627556339677,
    status: 'failed',
    amount: 82.26,
  },
  {
    id: _mock.id(5),
    name: null,
    avatar: null,
    type: 'Expenses',
    message: 'Campaign Manager Report #4',
    category: 'Entertainment all Offers - promo for Feb 2022',
    date: 1234953957777,
    status: 'completed',
    amount: 480.73,
  },
  {
    id: _mock.id(6),
    name: null,
    avatar: null,
    type: 'Expenses',
    message: 'Campaign Manager Report #5',
    category: 'Common  Details Report - Date Range and Offer ID required',
    date: 1627556347111,
    status: 'in_progress',
    amount: 11.45,
  },
];
