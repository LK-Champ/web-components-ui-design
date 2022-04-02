import classnames from 'classnames';
import { FunctionalComponent, h, Host } from '@stencil/core';
interface StenIconProps {
  /**
   * 尺寸，默认 20
   */
  size: number | string;
  /**
   * 传入的 css 样式
   */
  styles: object;
  /**
   * 图标颜色
   */
  color: string;
  /**
   * 图标的旋转
   */
  rotate: number;
  /**
   * 是否自动旋转
   */
  spin: boolean;
  /**
   * 需要渲染的 SVG 的数据
   */
  svgData: any;
}
export const Icon: FunctionalComponent<StenIconProps> = props => {
  const {size, styles, color, rotate, spin, svgData} = props;
  console.log(svgData);

  const outerStyle: any = { color };

  if (Number.isSafeInteger(rotate)) {
    outerStyle.transform = `rotate(${rotate}deg)`;
  }
  
  Object.assign(outerStyle, styles);

  // const classPrefix: string = getClassPrefix('icon');
  // const classes = classnames(classPrefix, classNames, `${classPrefix}-block`, { [`${classPrefix}-spin`]: spin });

  return (
    <Host>
      <svg 
        width={size} 
        height={size}
        style={outerStyle}
      >{svgData}</svg>
    </Host>
  );
}