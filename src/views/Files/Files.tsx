import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getCommits } from "../../redux/selectors";
import { connect, ConnectedProps } from "react-redux";

const mapStateToProps = (state: any) => {
  return {
    commits: getCommits(state),
  };
};

const connector = connect(mapStateToProps, {});

type PropsFromRedux = ConnectedProps<typeof connector>

type FilesProps = PropsFromRedux & {
  className?: string,
}


function Files(props: FilesProps) {
  let { sha } = useParams();
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (sha) {
      let result;
      // @ts-ignore
      if (window.ipcRenderer)
        // @ts-ignore
        result = ipcRenderer.sendSync('get-files', { path: props.commits.current, sha })

      console.log(result);
      if (result.data && result.data.length) {
        console.log("SETTING FILES");

        setFiles(result.data)
      }
    }

  }, [])

  return (
    <div className="files">

      <ul>
        {files.map((file: string, index: number) => {
          return (
            <li key={index}>
              {file}
            </li>
          )
        })}
      </ul>
    </div>
  )

}

export default connector(Files);