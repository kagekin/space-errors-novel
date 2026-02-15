# 検証記録: リポジトリ構成

『銀河電脳 スペース・エラーズ！』の初期リポジトリ構成を作成しました。

## 作成された構造

```
space-errors-novel/
├── .gitignore               # 不要ファイル除外設定
├── README.md                # プロジェクトトップ
├── LICENSE                  # 権利表記
│
├── 00_planning/             # 企画・構想
│   ├── proposal.md          # 企画書テンプレート
│   ├── catch_copy.md        # キャッチコピー案
│   └── roadmap.md           # ロードマップ
│
├── 01_settings/             # 設定資料
│   ├── world/               # 世界観（READMEあり）
│   └── characters/          # キャラクター（READMEあり）
│
├── 02_manuscripts/          # 原稿
│   ├── chapter_01/          # 1章ドラフト
│   ├── chapter_02/          # （ディレクトリ作成）
│   └── shorts/              # （ディレクトリ作成）
│
├── 03_neta_lab/             # ネタ・実験
│   ├── 01_seeds/            # ネタの種（theme_expansion.md等）
│   ├── 02_research/         # 取材メモ（physics_notes.md等）
│   ├── 03_test_writing/     # 文体テスト（battle_test.md等）
│   └── draft_ideas/         # ポンチ絵・アイデア（item_ideas.md等）
│
├── 04_assets/               # 素材（READMEあり）
│
└── public_website/          # 特設サイト
    ├── index.html           # トップページ
    ├── updates.json         # 更新情報データ
    └── assets/              #（READMEあり）
```

## 検証手順

1.  ルートディレクトリ `d:\github\space-errors-novel` に全てのディレクトリとファイルが生成されていることを確認しました。
2.  `public_website/index.html` が `updates.json` を読み込む構造になっていることをコード上で確認しました。

## 次のステップ

- `00_planning/roadmap.md` に具体的なスケジュールを記入する。
- `03_neta_lab/01_seeds/theme_expansion.md` に思いついたテーマを書き殴る。
- `public_website` をGitHub Pagesで公開設定する（リモートリポジトリにプッシュ後）。
