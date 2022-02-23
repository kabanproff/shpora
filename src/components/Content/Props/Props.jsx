import { Divider, Typography } from "antd"
// import Code from "../Code";
const { Paragraph, Title } = Typography;

function Props() {
	return (
		<div>
			<Title level={1}>Пропсы</Title>
			<Divider />
			<Paragraph>Компоненты React — это многократно иcпользуемые фрагменты JavaScript-кода, которые выводят HTML-элементы (благодаря JSX ).</Paragraph>
			<Paragraph>То, что мы называем аргументами в мире функций, в мире компонентов называется свойствами.
				Функциональные компоненты свойства принимают в качестве аргумента.Props представляют собой объект, содержащие свойства.
				Обратиться к ним можно - props.имя-свойства.Props - только для чтения..</Paragraph>
			<Divider />
		</div>
	)
}

export default Props