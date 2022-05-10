import React from "react";
import Typography from "@mui/material/Typography";
import Card from "../0 - Index/Card";
import { Widget } from "@typeform/embed-react";
import ScholarshipList from "./ScholarshipList";
import NaviButtons from "../0 - Index/NaviButtons";

export default function weeb3daoScholarship() {
  return (
    <div className="weeb3dao-scholarship">
      <div className="m-10">
        <Typography variant="h1" color="inherit" component="h1" mb={2}>
          weeb3dao Mint 奨学金制度
        </Typography>
        <Widget
          id="rifISQzR"
          style={{ width: "100%", height: "900px" }}
          className="my-form"
        />

        <Typography variant="h3" color="inherit" component="h3" mt={3} mb={2}>
          免責事項
        </Typography>
        <>
          <ul className="list-disc ml-14 mt-4">
            <li className="my-2">
              weeb3daoのMint Scholarshipは、新しいアーティストがNFTの道を歩み始めることを支援するためのものです。この奨学金は純粋な寄付であり、私たちは奨学金の受給者からいかなる報酬や利益も受け取りません。
            </li>
            <li className="my-2">
              奨学金を受け取った後、盗作や著作権侵害の行為を行ったアーティストに対して、私たちは一切の責任を負いません。
            </li>
            <li className="my-2">
              我々は盗作や著作権侵害の行為を一切認めません。万が一、奨学金受給後に盗作や盗用が発覚した場合は、公開で警告を行います。
            </li>
            <li className="my-2">
              盗作や著作権侵害のルールを理解していない若いアーティストもいるため、セカンドチャンスを与えたいと考えていますが、何度も違反するような行為は認めません。
            </li>
          </ul>

          <Typography variant="h4" color="inherit" component="h4" mt={3} mb={2}>
            奨学生に注意していただきたいこと
          </Typography>
          <ul className="list-disc ml-14 mt-4">
            <li className="my-2">
              盗用・トレース、大量引用（ポーズ・キャラクターデザインも含む）は行わないでください。
            </li>
            <li className="my-2">
              アートスタイルの模倣についてはグレーゾーンなので、模倣される側のアーティストが了承しているのであるならば問題はありません。ですが、衝突を避けるため、他のアーティストのアートスタイルの模倣は避けることを推奨します。
            </li>
            <li className="my-2">
              また、アーティストをタグ付けしたり、インスピレーションとして使用したアートワークをリンクしたりしても、大半のアーティストは返信をしませんし、リファレンスとして受け入れられません。ですので、アーティストが参照する作品に同意しているということを証明できない場合は、ヘビーリファレンスするべきではありません。
            </li>
          </ul>

          <Typography variant="h4" color="inherit" component="h4" mt={3} mb={2}>
            解決方法
          </Typography>
          <ul className="list-disc ml-14 mt-4">
            <li className="my-2">
              盗難、トレース、ヘビーリファレンスされた作品は、すべて永久にBurnするべきです。また、作品がすでに回収されている場合は、アーティストが回収者に返金する必要があります。
            </li>
          </ul>
        </>
        
        <Typography variant="h3" color="inherit" component="h3" mt={5} mb={2}>
          weeb3dao's Mint 奨学金受賞者リスト
        </Typography>
        <Card
          color="green"
          title="以下のアーティストは、ミント・スカラシップまたはオンボーディング・サポートで、weeb3daoの支援を受けています。"
        />
        <ScholarshipList />
        <NaviButtons
          return="メンバー紹介"
          returnlink="/introduction"
          next="NFTについての一般情報"
          nextlink="/info-NFT"
        />
      </div>
    </div>
  );
}
