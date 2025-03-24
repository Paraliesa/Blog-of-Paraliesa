export const blogPosts = [
    {
      id: 1,
      title: 'Hello World! —— 我的第一个博客',
      category: 'others',
      date: '2025.03.24',
      excerpt: 'Ahh shit. Here we go again.',
      tags: ['测试', '开始'],
      content: [
        {
          type: 'text',
          content: '欢迎来到我的个人博客！这是我的第一篇文章，梦开始的地方。'
        },
        {
          type: 'heading',
          content: '为什么要写博客？'
        },
        {
          type: 'text',
          content: '写博客是一种记录思考和分享知识，同时督促自己自我产出的方式。'
        },
        {
          type: 'image',
          src: 'https://www.2008php.com/2019_Website_appreciate/2019-07-30/20190730155412.jpg?height=400&width=800',
          alt: '这是一张网图，只是想看看能不能正常加载图片'
        },
        {
          type: 'image',
          src: '/blogassets/1.gif',
          alt: '这是一张本地图片，只是想看看能不能正常加载图片'
        },
        {
          type: 'subheading',
          content: '我将会写些什么？'
        },
        {
          type: 'text',
          content: '1. 技术：分享我在编程和开发过程中的经验和心得'
        },
        {
          type: 'text',
          content: '2. 生活：记录日常生活中的有趣事情和思考'
        },
        {
          type: 'text',
          content: '3. 随想：将一切过度思考弃置于此'
        },
        {
          type: 'text',
          content: '4. 测评：测评各种吃、喝、住、行以及因为各种原因买来的各种玩意儿，大概旅游期间更会有的写'
        },
        {
          type: 'text',
          content: '5. 其它：Anything else'
        },
        {
          type: 'quote',
          content: '安全通訊協定出現錯誤，無法建立與伺服器的安全連線。\n    ——威廉·莎士比亚'
        },
        {
          type: 'subheading',
          content: '代码块测试'
        },
        {
          type: 'code',
          language: 'javascript',
          content: 'console.log("Hello World!");'
        },
        {
          type: 'code',
          language: 'python',
          content: 'print("Hello World!")'
        },
        {
          type: 'code',
          language: 'C++',
          content: '#include <iostream>\nusing namespace std;\nint main(){\n    cout<<"Hello World!";\n    return 0;\n}'
        },
        {
          type: 'code',
          language: 'java',
          content: 'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello World!");\n    }\n}'
        },
        {
          type: 'text',
          content: '感谢你阅读我的第一篇博客文章。如果你有任何建议或想法，欢迎与我交流！'
        }
      ]
    }
    // 未来可以在这里添加更多博客文章
  ];
  
  // 博客分类数据
  export const categories = [
    { id: 'all', name: '全部' },
    { id: 'tech', name: '技术' },
    { id: 'life', name: '生活' },
    { id: 'thoughts', name: '随想' },
    { id: 'reviews', name: '测评' },
    { id: 'others', name: '其它' },
  ];
  
  // 根据分类ID获取分类名称
  export function getCategoryName(categoryId) {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : '';
  }
  
  // 获取上一篇文章
  export function getPreviousPost(currentPostId) {
    const currentIndex = blogPosts.findIndex(p => p.id === currentPostId);
    return currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  }
  
  // 获取下一篇文章
  export function getNextPost(currentPostId) {
    const currentIndex = blogPosts.findIndex(p => p.id === currentPostId);
    return currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  }