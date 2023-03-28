import {Component} from 'react'

import {v4 as Id} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    count: 0,
    name: '',
    list: [],
    description: '',
    date: '',
    isFavourite: false,
  }

  change = e => {
    // console.log(e.target.value)
    const {list} = this.state

    this.setState({
      name: e.target.value,
    })
  }

  onSubmit = e => {
    e.preventDefault()
    const {count, name, description, list} = this.state

    this.setState(p => ({count: p.count + 1}))

    const newList = {
      name,
      id: Id(),
      count: count + 1,
      description,
      list,
      date: new Date(),
      isFavourite: false,
    }
    if (list.length !== 0) {
      this.setState(p => ({
        list: [...p.list, newList],
        name: '',
        description: '',
      }))
    } else {
      this.setState(p => ({
        list: [newList],
        name: '',
        description: '',
      }))
    }
  }

  fu = i => {
    const {list} = this.state
    const l = list.filter(x => x.id !== i)
    this.setState(p => ({
      list: l,
      count: p.count - 1,
    }))
  }

  fun = n => {
    const {list} = this.state

    const a = list.map(li => {
      if (li.id === n) {
        return {...li, isFavourite: !li.isFavourite}
      }
      return li
    })
    this.setState({list: a})
  }

  onChangeTextArea = ev => {
    this.setState({description: ev.target.value})
    // console.log(ev.target.value)
  }

  render() {
    const {name, list, count, description} = this.state
    // const {count} = list

    // console.log(list)
    return (
      <div className="main">
        <div className="r">
          <form onSubmit={this.onSubmit}>
            <h1>Comments</h1>
            <p>Say something about 4.0 Technologies</p>
            <input
              type="text"
              placeholder="Your Name"
              className="inp"
              onChange={this.change}
              value={name}
            />

            <br />
            <textarea
              cols="70"
              rows="10"
              placeholder="Your Comment"
              className="inp inp1"
              onChange={this.onChangeTextArea}
              value={description}
            />
            <br />
            <button className="born" type="submit">
              Add Comment
            </button>
            <hr className="hr" />
          </form>
          <div className="h">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <div className="dis">
          <p className="comment">{count}</p>
          <p className="comment1">Comments</p>
        </div>
        <ul className="pad">
          {list.length > 0
            ? list.map(x => (
                <CommentItem args={x} key={x.id} f1={this.fu} f2={this.fun} />
              ))
            : null}
        </ul>
      </div>
    )
  }
}

export default Comments
