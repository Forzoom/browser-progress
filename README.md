### Roadmap

### Changelog

#### v0.0.2

1. 修正export输出

### Version

#### v0.0.2

1. 修正 export class BrowserProgress 为 export default class BrowserProgress;
2. 修复没有reactive的错误

#### v0.0.3

1. 使用render代替template，泛起vue文件格式(主要目的是放弃css-loader注入的样式)，因为css-loader目前看来在很少的设备上会出现maximum Stack Call的问题，另外因为css-loader注入被删除让文件更小