import { Component, h } from '@stencil/core';
import { Icon } from './icon';
import IconSvg from './iconLoading';

@Component({
  tag: 'sten-icon',
  styleUrl: 'sten-icon.css',
  shadow: true,
})

export class StenIcon {

  render() {
    return (
        <Icon size="30" rotate={0} styles={{}}  color={'2878FF'} svgData={IconSvg} spin={false}></Icon>
    );
  }
}