import React, { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import prettier from 'prettier/standalone';
import prettierPluginBabel from 'prettier/plugins/babel';
import prettierPluginEstree from 'prettier/plugins/estree';
import prettierPluginTypescript from 'prettier/plugins/typescript';

const SnippetReferralAccount = () => {
  const [snippet, setSnippet] = useState(``);
  const unformattedSnippet = `
  <iframe id='iframe-widget' src='https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=false&amount=1&amountFiat&backgroundColor=2B2B35&darkMode=true&from=sol&horizontal=false&isFiat=false&lang=en-US&link_id=b0d09e3f1142fa&locales=true&logo=false&primaryColor=9945FF&to=usdc&toTheMoon=false' style="height: 356px; width: 100%; border: none"></iframe>
    <script defer type='text/javascript' src='https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js'></script>
`;

  useEffect(() => {
    prettier
      .format(unformattedSnippet, {
        parser: 'typescript',
        plugins: [prettierPluginBabel, prettierPluginEstree, prettierPluginTypescript],
      })
      .then((res) => {
        setSnippet(res);
      });
  }, [unformattedSnippet]);

  return (
    <div className='flex w-full justify-center text-left'>
      <SyntaxHighlighter language="typescript" showLineNumbers style={vs2015}>
        {snippet}
      </SyntaxHighlighter>
    </div>
  );
};

export default SnippetReferralAccount;
