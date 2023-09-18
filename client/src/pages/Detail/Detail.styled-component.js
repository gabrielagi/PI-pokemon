import styled from "styled-components";

import detailbackground from "../../assets/detailbackground.jpg";

export const DetailBackgroundContainer = styled.div`
  background-color: #1d252d;
  background-image: url(${detailbackground});
  min-height: 96vh;
  background-size: cover;
  background-attachment: fixed;
`;

export const DetailContainer = styled.div`
  padding: 50px 250px 15px 250px;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    padding: 70px 100px 15px 100px;
    padding: 15px;
    margin-top: 80px;
  }
`;

export const DetailCard = styled.div`
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.4); /* rgba(30, 13, 58, 0.92) */
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);
  margin-top: 30px;
  border: 3px solid #fff;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DetailInfo = styled.div`
  padding: 30px;
  flex: 1;
  color: #1d252d;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const DetailImage = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  margin: 15px 50px 80px 40px;

  @media screen and (max-width: 768px) {
    color: #fff;
    display: flex;
    margin-top: 20px;
    margin-left: 75px;
    max-width: 65%;
    border-radius: 8px 8px 0 0;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const TypeWrapper = styled.div`
  margin-left: 30px;
`;

export const TypeImage = styled.img`
  width: 60px;
  height: 60px;
`;

export const InfoWrapper = styled.div`
  background-color: #8df904;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 40px;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    padding: 0px;
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

export const AttributeTitle = styled.h1`
  font-weight: 600px;
  margin-left: 30px;
  font-size: 50px;
  font-family: consolas;
  align-items: center;
  color: #1d252d;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const AttributeValue = styled.h2`
  margin: 0;
  font-size: 20px;

  color: #1d252d;

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;
