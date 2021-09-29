import React, { FC, SyntheticEvent, useCallback, useState } from 'react';
import { CSSObject } from '@emotion/core';
import { Palette } from '@mattgilbride/design-system/lib/utils/color/palette';
import { Layout } from '../../components/layout/Layout';
import {
  makeResponsiveObject,
  makeSize,
  makeSpace,
  responsiveBreakpoints,
} from '../../utils/design';
import { FormControl } from '../../components/FormControl';
import { usePalette } from '../../utils/usePalette';

const styleContainer = (palette: Palette): CSSObject => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridAutoRows: 'max-content',
  gridRowGap: makeSpace('sm'),
  margin: '0 auto',
  minWidth: '75%',
  maxWidth: responsiveBreakpoints.phone,
  '> button': {
    marginTop: makeSpace('lg'),
    boxShadow: 'none',
    border: 'none',
    borderRadius: 4,
    backgroundColor: palette.primary(),
    color: palette.contrast(),
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
      paddingTop: makeSpace('lg'),
    },
  }),
});

type PostState = 'initial' | 'loading' | 'success' | 'error';

const styleMessage = (palette: Palette, postState: PostState): string => {
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

  const submitHandler = useCallback(
    (e: SyntheticEvent): void => {
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
    },
    [values],
  );

  const { palette } = usePalette();

  return (
    <Layout seo={{ pageTitle: 'Contact' }}>
      <form css={styleContainer(palette)} onSubmit={submitHandler}>
        <span style={{ color: styleMessage(palette, postState) }}>
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

export default Contact;
