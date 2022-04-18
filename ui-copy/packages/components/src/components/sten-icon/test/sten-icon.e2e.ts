import { newE2EPage } from '@stencil/core/testing';

describe('sten-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sten-icon></sten-icon>');

    const element = await page.find('sten-icon');
    expect(element).toHaveClass('hydrated');
  });
});
