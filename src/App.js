import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Header from './components/Header/Header';
import ContentApp from './components/Content/Content';


function App() {
	return (
		<Layout>
			<Header />
			<ContentApp />
		</Layout>

	);
}

export default App;
