# 実装計画書: 『銀河電脳 スペース・エラーズ！』 リポジトリ構成

『銀河電脳 スペース・エラーズ！』の執筆・管理環境を構築するためのディレクトリ構成とテンプレートファイルを作成します。

## ユーザーレビューが必要な事項
特になし。標準的な構成案に基づき作成します。

## 変更内容

### プロジェクトルート
#### [NEW] .gitignore
OS、エディタの一時ファイルを除外する設定。
#### [MODIFY] README.md
プロジェクトのトップページとして、作品概要とディレクトリ案内を記載。
#### [NEW] LICENSE
権利表記（とりあえず空、またはMITなど一般的だが、小説なので著作権表示のみにするか、一旦プレースホルダー）

### 00_planning (企画・構想)
#### [NEW] proposal.md, catch_copy.md, roadmap.md
企画書、キャッチコピー、スケジュールのテンプレート。

### 01_settings (設定資料)
#### [NEW] world/, characters/
世界観とキャラクター設定用のディレクトリ。

### 02_manuscripts (原稿)
#### [NEW] chapter_01/, chapter_02/, shorts/
各章と短編のディレクトリ。

### 03_neta_lab (ネタ・実験)
#### [NEW] 01_seeds/, 02_research/, 03_test_writing/, draft_ideas/
ネタ出し、取材、テストライティング用のディレクトリ構成とテンプレートファイル（`theme_expansion.md` 等）。

### 04_assets (素材)
ディレクトリのみ作成。

### docs/setup_space_errors_repo
#### [NEW] task.md, implementation_plan.md, walkthrough.md
本タスクの管理用ドキュメント。

### public_website (特設サイト)
#### [NEW] index.html
特設サイトのトップページ。
#### [NEW] updates.json
更新情報管理用JSON。
#### [NEW] assets/, _content/
サイト用アセットとコンテンツディレクトリ。

## 検証計画

### 自動テスト
なし（静的ファイル生成のみのため）。

### 手動検証
1. 作成されたディレクトリ構造が指定通りか確認 (`tree` コマンド等)。
2. `README.md` や `index.html` の内容が正しいか確認。
3. `updates.json` のフォーマット確認。
