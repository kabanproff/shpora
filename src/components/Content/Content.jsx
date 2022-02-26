import React from 'react'
import { Layout } from 'antd';
import { Routes, Route } from "react-router-dom";
// Импорт данных
import homeData from '../Data/HomeData';
import propsData from '../Data/PropsData';
import stateData from '../Data/StateData';
import lifeCycleData from '../Data/LifeCycleData';
import componentData from '../Data/ComponentData';
import eventsData from '../Data/EventsData';
import keysData from '../Data/KeysData';
import refsData from '../Data/RefsData';
import asyncData from '../Data/AsyncData';
import virtualDomData from '../Data/VirtualDomData';
import fragmentsData from '../Data/FragmentsData';
import reactMemoData from '../Data/ReactMemoData';
import useEffectData from '../Data/UseEffectData';
import routesData from '../Data/RoutesData';
import contextData from '../Data/ContextData';
import formData from '../Data/FormData';

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
					<Route path={'/async'} element={<ConstructorContent textContent={asyncData} />} />
					<Route path={'/virtualdom'} element={<ConstructorContent textContent={virtualDomData} />} />
					<Route path={'/fragments'} element={<ConstructorContent textContent={fragmentsData} />} />
					<Route path={'/reactmemo'} element={<ConstructorContent textContent={reactMemoData} />} />
					<Route path={'/useeffect'} element={<ConstructorContent textContent={useEffectData} />} />
					<Route path={'/routes'} element={<ConstructorContent textContent={routesData} />} />
					<Route path={'/context'} element={<ConstructorContent textContent={contextData} />} />
					<Route path={'/form'} element={<ConstructorContent textContent={formData} />} />
				</Routes>


			</div>
		</Content>
	)
}

export default ContentApp