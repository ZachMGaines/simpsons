import React, { useState } from 'react';
import Load from '../../components/app/quote/Load';
import Quote from '../../components/app/quote/Quote';
import { twinPeaksAPI } from '../../services/twinPeaksAPI';

const TpQuote = () => {

  const [fetchedQuote, setQuote] = useState('find a quote');

  const newerQuote = async () => {
    const res = await twinPeaksAPI();
    setQuote(res.quoteTextOnly);
  };

  return (
    <section>
      <Quote text={fetchedQuote} />
      <Load onClick={newerQuote} />
    </section>
  );


};

export default TpQuote;
