import * as React from 'react';

function SvgBoeing(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 82.645 68.067"
      {...props}
    >
      <defs>
        <clipPath clipPathUnits="userSpaceOnUse" id="boeing_svg__a">
          <path d="M706.23 757.475h145.453v33.224H706.23z" />
        </clipPath>
      </defs>
      <g
        clipPath="url(#boeing_svg__a)"
        transform="matrix(2.04878 0 0 -2.04878 -1446.913 1619.972)"
      >
        <path
          d="M717.836 765.202c-2.386 0-4.58.817-6.318 2.187 2.022 4.564 6.142 10.687 11.76 16.667a10.204 10.204 0 004.773-8.643c0-1.554-.35-3.028-.971-4.347-1.782.825-3.444 1.857-4.854 3.16l3.078-5.778a10.182 10.182 0 00-7.468-3.246m-10.212 10.211c0 5.643 4.57 10.214 10.212 10.214 1.512 0 2.945-.329 4.239-.917-5.535-4.892-9.821-10.578-12.357-15.492a10.171 10.171 0 00-2.094 6.195m20.739-4.895a11.533 11.533 0 011.08 4.895c0 4.035-2.058 7.589-5.184 9.669a83.377 83.377 0 006.022 5.618 52.393 52.393 0 01-7.06-5.001 11.564 11.564 0 01-5.385 1.324c-6.41 0-11.606-5.2-11.606-11.61 0-2.893 1.06-5.543 2.813-7.573-2.224-4.809-2.613-8.671-.653-9.977 2.097-1.399 6.659 1.137 9.397 5.267 0 0-4.234-3.82-6.56-2.944-1.431.542-1.436 2.731-.256 5.87a11.549 11.549 0 016.865-2.249c3.18 0 6.06 1.278 8.157 3.348l.412-.776c5.059.411 20.164.811 20.164.811 0 .725-10.001.067-18.206 3.328"
          fill="#1d439c"
        />
      </g>
    </svg>
  );
}

export default SvgBoeing;