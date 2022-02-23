import { Divider, Image, Typography } from 'antd';
import Code from '../Code';
import './Home.css'
const { Paragraph, Title } = Typography;
// import roadmap from '../../../roadmap.jpeg'

const codeHome = `
npx create-react-app
cd my-app
npm start
`;

function Home() {
	return (
		<div className={'home-wrap'}>
			<Divider />
			<Title level={1} className={'title'}>React</Title>
			<Paragraph strong>JavaScript-библиотека для создания пользовательских интерфейсов</Paragraph>
			<Divider />
			<Paragraph>Создаём новое React-приложение:</Paragraph>
			<Code code={codeHome} />
			<div>Также нам понадобятся Node.js не ниже версии 14.0.0 и npm не ниже версии 5.6 на нашем компьютере.</div>
			<Divider />
			<Title level={3} className={'title'}>ROADMAP</Title>
			<Image width={500} src="https://i.postimg.cc/137n6xMD/sh.jpg" />
		</div>
	)
}

export default Home