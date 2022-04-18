import  { stringify } from "svgson";
import { FunctionalComponent, h, Host } from '@stencil/core';
import * as api from '@sten-design/icons';
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

  console.log(api);
  
  const outerStyle: any = { color };

  if (Number.isSafeInteger(rotate)) {
    outerStyle.transform = `rotate(${rotate}deg)`;
  }
  
  Object.assign(outerStyle, styles);
  svgData.width = size;

  const src = `data:image/svg+xml;utf8, ${stringify(svgData)}`;

  return (
    <Host>
      <img 
        width={size} 
        height={size}
        style={outerStyle}
        src={src}
      ></img>
      <svg 
        width={size} 
        height={size}
        style={outerStyle} 
        viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity=".2" cx="52" cy="52" r="52" fill="currentColor"/>
        <circle opacity=".4" cx="52" cy="52" r="43" fill="currentColor"/>
        <circle opacity=".6" cx="52" cy="52" r="34" fill="currentColor"/>
        <path d="M48.323 45.715h9.586a4.793 4.793 0 0 0-9.586 0Zm6.1 8.535a2.18 2.18 0 1 0-1.743 0v3.231a.872.872 0 0 0 1.743 0V54.25Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M52.584 28.36a.991.991 0 0 1 1.527-.002c3.763 4.629 9.663 6.892 16.167 6.892 1.248 0 2.47-.112 3.656-.326v18.538A22.425 22.425 0 0 1 57.47 75.08l-2.694.743a4.922 4.922 0 0 1-2.618 0l-2.694-.743A22.425 22.425 0 0 1 33 53.462V34.924c1.186.214 2.407.326 3.655.326 6.503 0 12.194-2.263 15.929-6.89Zm-5.569 17.355a6.1 6.1 0 0 1 12.202 0h1.525a2.397 2.397 0 0 1 2.397 2.397v9.368a4.793 4.793 0 0 1-4.794 4.794h-9.587a4.793 4.793 0 0 1-4.793-4.794v-9.368a2.397 2.397 0 0 1 2.397-2.397h.653Z" fill="currentColor"/>
      </svg>
    </Host>
  );
}