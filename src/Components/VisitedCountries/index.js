import './index.css'

const VisitedCountries = props => {
  const {eachList, removeCountry} = props
  const {id, imageUrl, name} = eachList
  const onRemove = () => {
    removeCountry(id)
  }
  return (
    <li className="visited-container">
      <img src={imageUrl} alt="thumbnail" className="image" />
      <div className="flex-container">
        <p className="text">{name}</p>
        <button type="button" className="remove-button" onClick={onRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
