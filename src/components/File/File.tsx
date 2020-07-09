import React from "react";
import './File.scss';
import {
  MdInsertDriveFile
} from 'react-icons/md';

function File(props: { name: string }) {

  return (
    <div className="file wrap xl-flexbox xl-middle">
      <div className="col icon">
        <MdInsertDriveFile />
      </div>
      <div className="col">
        {props.name}
      </div>

    </div>
  );

}

export default File;