import styled from "styled-components";
import { Message } from "../NotificationSuccess/NotificationSuccess.styled-component";

import pikachuNo from "../../../assets/pikachuNo.gif";

export const NotificationContainer = styled.div`
  background-image: url(${pikachuNo});
  background-size: cover;
  background-repeat: no-repeat;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
  color: #fff;
  border: 5px solid white;
  border-radius: 10px;
`;

export const TitleMessage = styled(Message)`
  margin-top: 5px;
  font-size: 17px;
  margin-bottom: 0px;
  font-weight: 700;
  padding: 10px;
  border-radius: 5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;

export const MessageError = styled.p`
  margin-top: 0px;
  color: #fff;
  background-color: red;
  font-size: 10px;
  margin-bottom: 82px;
  font-weight: 700;
  padding: 5px;
  border-radius: 5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;
