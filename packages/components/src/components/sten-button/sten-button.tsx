import { Component, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'sten-button',
  styleUrl: 'sten-button.css',
  shadow: true,
})
export class StenButton {
  // `isOpen` is decorated with `@State()`,
    // changes to it will trigger a rerender
    @State() isOpen: boolean = true;

    @Listen('click', { capture: true })
    handleClick() {
        // whenever a click event occurs on
        // the component, update `isOpen`,
        // triggering the rerender
        this.isOpen = !this.isOpen;
    }

    render() {
        return (
          <button>
            {this.isOpen ? "Open" : "Closed"}
          </button>
        );
    }
}
