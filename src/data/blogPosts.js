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
    },
    {
      id: 3,
      title: '21岁了，聊聊各种感想',
      category: 'life',
      date: '2025.03.29',
      excerpt: '祝我生日快乐。',
      tags: ['人生', '感想'],
      resorces: ['https://mp.weixin.qq.com/s/ef6FuKEYCA9g5QL47aPZIQ'],
      content: [
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人生如白驹过隙，时光亦如箭飞逝。'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学会习惯一个人的生日，也是一个人的必修课。其实这么多年过来，我早已不会因为生日当天无人在意而悲伤了，在我对着日历算自己今年多少岁的时候，顺便回顾了一下往年生日的情景。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自12岁以来，清一色的孤独，从不受理解的愤懑、到独自一人的悲怆、再到如今的忧虑，似乎每一个时间段的自己都在单刷不同的隐藏高难副本，独自面对一个看不见摸不着的世界boss。'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;生活就像一款设计无聊的RPG游戏一样，过了一关，迎接自己的只有更难的下一关。小时候的我用 \'普通的木棍\' 大战 \'海滩龙虾\' ，长大后的我用 \'极·夜之降临九转伏羲剑改+12\' 大战 \'火焰的 暴躁的 巨熊的 快速的 末日大龙虾\' 。我不曾窥见质变的临界点。'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从某种意义上讲，当今互联网上的大数据个性化推流有时也是同样的道理，它推送新颖而同质化的东西。'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不过，它有时还是会推一些你实际需要的东西的，对吧？这在概率学上是允许发生的。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;只是这个说法比较缺少浪漫气息，不如使用古人“缘分”的说法。人的一生足够短，但也长到足够让你拥有在合适的时机遇到合适的人/事的体验了，所谓的“缘分”，何尝不是一种来自于这个世界的个性化推送呢？'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;游戏的进行是需要motivation的，玩家跋山涉水历尽艰辛，斩尽魔王的龙虾大军，最终面对魔王，鏖战得胜，世界的邪恶被消灭，所有的NPC获得了幸福，而玩家迎来了Happy Ending。那么，人生的motivation该当如何呢，我又该何去何从呢，我想不出来。现实的世界不存在超级英雄，因为不存在具象化的超级坏蛋要去打败；同样的，世上也不存在消灭了就能让所有人幸福的大魔王；我更不是天赋异禀的勇者，要去完成某个伟大的目标，追寻世界的秘密。'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所以我一直觉得“缘分”是很神奇的，它立于理想和现实的交界处，它是无法被观察、无法被追求、亦无法被言说的，无形、无迹、无影、无踪，但它的确会毫无征兆地降临，之后再具象化，以至于在缘分发生之前，你无法定义缘分。'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最近发生在我身上的缘分，是我在完全偶然的情况下，通过一款叫做《Little Busters》的游戏知道了《若山牧水短歌集》的存在。'
        },
        {
          type: 'image',
          src: '/blogassets/3.png',
          alt: '',
          align: 'center',
          width: '75%',
        },
        {
          type: 'text',
          content: '<center>白鸟亦悲否<br>不为空之青、海之蓝所染<br>弋于其间<br><br>白鸟不悲否<br>苍茫天水间，片羽皆不染<br>无言自飘摇<br><br>白鸟哀婉<br>不容于天空之湛蓝<br>亦不容于海之绀碧<br><br>白鸟我见犹怜<br>出碧海蓝天而不染<br>悠然翱翔天地间<br><br>白鸟独凄然否<br>出碧海蓝天而不染<br>兀自浮游天地间<br><br>白鸟不染碧空之色<br>纯洁无瑕<br><br>令白鸟哀叹的天空之蓝<br>无法浸染大海之青<br>相互映照<br><br>与海之接吻<br>令夕阳无以行<br>鸟翔于天，停滞不前</center><br><p style="text-align: right;">——『海の声』　若山牧水</p>'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;翻译的很有水平了，尽管我无法溯源出是谁翻译的。这里的内容并非原文，是从原文里截取了几句短歌拼接翻译而成，甚至出现了同一句不同的翻译同时出现的情况。不过读起来令人共鸣，也是很好了，我很宽容的。'
        },
        {
          type: 'image',
          src: '/blogassets/4.png',
          alt: '若山牧水 (繁) 著『海の声』,生命社,明41.7. 国立国会図書館デジタルコレクション ',
          align: 'center',
          width: '80%',
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我不想在这里大谈我对这些诗文的理解，但是诗文的内容令我产生了十二分的共鸣，我特地去了解了作者的经历，然后我明白了我产生共鸣的原因。'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以下内容参考自某日语博主的文章。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;若山 牧水（1885.8.24-1928.9.17），日本和歌作家。这首短歌写于若山牧水就读于早稻田大学时期，时年23岁的他临近毕业，对于今后的发展道路感到迷茫。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与此同时，他还得知自己爱慕已久的女性，园田小枝子其实早已结婚，并且还有两个孩子。就在这样的背景下，若山牧水写下了这首短歌。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在短歌中，他描绘了一幅无垠广阔的蓝天和无边无际的碧海，一只白鸟在其中漂泊的画面。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;他将自己比作这只“白鳥”，“空の青海のあをにも”则代表了自己的青春或是自己的人生。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过“ただよふ”，描写白鸟在海与天空之中漫无目的地漂泊，暗示了歌人对于青春，更是对于未来的迷茫。'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我虽然没有经历过喜欢的人已经跟别人结婚这种事情（可能也快了），但对于未来的迷茫，却是一等一的真实。'
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我是2022年高考考出河北省，来到浙江读计算机的，这其实是一件很痛苦的事情，对于六年中学生活 >= 六年有期徒刑的我来说，我需要多花很大的力气来补充常识和背景、基础知识，然后才能勉强叩响计算机领域的大门。结果就在这几年，大语言模型横空出世、势头不减，互联网行业更是捷报频传：人数增多、岗位缩减、待遇降低、行业过饱和……我对此无能为力，作为一个大三的学生，我的心中更多的是迷茫和不甘，迷茫在于，不知前路如何，不甘在于，不想看到自己这些年来的努力最终落得个能力配不上欲望的结果。'
        },
        {
          type: 'image',
          src: '/blogassets/5.png',
          alt: '',
          align: 'center',
          width: '60%',
        },
        {
          type: 'image',
          src: '/blogassets/6.png',
          alt: '',
          align: 'center',
          width: '60%',
        },
        {
          type: 'text',
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;很难不焦虑，很难不迷茫。我只能劝自己，车到山前必有路，船到桥头自然直了。'
        },
        {
          type: 'quote',
          content: '白鳥は 悲しからずや 空の青 海のあをにも 染まずただよふ<br>一译：<br>白鸟独凄否 碧海蓝天皆不染 兀自浮游天地间<br>另译：<br>令白鸟哀叹的天空之蓝 无法浸染大海之青 相互映照'
        },
        {
          type: 'quote',
          content: 'ああ接吻海そのままに日は行かず 鸟翔ひながら 死せ果てよいま<br>一译：<br>叹兮接吻时 海亦静谧日亦停 飞鸟如殁止不前<br>另译：<br>与海之接吻 令夕阳无以行 鸟翔于天 停滞不前'
        },
      ]
    },
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