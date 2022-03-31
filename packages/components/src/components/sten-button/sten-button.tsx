import { Component, Host, h, Prop, State, Watch,Element, Method } from '@stencil/core';

@Component({
  tag: 'sten-button',
  styleUrl: 'sten-button.css',
  shadow: true,
})
export class StenButton {
  @Prop() text: string;
  
  @State() num: number = 0;

  @Element() el: HTMLElement;

  @Watch('num')
  watchPropHandler(newValue: boolean, oldValue: boolean) {
    console.log('The old value of num is: ', oldValue);
    console.log('The new value of num is: ', newValue);
  }

  @Method()
  async showPrompt() {
    console.log('测试1');
  }

  getListHeight(): number {
    console.log(this.el.getBoundingClientRect().height);
    return this.el.getBoundingClientRect().height;
  }

  render() {
    return (
      <Host>
        <button 
          class="sten-button"
          onClick={() => {
            this.num += 1;
            this.getListHeight();
          }}
        >
          {this.text}{this.num}<slot></slot>
        </button>
      </Host>
    );
  }

}
