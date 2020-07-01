import * as React from "react";

function SvgCurve(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 361.421 26.458' {...props}>
      <path
        d='M-5.292 26.458V15.875S33.355-.645 88.084-.373C163.574 0 199.517 20.15 272.96 20.15 327.434 20.151 365.125 0 365.125 0v26.458z'
      />
    </svg>
  );
}

export { SvgCurve };
