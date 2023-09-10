import styled from "styled-components";

import pikachuCheerUp from "../../assets/pikachuCheerUp.gif";

export const CenteredNotification = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

export const NotificationContainer = styled.div`
  background-image: url(${pikachuCheerUp});
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

export const Message = styled.p`
  margin-top: 90px;
  font-size: 17px;
  margin-bottom: 10px;
  font-weight: 700;
  padding: 10px;
  border-radius: 5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;
