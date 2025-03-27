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
          alt: '这是一张网图，只是想看看能不能正常加载图片',
          align: 'center'
        },
        {
          type: 'image',
          src: '/blogassets/1.gif',
          alt: '这是一张本地图片，只是想看看能不能正常加载图片',
          align: 'center'
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
          content: '安全通訊協定出現錯誤，無法建立與伺服器的安全連線。<br><p style="text-align: right;"> ——威廉·莎士比亚</p>'
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
    },
    {
      id: 2,
      title: '(Vue3)Pinia的理解和初步使用，以及对状态管理的初步认识',
      category: 'tech',
      date: '2025.03.27',
      excerpt: '我是怎么初步接触和使用Pinia的.',
      tags: ['Vue3', 'Pinia', '状态管理'],
      resorces: ['https://zhuanlan.zhihu.com/p/508371727','https://pinia.vuejs.org/introduction.html'],
      content: [
        {
          type: 'heading',
          content: '关于我是怎么接触到Pinia和状态管理的'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这大概是一个很奇怪的标题，因为知道Vue3的应该基本上都知道Pinia，懂得一点前端的人也(应该)基本上都知道做状态管理这个东西，至少我最开始去参考其他人的Vue3项目时，发现这些项目无一例外全都使用了Pinia/Vuex，就我自己搁那纳闷：“这啥玩意？”'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为什么会出现这种情况呢，因为我最开始不是通过网课/书籍来学习vue和大部分前端知识的。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;大概是去年暑假的时候，当时的我刚刚经历了对大学、新一线城市、南北地区生活与自身能力的重新思考/数学建模事业的滑铁卢/对家长一系列期盼的拒绝与抗争等等一系列重要事件，身边也没有能理解和倾诉这些东西的朋友，可谓是迷茫不前、万念俱灰、死气沉沉、只会打打osu……<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;扯远了，反正我的老师当时看我对前端挺感兴趣，就给了我一个师兄的毕设，让我学学。这位师兄的毕设是用vue3+django做的，而当时的我是什么情况呢，大概是：'
        },
        {
          type: 'quote',
          content: '<center>基础全不会，框架更不知。<br>架构看不懂，我从何下手。 <br>从晚睡到早，从早睡到晚。<br>大梦谁先觉？反正不是我。</center>'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;总之，我借助ai花了痛苦的一个半月生啃下来了那个项目，那个项目的前端部分比较简单，虽然引入了vuex，但是完全没用上，我自然也就完全不知道什么是状态管理，只是学会了项目如何架构、组件和页面是什么关系，组件怎么写、怎么用router做路由跳转，怎么用axios发请求，django后端怎么写罢了。'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;然后时间来到了大三第一个学期的最后几周，为了完成课设，我需要做一个名叫cdz的电影院选票管理系统，本地能跑就行，所以重点在前后端、数据库。<br>我掏出vue3夸夸写了十几个组件，然后就出现了一个问题：我经常在组件内部声明和定义一些只在这个组件内使用的变量，即用即销，它们的生命周期和组件相同；然而，总有某些数据是需要在各个组件中共享的，它们需要“超脱某个组件”，不因某个组件的销毁而消失。'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当时的我解决这个问题的方法十分简单粗暴：就你需要在组件间流通是吧，好，我全给你存进localstorage，从现在开始你超脱组件和会话了，自己玩去吧你。（然后每个组件都要多写好几行相关逻辑）'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;很有原教旨主义风味的解决方案，就好比是住着单元楼的人大冬天的把地暖空调全拆了，非要学山顶洞人搁屋里烧柴火一样，真是别样的。'
        },
        {
          type: 'image',
          src: 'https://i.ibb.co/5WCvXHBJ/the-pig-arrives.png',
          alt: '好崩溃，不管了，能跑就没问题！',
          width: '50%',
          align: 'center'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;鬼使神差的是，我还真的恰好让组件在每一次状态更新时都重新加载了，避开了数据不是响应式的问题（虽然我自己都没意识到这个问题）。<br>总之，这就是我第一次遇到状态管理问题的经过，其实我也注意到了这个问题，所以后来重构项目时我特意去学习了Pinia，尝试学习更加现代化的解决方案。'
        },
        {
          type: 'subheading',
          content: '什么是状态管理？'
        },
        {
          type: 'quote',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;状态是数据的变化，比如颜色是红色或蓝色是数据，而颜色从红色变为蓝色这就是状态了。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;状态的改变对应着视图的渲染或者某段逻辑的执行。比如颜色从红色变为蓝色可能就要重新渲染视图，并且执行发送请求到服务端的逻辑。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过视图交互或者其他方式触发状态的变化，状态变化联动视图的渲染和逻辑的执行，这就是前端应用的核心 …… <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;状态变化之前的异步过程的管理，是状态管理的第一层含义 …… <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;状态变化之后的联动处理的管理，是状态管理的第二层含义。<br><p style="text-align: right;">——知乎用户：神说要有光</p>'
        },
        {
          type: 'quote',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在前端开发中，状态管理（State Management） 指的是 如何存储、管理和共享应用的数据（状态），让组件之间能够高效地通信和更新 UI。<br><p style="text-align: right;">——ChatGPT</p>'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以上，我的理解更接近ai的说法。'
        },
        {
          type: 'subheading',
          content: '什么是Pinia？'
        },
        {
          type: 'quote',
          content: 'Pinia 是 Vue 的专属状态管理库，它允许你跨组件或页面共享状态。<br>Pinia is a store library for Vue, it allows you to share a state across components/pages.<br> <p style="text-align: right;">——Pinia官网</p>'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;简单来说(对我来说)，Pinia是一个用来实现状态管理的库，它能存跨组件的数据和功能，这已经够了。'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下面讲讲我在第一次重构cdz的时候是怎么使用Pinia的。'
        },
        {
          type: 'heading',
          content: '控制顶部栏是否渲染'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;顶部栏指的是这个东西：'
        },
        {
          type: 'image',
          src: '/blogassets/2.png',
          alt: 'TopHeader.vue'
        },
        {
          type: 'code',
          language: 'App.vue',
          content: "<template>\n  <div>\n    <TopHeader/>\n    <router-view/>\n  </div>\n</template>\n\n<script setup>\nimport TopHeader from './components/header/TopHeader.vue'\n\n</script>"
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;顶部栏存在于所有页面，唯独在登录/注册页面不渲染，使用Pinia实现这里的状态管理。'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;先为项目引入Pinia。'
        },
        {
          type: 'code',
          language: 'powershell',
          content: 'npm install pinia'
        },
        {
          type: 'code',
          language: 'main.js',
          content: "//其它import\nimport { createPinia } from 'pinia'\n\n//创建其它示例\nconst pinia = createPinia()\n\n//使用其它库\napp.use(pinia)\n\napp.mount('#app')"
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;创建 store 来管理状态。'
        },
        {
          type: 'code',
          language: 'src/stores/header.js',
          content: "import { defineStore } from 'pinia'\n\nexport const useHeaderStore = defineStore('header', {\n  state: () => ({\n    needHeader: 1,\n  }),\n  actions: {\n    setNeedHeader(value) {\n      this.needHeader = value;\n    }\n  }\n});"
        },
        {
          type: 'text',
          content: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;useHeaderStore是Store生成函数，用于访问 Store 实例。 'header'是Store名称，唯一标识这个Store。needHeader是State/状态，用于存储数据。setNeedHeader是Action/方法，用于修改状态，封装业务逻辑。"
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;至此，我们拥有了一个可以在任何组件中访问的变量(状态/state):needHeader，以及一个用于控制needHeader的方法:setNeedHeader。needHeader是响应式的，它的属性是reactive，会因解构而失去响应式，pinia提供了storeToRefs()，可以把 Pinia store 里的 state 变成 ref，需要的时候可以用。'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，只差合理使用useHeaderStore了。'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我先放一个例子在这里。'
        },
        {
          type: 'code',
          language: 'src/router/index.js',
          content: "import { useHeaderStore } from '../stores/header';\n\n……\n\nrouter.beforeEach((to, from, next)=>{\n  const store = useHeaderStore();\n  console.log(to.name)\n  // 如果目标路由是登录页或者注册页，则将 needHeader 设为 0\n  if (to.name === 'LoginPage' || to.name === 'RegisterPage') {\n    store.setNeedHeader(0);\n  } else {\n    store.setNeedHeader(1);\n  }\n\n  // 必须调用 next() 才能继续导航\n  next();\n})\n\n……"
        },
        {
          type: 'code',
          language: 'src/components/header/TopHeader.vue',
          content: "<template>\n  <div v-if=\"needHeader == 1\">\n\n    …………\n\n  </div>  \n</template>\n<script>\n  import { watch } from 'vue';\n  import { useRouter } from 'vue-router';\n  import { useHeaderStore } from '../../stores/header';\n\n  export default {\n    name: 'TopHeader',\n    setup() {\n      const store = useHeaderStore();\n      const needHeader = ref(store.needHeader);\n\n      …………\n\n      watch(() => store.needHeader, (newValue, oldValue) => {\n        if (newValue !== oldValue) {\n          needHeader.value = newValue;\n        }\n      });\n\n      …………\n\n      return {\n        …………\n        needHeader\n      };\n    }\n  };\n</script>"
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先声明，不要学这种写法，尽管它能够满足需求。'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;先分析它是怎么满足需求的：<br>1、顶部栏组件是根据组件里的needHeader的值来决定是否渲染的。<br>2、组件里的needHeader和store里的needHeader都是响应式的。<br>3、由于手动watch监听了store里的needHeader，当store里的needHeader发生变化时，我们组件里的needHeader将与store里的needHeader同步，又因为组件里的needHeader发生了变化，TopHeader组件将改变渲染状态。<br>4、不论是从一个页面跳转到另一个页面/第一次进入网站的页面/通过网址专门跳到网站的某个首页以外的页面/在浏览器里刷新页面，都会触发router.beforeEach((to, from, next)=>{…………})，而且参数to有意义(目标路由)，所以以任何方式每次进入新页面前都会首先保证store里的needHeader值正确(即便它可能刚刚才丢失并被重新初始化)。'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;顺便提一句，当你在Vue组件或JS代码中创建一个Pinia store并赋值时，数据其实是存储在JavaScript运行时的内存里的，不是存在cookie、localStorage、sessionStorage的(可以手动选择存进去)，一刷新就丢失然后重新初始化了。'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这个写法不好的地方是，好端端的一个needHeader硬是变成了两个（const needHeader = ref(store.needHeader)），虽然store.needHeader是响应式的，但ref(store.needHeader)只是把当前值复制了一份而已，两个needHeader在这之后就没有任何关系了（ref(store.needHeader)解构了store.needHeader，store.needHeader本身是响应式的reactive()，但解构它会失去响应式），必须想办法手动让它们时刻相等（watch）。'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一种正确写法如下：'
        },
        {
          type: 'code',
          language: 'src/components/header/TopHeader.vue',
          content: '<template>\n  <div v-if="store.needHeader == \'1\'"> </div>\n</template>\n\n<script>\nimport { useHeaderStore } from \'../../stores/header\';\n\nexport default {\n  name: \'TopHeader\',\n  setup() {\n    const store = useHeaderStore();\n    return { store };\n  }\n};\n</script>'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这样，直接使用store.needHeader就好了。'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户登录状态的管理也会用到，但是那个就复杂了，涉及到token、API请求拦截器什么的，值得新开一篇博客了，之后再继续研究吧。'
        },
        {
          type: 'image',
          src: 'https://i.ibb.co/Y7VXZnzD/the-pig-leaves.png',
          alt: '再见',
          width: '50%',
          align: 'center'
        },
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