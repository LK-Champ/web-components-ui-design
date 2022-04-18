exports.transformTemp = (svgData, key) => {
  return `import { Component, h, Prop } from '@stencil/core';
    import { ${key} as svgData } from '@sten-design/icons';
    import { Icon } from '../sten-icons/icon';

    @Component({
      tag: 'sten-icon-${svgData._name}',
    })

    export class StenIcon${key.split('icon')[1]} {
      // xxx
      render() {
        // 参数透传
        const { size, styles, classNames, color, rotate, spin } = this;
        return <Icon {...{ size, styles, classNames, color, rotate, spin, svgData }} />;
      }
    }
    `;
};