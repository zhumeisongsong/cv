## 👩🏼‍💻 工作经历

::: details Software Engineer @[Atrae](https://atrae.co.jp/) _(2021.12 ~ · 3 yrs+)_

- 通过从 Presenter 中分离出 Domain 层 和 Application 层 解决 Presenter 过重的问题，修改时的影响范围变得可控，显著减少测试时需要的 Mock 方法数量
- 在 React 项目中手写 DI 框架，实现了接口定义与实现的完全隔离，提升模块的低耦合性和高灵活性
- 将 React 的使用限制在 Interface-Adapter 层和 UI 层，降低了系统对 React 和特定状态管理库的依赖
- 重构并迁移月访问量超过 50 万的调查回答应用至 Monorepo。采用模块化设计支持回答应用不同环节的独立开发与调试，提高了开发效率和后续维护便捷性；通过按需加载组件，页面访问速度提升 50%（FCP 从 1.8 秒优化至 0.9 秒）
- 使用 semantic-release 对内部私有包和开源共用包进行版本管理，完成语义化版本控制及自动发布流程
- 和后端工程师合作，通过一个共通包实现了错误场景的前后端共通化设计（包括 input 验证与错误处理），提供了基于 Error Code 的文档化错误处理解决方案
- 在新建项目中采用 GraphQL Federation 架构，依据聚合根指导 Subgraph 的设计，成功避免循环依赖问题
- 使用 NestJS 开发了基于 GraphQL 的 findAllWorkflowActions 和 findAllWorkflowTemplates API，并对该 query 进行性能优化
- 通过使用 Persisted Queries 来减少请求大小已降低带宽消耗和服务器无需每次都解析和验证查询内容的性能开销
- 对超过 10 MB 的大型 JS 文件应用 Gzip 压缩，大幅缩短首屏加载时间
- 和设计师合作，开发和维护了基于 Material UI 的通用组件库（如 LoadingButton、Steps、Rate、Spin、Selectable Table 等），提升团队开发效率和代码一致性

:::

::: details Front-End Lead @[Monstarlab Japan](https://monstar-lab.com/jp) _(2018.12 ~ 2021.11 · 3 yrs)_

React/Redux/Redux-Saga/Immer/Sass/styled-components/axios/Docker/AWS/GitHub Actions/Flutter/Firebase

- 和集团各个据点的前端工程师一起工作，在集团内部推广 React 的最佳实践
- 在一个咖啡标签打印的 web 项目上，使用 virtual list 实现了5000+ 的标签图片列表的显示性能优化，解决了页面卡顿的问题
- 设计和开发了支持 10 万人+同时在线的直播留言功能。使用原子计数器保证并发中的留言数量的计数安全。使用 throttle 限制了留言刷新的频率保证性能。 使用 Python 脚本模拟大量并发请求，测试了留言功能是否能支持 10 万人同时在线
- 领导了大型股票交易系统的 design system 的组件开发和维护

:::

::: details Front-End Lead @[Monstarlab China](https://www.monstar-lab.com.cn/) _(2016.03 ~ 2018.11 · 2 yrs 9 mos)_

React/Redux/Redux-Saga/Immer/Sass/styled-components/axios/Docker/AWS/GitHub Actions

- 和 CTO office 一起工作，在公司的所有 web 项目中推广前后端分离的开发模式，前端和后端可以同时开发提高了开发效率
- 为项目之间的共通组件编写测试代码，实现了测试覆盖和重构自由
- 领导了公司 web 项目的前端代码审查标准的制定和实施，实现了前端成员间可以通过互相 review 代码来实现知识的迁移和代码品质的提高
- 负责了大型票务预定混合应用的 webview 的设计和开发，iOS 与 Android 原生系统之间使用共通的 webview 提升了开发效率

:::

::: details Front-End Engineer @[Monstarlab China](https://www.monstar-lab.com.cn/) _(2014.10 ~ 2016.02 · 1 yrs 5 mos)_

Html5/CSS3/SASS/JavaScript/jQuery/React/React Router/gulp/rollup

- 设计并开发了基于 jQuery 的交互式、响应式网页，并确保在多种终端设备上的最佳用户体验
- 自学了 React 并在一个视频浏览网站项目中成功实现前后端分离

:::

::: details Freelancer _(2009.07 ~ 2014.09 · 5 yrs 3 mos)_

Html5/CSS3/SASS/JavaScript/jQuery/PHP/WordPress

- 在大学期间自学了网页开发技术。毕业后从事景观建筑师工作的同时，通过副业继续追寻对网页开发的热爱
- 为超过 20 家公司提供服务，包括建筑设计公司、景观设计公司、IT 公司、游戏公司和手表销售公司。成功完成了超过 30 个品牌的数字营销和推广项目

:::
