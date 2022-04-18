import { newSpecPage } from '@stencil/core/testing';
import { StenIcon } from '../sten-icon';

describe('sten-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StenIcon],
      html: `<sten-icon></sten-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <sten-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sten-icon>
    `);
  });
});
