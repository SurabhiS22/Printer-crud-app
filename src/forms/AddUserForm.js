import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', IP: '' ,Status:''}
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.IP) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>IP</label>
			<input type="text" name="IP" value={user.IP} onChange={handleInputChange} />
			<label>Status</label>
			<input type="text" name="Status" value={user.Status} onChange={handleInputChange} />
			<button>Add new Printer</button>
		</form>
	)
}

export default AddUserForm