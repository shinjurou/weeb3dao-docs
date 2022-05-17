import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import NaviButtons from "../0 - Index/NaviButtons";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Culture() {
  return (
    <div className="culture">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          カルチャー
        </Typography>
        <Card
          color="red"
          title="NFTは一攫千金を狙うようなものではありません。もし、あなたがお金を稼ぐためだけにコミュニティに参加しているのなら、短期間でやめてしまう可能性が高いでしょう。"
        />

        <div className="grid grid-cols-1 divide-y-2 divide-gray-400/25 divide-dashed">
          <Card
            color="pink"
            content={[
              <ul className="list-disc ml-4">
                <li className="mt-1">
                  <span className="text-pink-600 font-bold">
                    アート作品の価値は、アーティストではなくコレクターに決定します
                  </span>
                  。アート作品の価値は、通常、
                  <span className="text-teal-600 font-bold">
                    アーティストという人間、作品の意味、あるいはコミュニティへの貢献度に基づいて
                  </span>
                  決定されます。
                </li>
                <li className="mt-1">
                  <span className="text-pink-600 font-bold">
                    Twitterで多くのフォロワーを持つアーティストは、すでに何年もかけて作品の意味を作り、それがファンに浸透している
                  </span>
                  のでフォロワーの少ないアーティストに比べ、売れやすい。
                </li>
                <li className="mt-1">
                  <span className="text-pink-600 font-bold">
                    アートは技術だけでなく、見る人に感動を与えることが重要です。技術に磨きをかけた作品は、より早く人の心をつかむことができます
                  </span>
                  。ですが、小さなアーティストがNFTのコミュニティーに居場所がないわけではありません。
                </li>
                <li className="mt-1">
                  <span className="text-pink-600 font-bold">
                    コミュニティと関われば関わるほど、より印象に残ります
                  </span>
                  。その結果、
                  <span className="text-green-600 font-bold">
                    コレクターが作品のスキルではなく、あなたという人間をみて作品を集めるケースが生まれるのです
                  </span>{" "}
                  <span className="relative bottom-0.5">
                    <ArrowRightAltIcon />
                  </span>{" "}
                  つまり、多くのファンを持たない状態でスタートした場合は、努力が必要ですが、コミュニティで成功できないというわけではありません。
                </li>
                <li className="mt-1">
                  アニメ作品の価値を理解できない人がいるように、あるアートスタイルの価値を理解できない人もいるはずです。だからといって、無理にそのアートスタイルを好きになる必要はなく、
                  <span className="text-green-600 font-bold">
                    他の人の趣味や価値観を尊重し、礼儀正しくあることが必要です。
                  </span>
                  アートは
                  <span className="text-pink-600 font-bold">主観的</span>
                  なものであり、作品に意味を見出す人は必ずいます。
                  <span className="text-orange-500 font-bold">
                    自分の好きな芸術作品を所有することに喜びを感じることは、
                  </span>
                  違法行為でない限り、
                  <span className="text-orange-500 font-bold">
                    その人の権利です
                  </span>
                  。
                </li>
              </ul>,
            ]}
          />
          <div className="mt-5">
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={2}
              mb={1}
            >
              社交性
            </Typography>
            <div>
              <span className="text-pink-600 font-bold">
                NFTで最も重要なのはコミュニティ
              </span>
              なので、以下は行動を推奨しています。
            </div>
            <Card
              color="pink"
              content={[
                <div>
                  <span className="text-green-600 font-bold">「良い行動」</span>
                  を<span className="text-pink-600 font-bold">完璧</span>
                  にこなす必要はありませんが、
                  <span className="text-red-600 font-bold">
                    「悪い行動」は避けなければなりません
                  </span>
                  。
                </div>,
              ]}
            />
            <Card
              color="green"
              title="良い行動"
              content={[
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      常に相手を尊重し、親切であること
                    </span>
                    。
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      本物の関わりを持つこと
                    </span>
                    。
                  </li>
                  <li className="mt-1">
                    GMと言うこと（きちんと挨拶をすること)。
                  </li>
                  <li className="mt-1">
                    Discordサーバーでチャットしたり遊んだりすること。
                  </li>
                  <li className="mt-1">宣伝は許可された所でのみすること。</li>
                  <li className="mt-1">
                    他の人が質問したら
                    <span className="text-green-600 font-bold">助ける</span>。
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      他の人の芸術の趣味を尊重すること
                    </span>
                    。世の中には様々なアートスタイルがありますが、Twitterのような公共の場では
                    <span className="text-red-600 font-bold">否定的</span>
                    なことは言わない方が良いでしょう。
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      不審な人物や不適切な行動を見かけたらDiscordサーバーのモデレーターに報告すること
                    </span>
                    。
                  </li>
                </ul>,
              ]}
            />
            <Card
              color="red"
              title="悪い行動"
              content={[
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      殺害予告のジョークを言う
                    </span>
                    。
                  </li>
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">他人を名指し</span>
                    で罵る。
                  </li>

                  <li className="mt-1">
                    <span className="text-red-600 font-bold">他人を侮辱</span>
                    する。
                  </li>
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      他人の名誉を傷つけたり、誹謗中傷すること
                    </span>
                    。
                  </li>
                  <li className="mt-1">general chatなどで宣伝をしない。</li>
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      悪意のあるリンク
                    </span>
                    を他人に送信する。
                  </li>
                </ul>,
              ]}
            />
          </div>
          <div className="mt-5">
            <Typography
              variant="h2"
              color="inherit"
              component="h2"
              mt={2}
              mb={1}
            >
              アート関連
            </Typography>
            <Card
              color="pink"
              content={[
                <div>
                  <span className="text-green-600 font-bold">「良い行動」</span>
                  を<span className="text-pink-600 font-bold">完璧</span>
                  にこなす必要はありませんが、
                  <span className="text-red-600 font-bold">
                    「悪い行動」は避けなければなりません
                  </span>
                  。
                </div>,
              ]}
            />
            <Card
              color="green"
              title="良い行動"
              content={[
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      可能な限り作品やWIPを共有する
                    </span>
                    ポートフォリオに作品が多ければ多いほど、あなたの
                    <span className="text-teal-600 font-bold">真偽</span>
                    を確認しやすくなります
                  </li>
                  <li className="mt-1">
                    <span className="text-green-600 font-bold">
                      盗用や盗作などの報告にも協力しましょう
                    </span>
                    。
                  </li>
                </ul>,
              ]}
            />
            <Card
              color="red"
              title="悪い行動"
              content={[
                <ul className="list-disc ml-4">
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      他人の芸術作品をNFTとして販売すること
                    </span>
                    。
                  </li>
                  <li className="mt-1">
                    <span className="text-red-600 font-bold">
                      他人の芸術作品を盗用、トレース、大量に参照すること
                    </span>
                    。
                  </li>
                </ul>,
              ]}
            />
          </div>
        </div>
        <NaviButtons
          return="用語解説"
          returnlink="/community/terminologies"
          next="よくある質問"
          nextlink="/faq"
        />
      </div>
    </div>
  );
}
