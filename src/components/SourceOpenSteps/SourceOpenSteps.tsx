import React from "react";
import "./SourceOpenSteps.scss";
import cx from "classnames";

function SourceOpenSteps({ className, ...rest }: { className?: string }) {
  return (
    <div className={cx("source-open-steps", className)}>
      <div className="wrap">
        <div className="col xl-1-2">
          Alternative 1
        </div>
        <div className="col xl-1-2">
          Alternative 2
        </div>
      </div>
    </div>
  )
}

export default SourceOpenSteps;