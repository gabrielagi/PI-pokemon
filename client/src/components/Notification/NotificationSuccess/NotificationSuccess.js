// Notification.js
import React from "react";

import {
  CenteredNotification,
  NotificationContainer,
  Message,
  CloseButton,
} from "./NotificationSuccess.styled-component";

import { CloseButtonNotification } from "../../Buttons/Buttons.styled-components";

const Notification = ({ onClose }) => {
  return (
    <CenteredNotification>
      <NotificationContainer>
        <Message>¡Pokémon successfully registered!</Message>
        <CloseButtonNotification onClick={onClose}>
          Close
        </CloseButtonNotification>
      </NotificationContainer>
    </CenteredNotification>
  );
};

export default Notification;
