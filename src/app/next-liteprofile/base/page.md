# base

網站基本配置，包含導航欄、頁尾和網站名稱。

![base](/navbar.png)
![base](/footer.png)

## 格式

```ts
type Base = {
  title: string;
  description: string;
};
```

## 範例

```ts
export const base: Base = {
  title: "tomocat",
  description: "tomocat's personal website",
};
```
