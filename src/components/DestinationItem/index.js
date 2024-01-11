// Write your code here
import './index.css'

const DestinationItem = props => {
  const {userDetails} = props
  const {imgUrl, name} = userDetails
  return (
    <li className="card">
      <img src={imgUrl} alt={name} className="img" />
      <p className="name">{name}</p>
    </li>
  )
}
export default DestinationItem
