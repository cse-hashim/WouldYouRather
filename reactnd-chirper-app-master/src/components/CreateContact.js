import React, { Component } from 'react'
import ImageInput from './ImageInput'
import serializeForm from 'form-serialize'

class CreateContact extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })

    if (this.props.onCreateContact && values.id && values.name) {
      this.props.onCreateContact(
        {
          id: values.id,
          name: values.name,
          get avatarURL() {
            return values.avatarURL ? values.avatarURL : `https://ui-avatars.com/api/?rounded=true&name=${values.name.split(" ").join("+")}&color=random&background=random`
          },
          tweets: []
        }
      )
    }
  }
  render() {
    return (
      <div>
        <h3 className='center'>Register</h3>
        <form onSubmit={this.handleSubmit} className='create-contact-form'>
          <ImageInput
            className='create-contact-avatar-input grey cursor'
            name='avatarURL'
            maxHeight={64}
            maxWidth={64}
          />
          <div className='create-contact-details'>
            <input className='myfield   text' type='text' name='name' placeholder='Name' />
            <input className='myfield   w-50p text' type='text' name='id' placeholder='Handle' />
            <button className='myfield blue p-10p p-25p'>Register</button>
          </div>
        </form>
      </div>
    )
  }
}
export default CreateContact
