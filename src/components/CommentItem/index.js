import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = e => {
  const {args, f1, f2} = e
  const {name, count, description, date, id, isFavourite} = args
  console.log(isFavourite)
  const deleteFn = () => {
    console.log(id, name)
    f1(id)
  }

  const likeFunction = () => {
    f2(id)
  }

  const firstLetter = name.slice(0, 1).toUpperCase()
  return (
    <li className="second">
      <div className="paragraph">
        <p className="para1">{firstLetter}</p>
        <div className="InitialGap">
          <div className="row1">
            <h1 className="heading">
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </h1>
            <p className="pa">{formatDistanceToNow(date)}</p>
          </div>
          <p className="p">{description}</p>
        </div>
      </div>
      <div className="head">
        <div className="wid">
          <img
            src={
              isFavourite
                ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
            }
            alt="like"
          />
          <button className="parag like-button" onClick={likeFunction}>
            like
          </button>
        </div>
        <button data-testid="delete" className="deleteFn" onClick={deleteFn}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete"
            className="imageDel"
          />
        </button>
      </div>
      <hr className="s" />
    </li>
  )
}
export default CommentItem
