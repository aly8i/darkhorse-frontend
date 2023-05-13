import React from 'react'
import {Tabs} from 'antd';

const Timeline = (props) => {

  const {items, onChange} = props;

  return (
    <Tabs items={items} style={{ marginBottom: '2%' }} onChange={onChange} />
  )
}

export default Timeline;