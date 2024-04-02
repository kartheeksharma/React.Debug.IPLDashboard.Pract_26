import {Link} from 'react-router-dom'
// Fix: Import Link component to use it
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageURL} = teamDetails

  return (
    // Fix: When clicked on TeamCard, page should be navigated to the URL '/team-matches/${id}'
    // Fix: to is the prop to be used for navigation to link component
    <li className="team-item">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageURL} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
