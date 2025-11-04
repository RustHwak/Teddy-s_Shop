import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    // Provide dummy values for all 9 required arguments
    expect(new Product(
      'SKU123', // sku
      'Test Product', // name
      'Test Description', // description
      99.99, // unitPrice
      'http://example.com/image.jpg', // imageUrl
      true, // active
      10, // unitsInStock
      new Date(), // dateCreated
      new Date() // lastUpdated
    )).toBeTruthy();
  });
});
