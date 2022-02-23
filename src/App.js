import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Header from './components/Header/Header';
import ContentApp from './components/Content/Content';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
	return (
		<Router>
			<Layout>
				<Header />
				<ContentApp />
			</Layout>
		</Router>


	);
}

export default App;
