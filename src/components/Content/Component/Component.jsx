import { Divider, Typography } from "antd"
import Code from "../Code";
const { Paragraph, Title, Text } = Typography;

const codeComponent = `
function Welcome() {
	return <h1>Привет, мир! </h1>;
}
`;

const codeComponent2 = `
const Welcome = () =><h1>Привет, мир! </h1>;`;

const codeComponent3 = `
class Welcome extends React.Component {
	render() {
	  return <h1>Привет, {this.props.name}</h1>;
	}
 }`;

function Component() {
	return (
		<div>
			<Title level={1}>Компоненты</Title>
			<Divider />
			<Paragraph>Компоненты React — это многократно иcпользуемые фрагменты JavaScript-кода, которые выводят HTML-элементы (благодаря JSX ).</Paragraph>
			<Paragraph>Компоненты бывают <Text mark>функциональные</Text>  и <Text mark>классовые</Text>.</Paragraph>
			<Divider />
			<Title level={3} mark>Функциональные</Title>
			<Paragraph>Проще всего объявить React-компонент как функцию:</Paragraph>
			<Paragraph>1: Деклоративно</Paragraph>
			<Code code={codeComponent} />
			<Divider />
			<Paragraph>2: Функциональным выражением</Paragraph>
			<Code code={codeComponent2} />
			<Divider />
			<Title level={3} mark>Классовые</Title>
			<Paragraph>Компонент как класс ES6:</Paragraph>
			<Code code={codeComponent3} />
			<Divider />
			<Paragraph>Концептуально, компоненты похожи на JavaScript-функции. Они принимают произвольные данные (называемые props) и возвращают React-элементы, которые описывают то, что должно появиться на экране.</Paragraph>
			<Paragraph>Компонента должна себя вести как <Text mark> чистая функция</Text>.
				«Чистой» называется функция, которая:
				<ul>
					<li>Для одинаковых входных данных всегда возвращает один результат.</li>
					<li>Не имеет побочных эффектов (то есть не изменяет внешние состояния).</li>
					<li>Не зависит от внешних состояний.</li>
				</ul>
			</Paragraph>
			<Paragraph>Компоненты нужно разделять на более мелкие компоненты.</Paragraph>
			<Paragraph>Если какая-то часть нашего UI используется неоднократно (Button, Panel, Avatar), или довольно сложная (составная) (App, FeedStory, Comment) – она хороший кандидат на то, чтобы стать переиспользуемым компонентом.</Paragraph>






		</div>
	)
}

export default Component