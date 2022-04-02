import { Component, Prop, h, State } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop({attribute: 'last'}) first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop({attribute: 'first'}) last: string;

  @State() num: number = 0;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <div>
        <button onClick={() => {
          this.num+=1;
          this.first = `${this.num}`;
        }}>add</button>
        Hello, World! I'm {this.getText()}, {this.num}
      </div>
    );
  }
}
