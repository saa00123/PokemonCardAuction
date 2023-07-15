import React from "react";
import styled from "styled-components";
import Color from "../BaseComponents/Color";

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 21.875rem;
  height: 37.5rem;
  border: solid 1px ${Color({ color: "Gray4" })};
`;

const PreviewImage = styled.div`
  width: 18.75rem;
  height: 25rem;
  margin: 0 0 1.188rem;
  border: solid 1px ${Color({ color: "Gray4" })};
`;

const PreviewHeader = styled.header`
  width: 18.75rem;
  height: 1.875rem;
  font-size: 1.25rem;
  text-align: left;
  word-wrap: break-word;
`;

const PreviewAuctionContainer = styled.div`
  display: flex;
  width: 18.75rem;
  height: 3.438rem;
  margin-bottom: 1.063rem;
`;

const PreviewDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 9.375rem;
  height: 3.438rem;
`;

const DetailHeader = styled.header`
  width: 4.063rem;
  height: 1.25rem;
  margin: 3.5rem 5.875rem 0 0;
  font-size: 0.875rem;
  text-align: left;
`;

const DetailAuction = styled.div`
  display: flex;
  width: 9.375rem;
  height: 2.188rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left;
`;

const PriceUnit = styled.div`
  display: flex;
  align-items: end;
  font-size: 1rem;
`;

const SmallCardPreview = () => (
  <PreviewContainer>
    <PreviewImage />
    <PreviewHeader>완전기이이이이이이이이이이이이이인 제목</PreviewHeader>
    <PreviewAuctionContainer>
      <PreviewDetailContainer>
        <DetailHeader>남은 시간</DetailHeader>
        <DetailAuction>24:03:12</DetailAuction>
      </PreviewDetailContainer>
      <PreviewDetailContainer>
        <DetailHeader>현재가</DetailHeader>
        <DetailAuction>
          13,000<PriceUnit>원</PriceUnit>
        </DetailAuction>
      </PreviewDetailContainer>
    </PreviewAuctionContainer>
  </PreviewContainer>
);

export default SmallCardPreview;