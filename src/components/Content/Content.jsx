import React from 'react'
import { Layout, Breadcrumb } from 'antd';
import Home from './Home/Home';
const { Content } = Layout;

const ContentApp = () => {
	return (
		<Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
			<Breadcrumb style={{ margin: '16px 0' }}>
				<Breadcrumb.Item>Home</Breadcrumb.Item>
				<Breadcrumb.Item>List</Breadcrumb.Item>
				<Breadcrumb.Item>App</Breadcrumb.Item>
			</Breadcrumb>
			<div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
				<Home />
			</div>
		</Content>
	)
}

export default ContentApp