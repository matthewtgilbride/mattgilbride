import React, { FC, SyntheticEvent, useState } from 'react';
import { CSSObject } from '@emotion/core';
import { Layout } from '../../components/layout/Layout';
import {
  palette,
  makeResponsiveObject,
  makeSize,
  makeSpace,
  responsiveBreakpoints,
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
  maxWidth: responsiveBreakpoints.phone,
  '> button': {
    marginTop: makeSpace('lg'),
    boxShadow: 'none',
    border: 'none',
    borderRadius: 4,
    backgroundColor: palette.primary(),
    color: palette.text(),
    padding: makeSpace('xs'),
    fontSize: makeSize('md'),
    ':hover,:focus': {
      boxShadow: 'none',
      outline: 'none',
      backgroundColor: palette.primary(25),
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

type PostState = 'initial' | 'loading' | 'success' | 'error';

const styleMessage = (postState: PostState): string => {
  switch (postState) {
    case 'initial':
      return palette.text();
    case 'error':
      return palette.error();
    case 'loading':
      return palette.accent();
    case 'success':
    default:
      return palette.success();
  }
};

const submitMessage = (postState: PostState): string => {
  switch (postState) {
    case 'initial':
      return "I'm all ears...";
    case 'error':
      return 'Sorry! Something went wrong';
    case 'loading':
      return 'just a sec...';
    case 'success':
    default:
      return 'Thanks for reaching out!';
  }
};

const initialValues = {
  why: '',
  name: '',
  email: '',
  message: '',
};

const Contact: FC = () => {
  const [postState, setPostState] = useState<PostState>('initial');
  const [values, setValues] = useState(initialValues);

  const changeHandler = (key: keyof typeof values) => (value: string) =>
    setValues({ ...values, [key]: value });

  const submitHandler = (e: SyntheticEvent): void => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      const url = 'https://contact.mattgilbride.com'; // TODO: inject
      setPostState('loading');
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
        .then((res) => {
          setTimeout(() => {
            if (res.ok) {
              setValues({ ...initialValues });
            }
            setPostState(res.ok ? 'success' : 'error');
          }, 1000);
        })
        .catch(() => {
          setTimeout(() => {
            setPostState('error');
          }, 1000);
        });
    }
  };

  return (
    <Layout>
      <form css={styleContainer} onSubmit={submitHandler}>
        <span style={{ color: styleMessage(postState) }}>
          {submitMessage(postState)}
        </span>
        <FormControl
          required
          disabled={postState === 'loading'}
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
          disabled={postState === 'loading'}
          labelText="Name *"
          type="input"
          value={values.name}
          onValueChange={changeHandler('name')}
        />
        <FormControl
          required
          disabled={postState === 'loading'}
          labelText="Email *"
          type="input"
          htmlType="email"
          value={values.email}
          onValueChange={changeHandler('email')}
        />
        <FormControl
          disabled={postState === 'loading'}
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
