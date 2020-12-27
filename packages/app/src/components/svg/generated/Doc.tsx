import * as React from 'react';

function SvgDoc(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 96"
      fill="#FFF"
      strokeMiterlimit={10}
      strokeWidth={2}
      width="1em"
      height="1em"
      {...props}
    >
      <path
        stroke="#979593"
        d="M67.172 7H27a2 2 0 00-2 2v78a2 2 0 002 2h58a2 2 0 002-2V26.828a2 2 0 00-.586-1.414L68.586 7.586A2 2 0 0067.172 7z"
      />
      <path fill="none" stroke="#979593" d="M67 7v18a2 2 0 002 2h18" />
      <path
        fill="#C8C6C4"
        d="M79 61H48v-2h31a1 1 0 110 2zm0-6H48v-2h31a1 1 0 110 2zm0-6H48v-2h31a1 1 0 110 2zm0-6H48v-2h31a1 1 0 110 2zm0 24H48v-2h31a1 1 0 110 2z"
      />
      <path
        fill="#185ABD"
        d="M12 74h32a4 4 0 004-4V38a4 4 0 00-4-4H12a4 4 0 00-4 4v32a4 4 0 004 4z"
      />
      <path d="M21.625 60.645c.066.522.109.977.13 1.366h.075c.03-.368.09-.813.175-1.335.087-.52.17-.96.252-1.319L25.791 44h4.57l3.656 15.127c.183.747.336 1.697.457 2.853h.061c.051-.797.178-1.718.381-2.761L37.841 44H42l-5.118 22h-4.86l-3.489-14.574c-.101-.42-.216-.967-.343-1.642a19.166 19.166 0 01-.236-1.472h-.06c-.041.358-.12.89-.237 1.595a40.749 40.749 0 01-.282 1.565L24.1 66h-4.936L14 44h4.235l3.184 15.388c.071.317.14.736.206 1.258z" />
    </svg>
  );
}

export default SvgDoc;
