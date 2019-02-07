import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

const NameConponent = props => {
	return (
		<Text>
			<Text
				style={{
					color: props.color.firstName,
					fontSize: 18
				}}>
				{props.firstName}
			</Text>
			<Text>{' '}</Text>
			<Text
				style={{
					color: props.color.lastName,
					fontSize: 18
				}}>
				{props.lastName}
			</Text>
		</Text>
	)
}

export default NameConponent

NameConponent.defaultProps = {
	firstName: '',
	lastName: '',
	color: {
		firstName: '#333333',
		lastName: '#333333'
	}
}

NameConponent.propTypes = {
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	color: PropTypes.object
}
