import logo from '../../logo.svg';
import './Header.css'
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';
const { Header } = Layout;



const HeaderApp = () => {
	return (
		<Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding: '0 10px' }}>

			<Link to={'/'}>
				<div className="logo" >
					<img className={'App-logo'} src={logo} alt={'App-logo'}></img>
				</div>
			</Link>

			<Menu theme="dark" mode="horizontal">
				<Menu.Item key="1"><Link to={'/component'}>Component</Link></Menu.Item>
				<Menu.Item key="2"><Link to={'/props'}>Props</Link></Menu.Item>
				<Menu.Item key="3"><Link to={'/state'}>State</Link></Menu.Item>
				<Menu.Item key="4"><Link to={'/lifecycle'}>LifeCycle</Link></Menu.Item>
			</Menu>
		</Header>

	)
}

export default HeaderApp