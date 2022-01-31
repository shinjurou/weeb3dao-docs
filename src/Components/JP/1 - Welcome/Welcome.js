import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import Link from "../0 - Index/Link";
import cover from "../../../Imgs/weeb3_cover.jpg";
import NaviButtons from "../0 - Index/NaviButtons";

export default function Welcome() {
  return (
    <div className="welcome">
      <img src={cover} alt="cover" />
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          ようこそ！
        </Typography>
        <Typography variant="h4" color="inherit" component="h4" mb={2}>
          <span className="text-orange-500">
            アニメNFTコミュニティへようこそ！
            <br />
            私たちは、あなたと一緒にここにいられることをとても嬉しく思っています。
          </span>
        </Typography>
        <Typography variant="body1" color="inherit" component="div">
          このウェブサイトはNFTに興味のあるイラストレーターたちがアニメNFTコミュニティに馴染めるように{" "}
          <Link link="https://twitter.com/weeb3dao" title="weeb3dao" /> (
          <Link link="https://twitter.com/AnifamNft" title="Anifam" /> +
          <Link link="https://twitter.com/uwucrewnft" title="uwucrew" />
          )が、情報冊子として作成致しました。
        </Typography>

        <Card
          color="teal"
          title='何故"NFTコミュニティ"ではなく"アニメNFTコミュニティ"なのか。'
          content="NFTコミュニティ自体は数多くありますが、そういったコミュニティの中でも、私たちのコミュニティは現在アニメNFTコミュニティで活動しているコレクターやアーティストで構成されており、主にアニメにインスパイアされたスタイルのアートワークに焦点を当てているからです。
          "
        />

        <Typography variant="body1" color="inherit" component="div" mb={2}>
          最初のNFTは2014年5月に作られました。ですが、アニメNFTのアーティストが参入し始めたのは、2021年に入ってからです。つまり、今参入されているアーティストは、NFTとアニメアート界を融合させるという新しい試み
          に、
          <span className="text-green-700">
            とても早い段階から参入しているということになります
          </span>
          。
        </Typography>
        <Typography variant="body1" color="inherit" component="div">
          ここ数ヶ月、アニメNFTコミュニティは急激に成長し続けていますが、その急激な成長に情報が追いついておらず、情報が不足しています。その為、新規参入アーティストは、いわゆる説明書のようなものがないため、周囲の人間に絶えず質問をしなければなりませんが、質問をされた側の人間によって、質問に対する答えが異なる場合も多く、矛盾が生じてしまうというのが現状です。
        </Typography>

        <Card
          color="green"
          content={[
            <>
              なので、新規参入アーティストが
              <span className="text-pink-600">
                必要としている情報をより簡単に見つけられることができるように
              </span>
              私たちはこのウェブサイトを作成致しました。
            </>,
          ]}
        />
        <NaviButtons
          return=""
          returnlink=""
          next="データベース情報"
          nextlink="/database-info"
        />
      </div>
    </div>
  );
}
