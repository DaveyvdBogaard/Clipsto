import React from 'react'
import {Card, Icon} from 'antd'

const { Meta } = Card

const Clip = (props) => {
    return (
    <Card
    style={{ width: 300, margin: 10}}
    cover={<img alt="example" src={props.clip.thumbnails.small} />}
    actions={[<Icon type="eye" />, <Icon type="plus" />]}
  >
    <Meta
      title={props.clip.title}
      description={props.clip.title}
    />
  </Card>
    )
}
  
  export default Clip;
  