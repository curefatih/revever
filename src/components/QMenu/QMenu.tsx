import React, { Component } from "react";
import './QMenu.scss';

type ButtonType = {
  content: string | React.ReactNode,
  onClick?: Function
}

type QMenuProps = {
  buttons: ButtonType[]
}

function QMenu(props: QMenuProps) {

  return (
    <div className="qmenu wrap">
      {props.buttons.length ? props.buttons.map((button: ButtonType, index: number) => {
        return (
          <div className="col" key={index}>
            <div className="button_wrapper">
              {button.content}
            </div>
          </div>
        );
      }) : null}
    </div>
  );
}

export default QMenu;