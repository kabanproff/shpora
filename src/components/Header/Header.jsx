import logo from '../../logo.svg';
import './Header.css'
import { Menu, Layout } from 'antd';
const { Header } = Layout;



const HeaderApp = () => {
	return (
		<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
			<div className="logo" ><img className={'App-logo'} src={logo} alt={'App-logo'}></img></div>
			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
				<Menu.Item key="1">nav 1</Menu.Item>
				<Menu.Item key="2">nav 2</Menu.Item>
				<Menu.Item key="3">nav 3</Menu.Item>
			</Menu>
		</Header>

	)
}

export default HeaderApp