import React, { FunctionComponent } from "react";
import "./CommitCard.scss";

// type CommitCardProps = {
//   sha: string,
//   message: string
//   authorName?: string,
//   authorEmail?: string,
// }

type CommitCardProps = {
  message: string; // Commit message
  tree: string; // SHA-1 object id of corresponding file tree
  parent?: Array<string>; // an array of zero or more SHA-1 object ids
  author?: {
    name: string; // The author's name
    email: string; // The author's email
    timestamp: number; // UTC Unix timestamp in seconds
    timezoneOffset: number; // Timezone difference from UTC in minutes
  };
  committer?: {
    name: string; // The committer's name
    email: string; // The committer's email
    timestamp: number; // UTC Unix timestamp in seconds
    timezoneOffset: number; // Timezone difference from UTC in minutes
  };
  gpgsig?: string; // PGP signature (if present)
  onClickSha?: Function
}

const CommitCard: FunctionComponent<CommitCardProps> = (
  {
    message,
    tree,
    onClickSha
  }
) => {
  return (
    <div className="commit-card xl-left">
      <div className="wrap xl-flexbox xl-middle">
        <div className="col xl-8-12 md-1-1">
          <div className="message">
            <h4>{message}</h4>
          </div>
        </div>
        <div className="col xl-4-12 md-1-1 xl-right">
          <div className="sha" onClick={(e) => onClickSha ? onClickSha({
            event: e,
            sha: tree
          }) : null}>
            <p>{tree}</p>
          </div>
        </div>
      </div>
      <div className="author-name"></div>
    </div>
  )
}

export default CommitCard;