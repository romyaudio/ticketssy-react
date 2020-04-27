import React from 'react';
import Authorization from '../functions/authorization'
import Content from '../render/Item'

const Item = () => {
	Authorization()

	return <Content/>
}
export default Item