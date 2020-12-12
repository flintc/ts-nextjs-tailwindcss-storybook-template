import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Tag from '../components/Tag'

export default {
  title: 'Tag',
  component: Tag,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};



const Template = (args) => <Tag {...args} />;

export const Basic = Template.bind({});

// Basic.args = { name: "a tag" };