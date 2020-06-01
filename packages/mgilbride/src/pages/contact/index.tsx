import React, { FC, SyntheticEvent, useState } from 'react';
import { CSSObject } from '@emotion/core';
import { Layout } from '../../components/layout/Layout';
import {
  makeSpace,
  responsiveBreakpoints,
  makeResponsiveObject,
  makeColor,
  makeFontSize,
} from '../../utils/design';
import { FormControl } from '../../components/FormControl';

const styleContainer: CSSObject = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridAutoRows: 'max-content',
  gridRowGap: makeSpace('sm'),
  paddingTop: makeSpace('lg'),
  margin: '0 auto',
  minWidth: '75%',
  maxWidth: responsiveBreakpoints.phoneLg,
  '> button': {
    marginTop: makeSpace('lg'),
    cursor: 'pointer',
    boxShadow: 'none',
    border: 'none',
    borderRadius: 4,
    backgroundColor: makeColor('primary'),
    color: makeColor('light'),
    padding: makeSpace('xs'),
    fontSize: makeFontSize('md'),
    ':hover,:focus': {
      boxShadow: 'none',
      outline: 'none',
      backgroundColor: makeColor('primary', 1),
    },
  },
  ...makeResponsiveObject({
    beginAt: 'tabletPortrait',
    style: {
      minWidth: '50%',
      maxWidth: responsiveBreakpoints.phoneLg,
    },
  }),
};

const Contact: FC = () => {
  const [values, setValues] = useState({
    why: '',
    name: '',
    email: '',
    message: '',
  });

  const changeHandler = (key: keyof typeof values) => (value: string) =>
    setValues({ ...values, [key]: value });

  const submitHandler = (e: SyntheticEvent): void => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(values, undefined, 2));
  };

  return (
    <Layout>
      <form css={styleContainer} onSubmit={submitHandler}>
        <FormControl
          required
          labelText="Why are you reaching out? *"
          type="select"
          options={[
            { value: 'hello', text: 'Just saying hi' },
            { value: 'help', text: 'Looking for help' },
            { value: 'work', text: 'Looking for work' },
            { value: 'answers', text: 'Looking for ...answers' },
          ]}
          value={values.why}
          onValueChange={changeHandler('why')}
        />
        <FormControl
          required
          labelText="Name *"
          type="input"
          value={values.name}
          onValueChange={changeHandler('name')}
        />
        <FormControl
          required
          labelText="Email *"
          type="input"
          htmlType="email"
          value={values.email}
          onValueChange={changeHandler('email')}
        />
        <FormControl
          labelText="What's up?"
          type="textarea"
          value={values.message}
          onValueChange={changeHandler('message')}
        />
        <button type="submit">Say Hello</button>
      </form>
    </Layout>
  );
};

export default Contact; // eslint-disable-line import/no-default-export
