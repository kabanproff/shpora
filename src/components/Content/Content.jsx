import React from 'react'
import { Layout } from 'antd';
import { Routes, Route } from "react-router-dom";

import homeData from '../Data/HomeData';
import propsData from '../Data/PropsData';
import stateData from '../Data/StateData';
import lifeCycleData from '../Data/LifeCycleData';
import componentData from '../Data/ComponentData';
import eventsData from '../Data/EventsData';
import keysData from '../Data/KeysData';
import refsData from '../Data/RefsData';
import asyncData from '../Data/AsyncData';

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
			<div className="site-layout-background" style={{ padding: '0 24px', minHeight: 380 }}>

				<Routes>
					<Route path={'/shpora'} element={<ConstructorContent textContent={homeData} />} />
					<Route path={'/component'} element={<ConstructorContent textContent={componentData} />} />
					<Route path={'/props'} element={<ConstructorContent textContent={propsData} />} />
					<Route path={'/state'} element={<ConstructorContent textContent={stateData} />} />
					<Route path={'/lifecycle'} element={<ConstructorContent textContent={lifeCycleData} />} />
					<Route path={'/events'} element={<ConstructorContent textContent={eventsData} />} />
					<Route path={'/keys'} element={<ConstructorContent textContent={keysData} />} />
					<Route path={'/refs'} element={<ConstructorContent textContent={refsData} />} />
					<Route path={'/async'} element={<ConstructorContent textContent={asyncData} />} />
				</Routes>


			</div>
		</Content>
	)
}

export default ContentApp