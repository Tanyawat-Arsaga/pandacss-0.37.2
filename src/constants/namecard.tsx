import { styled } from "../../styled-system/jsx";

export const NAMECARDS = [
  {
    variant: "default",
    color: "#1F1F5A",
    content: {
      firstRow: "Smiley Light Village",
      secondRow: "鬼頭明里の里民、タイ支部 🇹🇭",
      name: "ハムP",
      nameSubtitle: "はむぴー／HamP",
      message: "สวัสดีครับ!（サワディーカー）",
    },

    Quote: () => {
      return (
        <styled.blockquote fontSize="xs" textAlign="center" fontStyle="italic">
          「…推しって<b>“応援する存在”</b>というよりも、
          <br />
          <b>“自分のモチベーションを高める存在”</b>…」
          <br />ー 鬼頭明里
        </styled.blockquote>
      );
    },
  },
  {
    variant: "kaho",
    color: "#f8b500",
    content: {
      firstRow: "HASUNOSORA JOGAKUIN SCHOOL IDOL CLUB",
      secondRow: "蓮ノ空のこと好き好きクラブのみなさん",
      name: "ハムP",
      nameSubtitle: "はむぴー／HamP",
      message: "สวัสดีครับ!（サワディーカー）",
    },

    Quote: () => {
      return (
        <styled.blockquote fontSize="xs" textAlign="center" fontStyle="italic">
          「フラワー」
          <br />ー 楡井希実
        </styled.blockquote>
      );
    },
  },
];

export type NamecardData = (typeof NAMECARDS)[0];
