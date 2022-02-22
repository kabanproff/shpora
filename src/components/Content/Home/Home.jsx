import { Divider, Image, Typography } from 'antd';
import './Home.css'
const { Paragraph, Title } = Typography;
// import roadmap from '../../../roadmap.jpeg'

function Home() {
	return (
		<div className={'home-wrap'}>
			<Divider />
			<Title level={1} className={'title'}>React</Title>
			<Paragraph strong>JavaScript-библиотека для создания пользовательских интерфейсов</Paragraph>
			<Divider />
			<Paragraph>Создаём новое React-приложение:</Paragraph>
			<div className={'code'}>
				<pre>
					<code>
						<p>npx create-react-app</p>
						<p>cd my-app</p>
						<p>npm start</p>
					</code>
				</pre>
			</div>
			<Divider />
			<Title level={3} className={'title'}>ROADMAP</Title>
			<Image width={500} src="https://i.postimg.cc/137n6xMD/sh.jpg" />
		</div>
	)
}

export default Home