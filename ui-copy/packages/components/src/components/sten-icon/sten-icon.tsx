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
        <Icon size="50" rotate={0} styles={{}}  color={'rgb(180 32 32)'} svgData={IconSvg} spin={false}></Icon>
    );
  }
}