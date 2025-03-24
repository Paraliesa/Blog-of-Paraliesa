import { h } from 'vue';

// 文本块组件
export const TextBlock = {
  props: ['content'],
  render() {
    return h('p', { class: 'text-block' }, this.content);
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
  props: ['src', 'alt'],
  render() {
    return h('figure', { class: 'image-block' }, [
      h('img', { src: this.src, alt: this.alt }),
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
    return h('blockquote', { class: 'quote-block' }, this.content);
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