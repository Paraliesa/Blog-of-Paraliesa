import { h } from 'vue';

// 文本块组件
export const TextBlock = {
  props: ['content'],
  render() {
    return h('div', { 
      class: 'text-block',
      innerHTML: this.content 
    });
  }
};

// 标题块组件
export const HeadingBlock = {
  props: ['content'],
  render() {
    return h('h2', { class: 'heading-block' }, this.content);
  }
};

// 子标题块组件
export const SubheadingBlock = {
  props: ['content'],
  render() {
    return h('h3', { class: 'subheading-block' }, this.content);
  }
};

// 图片块组件
export const ImageBlock = {
  props: ['src', 'alt', 'srcset', 'sizes', 'width', 'height', 'align'],
  render() {
    // 创建图片样式对象
    const imgStyle = {};
    if (this.width) imgStyle.width = this.width;
    if (this.height) imgStyle.height = this.height;
    if (this.width || this.height) imgStyle.maxWidth = 'none';
    
    // 创建容器样式对象
    const figureStyle = {};
    if (this.align) figureStyle.textAlign = this.align;
    
    return h('figure', { 
      class: 'image-block',
      style: figureStyle
    }, [
      h('img', { 
        src: this.src, 
        alt: this.alt,
        srcset: this.srcset,
        sizes: this.sizes,
        style: imgStyle
      }),
      this.alt ? h('figcaption', {}, this.alt) : null
    ]);
  }
};

// 代码块组件
export const CodeBlock = {
  props: ['content', 'language'],
  render() {
    return h('div', { class: 'code-block-container' }, [
      h('div', { class: 'code-header' }, [
        h('span', { class: 'language-tag' }, this.language || 'code')
      ]),
      h('pre', { class: 'code-block' }, [
        h('code', {}, this.content)
      ])
    ]);
  }
};

// 引用块组件
export const QuoteBlock = {
  props: ['content'],
  render() {
    return h('blockquote', { class: 'quote-block',innerHTML: this.content });
  }
};

// 根据内容块类型返回对应的组件
export function getComponentForBlock(type) {
  switch(type) {
    case 'text': return TextBlock;
    case 'heading': return HeadingBlock;
    case 'subheading': return SubheadingBlock;
    case 'image': return ImageBlock;
    case 'code': return CodeBlock;
    case 'quote': return QuoteBlock;
    default: return TextBlock;
  }
}