import './Header.css'
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';
import Logo from './Logo/Logo';
const { Header } = Layout;



const HeaderApp = () => {
	return (
		<Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding: '0 10px' }}>

			<Link to={`/shpora`}><Logo /></Link>

			<Menu theme="dark" mode="horizontal">
				<Menu.Item key="1"><Link to={'/component'}>Component</Link></Menu.Item>
				<Menu.Item key="2"><Link to={'/props'}>Props</Link></Menu.Item>
				<Menu.Item key="3"><Link to={'/state'}>State</Link></Menu.Item>
				<Menu.Item key="4"><Link to={'/lifecycle'}>LifeCycle</Link></Menu.Item>
				<Menu.Item key="5"><Link to={'/events'}>Events</Link></Menu.Item>
				<Menu.Item key="6"><Link to={'/keys'}>Keys</Link></Menu.Item>
				<Menu.Item key="7"><Link to={'/refs'}>Refs</Link></Menu.Item>
				<Menu.Item key="8"><Link to={'/async'}>Async</Link></Menu.Item>
			</Menu>
		</Header>

	)
}

export default HeaderApp