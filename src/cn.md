## 👩🏼‍💻 工作经历

::: details Software Engineer @[Atrae](https://atrae.co.jp/) _(2021.12 ~ · 3 yrs+)_

- 通过对 domain service 和 application service 的抽象解决前端 presenter 过重导致的修改和测试困难的问题
- 手写的 DI 框架在 react 项目中实现了依赖注入，实现模块间低耦合和高灵活性
- 通过应用 Persisted Queries 来减少请求大小已降低带宽消耗和服务器无需每次都解析和验证查询内容的性能开销
- 完成了以 domain 为单位 error case 的前后端共通化设计(form validation, error handling...)
- 在新建项目上使用了 GraphQL Federation 的架构, 在 DDD 的指导下通过确定聚合根来指导各个 subgraph 的设计避免循环依赖
- 使用 nestjs 开发了基于 GraphQL 的 findAllWorkflowActions 和 findAllWorkflowTemplates API，并对该 query 进行性能优化
- 使用 semantic-release 对私有包/共用包进行版本控制
- 对大型 JS 文件（超过 10 MB）应用了 Gzip 压缩，提升了网站的首屏显示速度
- 重构并迁移每月访问量超过 50 万+调查回答应用到 monorepo。重构采用的是模块化设计，一次调查的不同步骤可以独立开发和调试，不仅提高了开发效率，后续对调查的修改也更加容易。通过显示时才加载需要的组件，迁移后页面的访问速度提高了 50%（FCP 从 1.8s 到 0.9s）
- 设计和维护基于 Material UI 的共通 atom 组件（LoadingButton, Steps, Rate, Spin, Selectable Table...）

:::

::: details Front-End Lead @[Monstarlab Japan](https://monstar-lab.com/jp) _(2018.12 ~ 2021.11 · 3 yrs)_

React/Redux/Redux-Saga/Immer/Sass/styled-components/axios/Docker/AWS/GitHub Actions/Flutter/Firebase/

- 咖啡项目的 virtual list 实现
- 开发了支持 10 万人+同时在线的直播留言功能。使用原子计数器保证并发中的留言数量的计数安全。使用 throttle 限制了留言刷新的频率保证性能。 使用 Python 脚本模拟大量并发请求，测试了留言功能是否能支持 10 万人同时在线
- 领导了大型股票交易系统的 design system 的开发和文档化

:::

::: details Front-End Lead @[Monstarlab China](https://www.monstar-lab.com.cn/) _(2016.03 ~ 2018.11 · 2 yrs 9 mos)_

React/Redux/Redux-Saga/Immer/Sass/styled-components/axios/Docker/AWS/GitHub Actions

- 和 CTO office 一起工作，在公司的所有 web 项目中推广前后端分离的开发模式，前端和后端可以同时开发提高了开发效率
- 通过项目之间的共通组件实现了测试覆盖和重构自由
- 领导了公司 web 项目的前端代码审查标准的制定和执行，实现了前端成员间可以通过互相 review 代码来实现知识的迁移和代码品质的提高
- 负责了大型票务预定混合应用的 webview 的设计和开发，iOS 与 Android 原生系统之间使用共通的 webview 提升了开发效率

:::

::: details Front-End Engineer @[Monstarlab China](https://www.monstar-lab.com.cn/) - Chengdu, China \_(2014.10 ~ 2016.02 · 1 yrs 5 mos)

Html5/CSS3/SASS/JavaScript/jQuery/React/React Router/gulp/rollup

- 设计并开发了基于 jQuery 的交互式、响应式网页，并确保在多种设备和浏览器上的最佳用户体验
- 自学了 React 并在一个视频网站项目中成功实现前后端分离

:::

::: details Freelancer _(2009.07 ~ 2014.09 · 5 yrs 3 mos)_

Html5/CSS3/SASS/JavaScript/jQuery/PHP/WordPress

- 在大学期间自学了网页开发技术。毕业后从事景观建筑师工作的同时，通过副业继续追寻对网页开发的热爱
- 为超过 20 家公司提供服务，包括建筑设计公司、景观设计公司、IT 公司、游戏公司和手表销售公司。成功完成了超过 30 个品牌的数字营销和推广项目

:::
