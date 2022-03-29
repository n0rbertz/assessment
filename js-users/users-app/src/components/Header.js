import propTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Header = ({title}) => {

    return (
        <div className="header">
            <div className="inner-header">
                <div className="title">
                    <h1><Link to={'/'} style={{textDecoration: "none", color: "white"}}>{title}</Link></h1>
                </div>

                <ul className="navigation">
                    <Link to={`/new`}><button className="btn">Add new user</button></Link>
                    <Link to={`/users`}><button className="btn">See all users</button></Link>
                </ul>
            </div>
        </div>
    )
}

Header.defaultProps = {
    title: "Users"
}

Header.propTypes = {
    title: propTypes.string.isRequired
}

export default Header