# Zhumei Song / ソウ　ジュウメイ

横浜在住 / zhumeisongsong@gmail.com / [LinkedIn](https://www.linkedin.com/in/zhumei-song-a9041a1bb) / [GitHub](https://github.com/zhumeisongsong) / [Detail CV](https://zhumeisongsong.github.io/cv/)

## 技術スキル

TypeScript, React, GraphQL, NestJS, Node.js, Git, Docker, AWS, GitHub Actions, clean code, clean architecture

## 職務経歴

### ソフトウェアエンジニア @[Atrae](https://atrae.co.jp/) _(2021.12 ~ · 3 年+)_

React/Next.js/TailwindCSS/Jotai/Valtio/Immer/Nx Monorepo/TypeScript/NestJS/NodeJS/GraphQL/Restful API/Axios/Urql/Docker/AWS/GitHub Actions

- ドメイン層とアプリケーション層をプレゼンターから分離することにより、重いプレゼンターの問題が解決されました。これにより、変更の範囲がより管理しやすくなり、テスト時に必要なモックメソッドの数が大幅に減少しました
- React で手動で依頼注入（DI）フレームワークを実装し、インターフェース定義と実装の完全な分離を実現しました。これにより、モジュールの低い結合度と高い柔軟性が向上しました
- React の使用をインターフェース-アダプター層と UI 層に限定することで、システムの React や特定の状態管理ライブラリへの依存を減らしました
- 月間訪問者数 50 万を超えるサーベイ回答アプリケーションを Monorepo に移行し、モジュール化されたデザインにより、回答画面の異なるステップの独立した開発とデバッグをサポートし、開発効率と今後の保守性を向上させました。コンポーネントのオンデマンド読み込みを実装することにより、ページの FCP 速度が 50％改善されました（1.8 秒から 0.9 秒へ）
- 内部プライベートパッケージと共有オープンソースパッケージのバージョン管理に semantic-release を使用し、セマンティックバージョニングを実現してリリースプロセスを自動化しました
- バックエンドエンジニアと協力して、共有パッケージを通じてフロントエンドとバックエンドのエラーハンドリングの統一設計を実装しました（入力検証とエラーハンドリングを含む）。Error Code に基づく文書化されたエラーハンドリング解決策を提供しました
- 新しいプロジェクトで GraphQL Federation アーキテクチャを採用し、アグリゲートルートに基づいてサブグラフを設計することで、循環依存問題を成功裏に回避しました
- NestJS を使用して、GraphQL ベースの findAllWorkflowActions および findAllWorkflowTemplates API を開発し、これらのクエリのパフォーマンスを最適化しました
- Persisted Queries を使用してリクエストサイズを削減し、帯域幅の消費が減少し、サーバーが毎回クエリ内容を解析および検証する際のパフォーマンスオーバーヘッドがなくなりました
- 10MB を超える大きな JS ファイルに Gzip 圧縮を適用し、初期ページロード時間を大幅に短縮しました
- デザイナーと協力して、Material UI に基づいた再利用可能な UI コンポーネントライブラリ（LoadingButton、Steps、Rate、Spin、Selectable Table などのコンポーネントを含む）を開発および維持し、チームの開発効率とコードの一貫性を向上させました

### フロントエンドリード @[Monstarlab Japan](https://monstar-lab.com/jp) _(2018.12 ~ 2021.11 · 3 年)_

React/Redux/Redux-Saga/Immer/Sass/styled-components/axios/Docker/AWS/GitHub Actions

- グループ内の各拠点のフロントエンドエンジニアと共に、React のベストプラクティスを社内で推進
- コーヒーラベル印刷の Web プロジェクトで、5000+のラベル画像リストの表示パフォーマンスを Virtual List を使用して最適化し、ページのカクつき問題を解決
- 10 万人以上が同時にオンラインのライブコメント機能を設計・開発。原子カウンターを使用して並列コメント数のカウントの安全性を保証。throttle を使用してコメント更新の頻度を制限し、パフォーマンスを確保。Python スクリプトを使用して大量の同時リクエストをシミュレートし、コメント機能が 10 万人同時にオンラインに耐えられるかテスト
- 大規模な株取引システムのデザインシステムのコンポーネント開発とメンテナンスを主導

### フロントエンドリード @[Monstarlab China](https://www.monstar-lab.com.cn/) _(2016.03 ~ 2018.11 · 2 年 9 ヶ月)_

React/Redux/Redux-Saga/Immer/Sass/styled-components/axios/Docker/AWS/GitHub Actions

- CTO オフィスと協力し、全社のウェブプロジェクトにおいてフロントエンドとバックエンドの分離開発モデルを推進。フロントエンドとバックエンドを同時に開発できるようにし、全体的な効率を向上させました
- プロジェクト間の共通コンポーネントに対してテストコードを作成し、テストカバレッジを達成するとともに、スムーズなリファクタリングを可能にしました
- 会社のウェブプロジェクトにおけるフロントエンドコードレビュー標準の策定と実施を主導し、フロントエンドメンバーが互いにコードレビューを行うことで、知識の移転とコード品質の向上を実現しました
- 大規模なチケット予約ハイブリッドアプリケーションの WebView の設計と開発を担当。iOS と Android のネイティブシステムに共通の WebView を利用することで、開発効率を大幅に向上させました

### フロントエンドエンジニア @[Monstarlab China](https://www.monstar-lab.com.cn/) _(2014.10 ~ 2016.02 · 1 年 5 ヶ月)_

Html5/CSS3/SASS/JavaScript/jQuery/React/React Router/gulp/rollup

- jQuery を使用してインタラクティブでレスポンシブなウェブページを設計・開発し、さまざまなデバイスやブラウザでの最適なユーザー体験を実現しました
- React を独学し、動画視聴サイトのプロジェクトでフロントエンドとバックエンドの分離を成功裏に実現しました

### フリーランス _(2009.07 ~ 2014.09 · 5 年 3 ヶ月)_

Html5/CSS3/SASS/JavaScript/jQuery/PHP/WordPress

- 大学在学中にウェブ開発技術を独学しました。卒業後、ランドスケープアーキテクトとして働きながら、副業としてウェブ開発への情熱を追求し続けました
- 建築設計事務所、ランドスケープ設計事務所、IT 企業、ゲーム会社、時計販売会社を含む 20 社以上の企業にサービスを提供し、30 以上のブランドのデジタルマーケティングとプロモーションプロジェクトを成功させました

## 個人プロジェクト

AI を活用したアプリケーションの開発に取り組んでいます,開発の基盤は:[Multiple Projects Development Workspace](https://github.com/zhumeisongsong/multiple-products-workspace) / [GraphQL Federation Workspace](https://github.com/zhumeisongsong/graphql-federation-workspace) / [Shared Github Actions Library](https://github.com/zhumeisongsong/shared-actions) / [Semantic Release Config](https://github.com/zhumeisongsong/semantic-release-config) / [Git CZ Config](https://github.com/zhumeisongsong/git-cz-config) / [Common Error Exception](https://github.com/zhumeisongsong/multiple-products-workspace/pkgs/npm/common-error-exception)

## 言語

- **日本語**: ビジネスレベル (N2)
- **英語**: ビジネスレベル
- **中国語**: ネイティブ

## 学歴

[成都理工大学](https://www.cdut.edu.cn/) - 学士 景観設計 - 成都、中国 _(2008.09 - 2012.06)_

## 個人

私は旅行やガーデニングが好きで、また、自分の学びや経験を共有するために[ブログ](https://zhumeisongsong.github.io/blog)を書くのも楽しんでいます。
