import './index.css'

const VisitCountries = props => {
  const {eachList, addCountry} = props
  const {id, name, isVisited} = eachList
  const text = isVisited ? 'Visited' : 'Visit'
  const style = isVisited ? 'visited-button ' : 'visit-button'
  const onAdd = () => {
    addCountry(id)
  }
  return (
    <li className="list-container">
      <div className="container">
        <p className="name">{name}</p>
        {isVisited ? (
          <p className={style}>{text}</p>
        ) : (
          <button type="button" className={style} onClick={onAdd}>
            {text}
          </button>
        )}
      </div>
    </li>
  )
}

export default VisitCountries
