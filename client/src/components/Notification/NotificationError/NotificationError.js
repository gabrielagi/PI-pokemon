// Notification.js
import React from "react";

import {
  CenteredNotification,
  CloseButton,
} from "../NotificationSuccess/NotificationSuccess.styled-component";

import {
  NotificationContainer,
  TitleMessage,
  MessageError,
} from "./NotificationError.styled-components";

import { CloseButtonNotification } from "../../Buttons/Buttons.styled-components";

const Notification = ({ onClose }) => {
  return (
    <CenteredNotification>
      <NotificationContainer>
        <TitleMessage>
          There was an error and the Pokemon could not be created!
        </TitleMessage>
        <MessageError>
          {" "}
          Remember not to repeat an already created Pokemon
        </MessageError>
        <CloseButtonNotification onClick={onClose}>
          Close
        </CloseButtonNotification>
      </NotificationContainer>
    </CenteredNotification>
  );
};

export default Notification;
