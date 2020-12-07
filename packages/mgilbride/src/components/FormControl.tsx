import React, { FC, SyntheticEvent, useMemo } from 'react';
import { CSSObject } from '@emotion/core';
import { animated, config, useSpring } from 'react-spring';
import { palette, makeSize, makeSpace } from '../utils/design';

const styleContainer = (value: string): CSSObject => ({
  display: 'flex',
  flexDirection: 'column',
  label: {
    fontSize: makeSize('xs'),
    paddingBottom: makeSpace('xxs'),
  },
  select: {
    color: value ? undefined : palette.gray(),
    appearance: 'none',
  },
  'input, select, textarea': {
    borderRadius: 4,
    boxShadow: 'none',
    border: 'none',
    padding: makeSpace('xxs'),
    backgroundColor: palette.gray(75),
    '::placeholder': {
      color: palette.gray(),
    },
  },
});

interface InputControl {
  type: 'input';
}

interface TextAreaControl {
  type: 'textarea';
}

interface SelectControl {
  type: 'select';
  options: {
    text: string;
    value: string;
  }[];
}

type FormControlElement = InputControl | TextAreaControl | SelectControl;

type FormControlProps = FormControlElement & {
  labelText: string;
  value: string;
  onValueChange: (value: string) => void;
  required?: boolean;
  htmlType?: string;
  disabled?: boolean;
};

export const FormControl: FC<FormControlProps> = (props: FormControlProps) => {
  const controlProps = {
    required: !!props.required,
    type: props.htmlType,
    placeholder: props.labelText,
    value: props.value,
    disabled: !!props.disabled,
    onChange: (
      e: SyntheticEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => props.onValueChange(e.currentTarget.value),
  };

  const labelSpring = useSpring({
    to: {
      opacity: props.value ? 1 : 0,
    },
    config: config.molasses,
  });

  const control = useMemo(() => {
    switch (props.type) {
      case 'select':
        return (
          <select {...{ ...controlProps }}>
            <option disabled value="">
              {controlProps.placeholder}
            </option>
            {props.options.map((o) => (
              <option key={o.text} value={o.value}>
                {o.text}
              </option>
            ))}
          </select>
        );
      case 'textarea':
        return <textarea {...{ ...controlProps }} rows={4} />;
      case 'input':
      default:
        return <input {...{ ...controlProps }} />;
    }
  }, [
    controlProps,
    props.type,
    // @ts-ignore - there must be a way to handle the discriminated union better here
    props.options,
  ]);

  return (
    <div css={styleContainer(props.value)}>
      <animated.label style={labelSpring}>{props.labelText}</animated.label>
      {control}
    </div>
  );
};
