import React from 'react'
import { Layout, Breadcrumb } from 'antd';
import Home from './Home/Home';
import { Routes, Route } from "react-router-dom";
import Component from './Component/Component';
import propsData from '../Data/PropsData';
import stateData from '../Data/StateData';
import lifeCycleData from '../Data/LifeCycleData';
import ConstructorContent from './ConstructorContent/Constructor';
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

				<Routes>
					<Route path={'/home'} element={<Home />} />
					<Route path={'/component'} element={<Component />} />
					<Route path={'/props'} element={<ConstructorContent textContent={propsData} />} />
					<Route path={'/state'} element={<ConstructorContent textContent={stateData} />} />
					<Route path={'/lifeCycle'} element={<ConstructorContent textContent={lifeCycleData} />} />
				</Routes>


			</div>
		</Content>
	)
}

export default ContentApp