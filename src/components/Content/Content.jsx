import React from 'react'
import { Layout } from 'antd';
import { Routes, Route } from "react-router-dom";
import Component from './Component/Component';

import homeData from '../Data/HomeData';
import propsData from '../Data/PropsData';
import stateData from '../Data/StateData';
import lifeCycleData from '../Data/LifeCycleData';
import componentData from '../Data/ComponentData';

import ConstructorContent from './ConstructorContent/Constructor';
const { Content } = Layout;

const ContentApp = () => {
	return (
		<Content className="site-layout" style={{ marginTop: 64 }}>
			{/* <Breadcrumb style={{ margin: '16px 0' }}>
				<Breadcrumb.Item>Home</Breadcrumb.Item>
				<Breadcrumb.Item>List</Breadcrumb.Item>
				<Breadcrumb.Item>App</Breadcrumb.Item>
			</Breadcrumb> */}
			<div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>

				<Routes>
					<Route path={'/'} element={<ConstructorContent textContent={homeData} />} />
					{/* <Route path={'/component'} element={<Component />} /> */}
					<Route path={'/component'} element={<ConstructorContent textContent={componentData} />} />
					<Route path={'/props'} element={<ConstructorContent textContent={propsData} />} />
					<Route path={'/state'} element={<ConstructorContent textContent={stateData} />} />
					<Route path={'/lifecycle'} element={<ConstructorContent textContent={lifeCycleData} />} />
				</Routes>


			</div>
		</Content>
	)
}

export default ContentApp