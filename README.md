# jest 學習手冊

## 安裝

```bash
$ npm init jest@latest    # 自動生成
$ npm i -D jest           # 手動安裝
```

若需要全域支援 jest typing：

```bash
$ npm i -D @types/jest
```

若要讓 jest 支援 ESM，更新 `scripts` 與 `jest` 的設定：

```json
{
  "scripts": {
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
  },
  "jest": {
    "transform": {}
  }
}
```

## Issues

1. 無法以 ESModule 使用 `jest.mock` 對模組進行快速 mocking。
