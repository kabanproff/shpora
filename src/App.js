import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Header from './components/Header/Header';
import ContentApp from './components/Content/Content';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'


function App() {
	return (
		<div className={'wrapper'}>
			<Router>
				<Layout>
					<Header />
					<ContentApp />
				</Layout>
			</Router>
		</div>



	);
}

export default App;
