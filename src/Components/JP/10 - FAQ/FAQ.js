import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import NaviButtons from "../0 - Index/NaviButtons";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function FAQ() {
  return (
    <div className="faq">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          FAQ
        </Typography>

        <div className="grid grid-cols-1 divide-y-2 divide-gray-400/25 divide-dashed">
          <div className="mt-0">
            <Typography
              variant="h3"
              color="inherit"
              component="h3"
              mt={2}
              mb={1}
            >
              <div className="mb-2">
                マルチエディションか1/1のどちらで出すべきか？
              </div>

              <div className="mb-2">なぜ私の作品は売れないのか？</div>
              <div className="mb-2"> 作品を早く売るには？</div>
              <div className="mb-2"> NFTの分野で成功するには？</div>
            </Typography>
            <Card
              color="green"
              title={[
                <div>
                  私が
                  <Link
                    link="https://mirror.xyz/shinjurou.eth/uIq__DaPcJ_Y3ku41N8_EGM7fZ8EIe1MwSYA3Q-ZMnA"
                    title="書いた記事"
                  />
                  を読んでください。
                </div>,
              ]}
            />
          </div>
          <div>
            <Typography
              variant="h3"
              color="inherit"
              component="h3"
              mt={2}
              mb={1}
            >
              ファンアート（二次創作）を投稿してもいいのか？
            </Typography>
            <Card
              color="purple"
              content={[
                <div>
                  <div>
                    <span className="text-purple-700 font-bold">短い回答:</span>{" "}
                    オリジナル（一次創作）のみにして下さい。
                  </div>
                  <div>
                    <span className="text-purple-700 font-bold">長い回答:</span>{" "}
                  </div>
                  <ul className="list-disc ml-4">
                    <li>
                      ファンアートは非常に
                      <span className="text-red-600 font-bold">
                        グレーゾーン
                      </span>
                      です。日本の企業は通常、著作権訴訟を起こしません。なぜかと言うとファンアートは、企業が自社の著作物を宣伝するための手段であると同時に、ファンの創造性を発揮させるものでもあるからです。しかし、そのファンアートがあまりにも人気を博し、企業の注目を浴びるようになると、
                      <span className="text-red-600 font-bold">
                        訴訟に発展するケース
                      </span>
                      もあります。最も顕著な例は、
                      <Link
                        link="https://www.comipress.com/news/2007/02/04/1456.html"
                        title="Dドラえもんの同人誌が小学館に訴えられたケースです"
                      />
                      。
                      <span className="text-red-600 font-bold">
                        一般的な経験則では、ファンアートが多額の利益を得なければ、著作権訴訟を起こされることはありません
                      </span>
                      。
                      <span className="relative bottom-0.5 right-1">
                        <ArrowRightAltIcon />
                      </span>
                      ですが、NFTは一度の販売で多額の利益を得る可能性があるため、その限りではありません。
                    </li>
                    <li>
                      ファンアートが販売された後、企業がNFTの所有者に対して訴訟を起こすだけで、作家は責任を負わない。
                      <span className="relative bottom-0.5">
                        <ArrowRightAltIcon />
                      </span>{" "}
                      <span className="text-red-600 font-bold">
                        コレクターに大きな損失を与えてNFTが削除される可能性が高い。
                      </span>
                    </li>
                    <li>
                      <span className="text-pink-600 font-bold">
                        このような質問をされたコレクターの方々は、アニメの原画に興味を持たれたようです。
                      </span>
                    </li>
                  </ul>
                </div>,
              ]}
            />
            <Card
              color="green"
              title="オリジナルは、あなたとコレクターの安全を守ると同時に、あなた自身の個性と創造性を促進します。"
            />
          </div>
          <div className="mt-8">
            <Typography
              variant="h3"
              color="inherit"
              component="h3"
              mt={2}
              mb={1}
            >
              依頼した作品をNFTにしても大丈夫?
            </Typography>
            <Card
              color="red"
              title="他人にアートワークを依頼し、そのアートワークを使用して、アーティストの許可を得ずに自分のNFTとして販売することは、非常に嫌われる行為であり、行ってはいけません。"
            />
            <Card
              color="orange"
              content={[
                <div>
                  <ul className="list-disc ml-4">
                    <li>
                      委託された作品をNFTとして販売したい場合、
                      <span className="text-red-600 font-bold">
                        その作品をmintする前にアーティストの許可を得てください
                      </span>
                      。
                    </li>
                    <li>
                      NFTとして販売されるコミッションワークは、
                      <span className="text-red-600 font-bold">
                        商業利用も踏まえた相場
                      </span>
                      で価格を設定する必要があります。
                    </li>
                    <li>
                      <span className="text-red-600 font-bold">
                        アーティストの許可なく作品の鋳造を行わないでください
                      </span>
                      。
                    </li>
                    <li>
                      <span className="text-pink-600 font-bold">
                        コミッション価格、ロイヤリティ、アートワークの権利と許可
                      </span>
                      などについて、アーティストと適切に話し合ってください。
                    </li>
                    <li>
                      アーティストが
                      <span className="text-pink-600 font-bold">
                        NFTの仕組みを理解していることを確認
                      </span>
                      し、
                      <span className="text-red-600 font-bold">
                        その知識のなさを悪用しないこと
                      </span>
                      。
                    </li>
                  </ul>
                </div>,
              ]}
            />
            <Card
              color="green"
              content={[
                <div>
                  <span className="text-pink-600 font-bold">
                    依頼した作品はNFTとして使用しない方が良いが、
                  </span>
                  アートワークの権利は委託者とアーティストの間の契約によって異なる。
                  <div>
                    <span className="text-green-600 font-bold">
                      <span className="relative bottom-0.5">
                        <ArrowRightAltIcon />
                      </span>{" "}
                      この点については、両者で合意し、慎重に話し合うのがベストです
                    </span>
                    。
                  </div>
                </div>,
              ]}
            />
          </div>
        </div>
        <NaviButtons
          return="カルチャー"
          returnlink="/community/culture"
          next="環境問題"
          nextlink="/environment"
        />
      </div>
    </div>
  );
}
