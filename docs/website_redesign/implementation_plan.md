# 実装計画書: 『銀河電脳 スペース・エラーズ！』 特設サイト v4

## コンセプト

ユーザー提供のAdobe Colorパレット2種をミックスした **ダーク × カラフルポップ** なデザイン。
宇宙の闇を背景に、ビビッドな色が弾ける「銀河のストリート」感。

---

## カラーパレット（確定・ユーザー提供ベース）

| 役割 | 色名 | コード | 使い方 |
|------|------|--------|--------|
| 背景 | Near Black | `#0D0D0D` | 宇宙の闇。メイン背景 |
| アクセント1 | Pink | `#F280DF` | キャッシュ、華やかさ、CTA |
| アクセント2 | Emerald | `#03A678` | MEGATEN、電脳、世界観 |
| アクセント3 | Blue | `#056CF2` | 宇宙UI、リンク、シェア |
| アクセント4 | Lime | `#E7F294` | ポップ、バナナ、ティッカー |
| 温かみ | Salmon | `#F2A594` | 人間味、ナナセ、カード背景 |
| 危険色 | Crimson | `#D91438` | エラー、警告、スパチャ |
| 補助 | Teal | `#038C73` | エメラルドの暗めバリエーション |
| テキスト | White | `#EEEEEE` | 本文 |

## タイポグラフィ
- **見出し**: WDXL Lubrifont JP N
https://fonts.google.com/specimen/WDXL+Lubrifont+JP+N?lang=ja_Jpan

- **本文**: LINE Seed JP
https://fonts.google.com/specimen/LINE+Seed+JP

- **小説本文**: LINE Seed JP


## セクション構成
1. **Hero** — ロゴ + キャッチコピー + 星装飾
2. **News Ticker** — ライム背景、斜め配置
3. **World Intro** — エメラルド背景、世界観
4. **Novels** — 連載リンク（カクヨム / TALES）
5. **Characters** — 主要4名（絵文字 + プレースホルダー）
6. **Media Mix** — Coming Soon
7. **Footer** — SNSシェア + コピーライト



## インタラクション
- 擬似スパチャ（キャラセリフ）
- SNSシェア（X / LINE / リンクコピー）

## 変更ファイル
- [index.html](file:///d:/github/space-errors-novel/index.html) — 全面書き直し
- [style.css](file:///d:/github/space-errors-novel/style.css) — 新パレット適用
- [script.js](file:///d:/github/space-errors-novel/script.js) — インタラクション
