import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sten-button',
  styleUrl: 'sten-button.css',
  shadow: true,
})
export class StenButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
