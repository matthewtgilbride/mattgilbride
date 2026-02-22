import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Code, CodeProps } from './Code';

export default {
  title: 'Components/Code',
  component: Code,
  excludeStories: /.*Props/,
} as Meta;

const Template: Story<CodeProps> = (args) => <Code {...args} />;

export const Java = Template.bind({});
Java.args = {
  language: 'java',
  block: `
    public String functionalGetter(Map<String, Map<String, String>> inconsistentMap) {
        return Optional
                .ofNullable(inconsistentMap)
                .map(outerMap -> outerMap.get("foo"))
                .map(innerMap -> innerMap.get("bar"))
                .filter(StringUtils::isNotEmpty)
                .orElseThrow(() -> new IllegalArgumentException("JSON is in unexpected shape!"));
    }
    `,
};
