const propsData = {
	title: 'Пропсы',
	blockTexts: [
		{
			text: 'Компоненты React — это многократно иcпользуемые фрагменты JavaScript-кода, которые выводят HTML-элементы (благодаря JSX ).',
		},
		{
			text: 'То, что мы называем аргументами в мире функций, в мире компонентов называется свойствами. Функциональные компоненты свойства принимают в качестве аргумента.Props представляют собой объект, содержащие свойства. Обратиться к ним можно - props.имя-свойства.Props - только для чтения. рекомендуем именовать props с точки зрения компонента, а не контекста, в котором он будет использован. Рекомендуется именовать props с точки зрения компонента, а не контекста, в котором он будет использован.',
		},
		{
			text: 'Классовые компоненты свойства принимают по умолчанию и обратиться к ним можно с помощью this.props.имя-свойства.',
			code: `
class Welcome extends React.Component {
	render() {
		return <h1>Привет, {this.props.name}</h1>;
	}
}
			`
		},
		{
			subtitle: 'Props.children',
			text: 'В любом компоненте доступны props.children. Это контент между открывающим и закрывающим тегом компонента. Например:',
			code: `
<Welcome>Привет, мир!</Welcome>
			`
		},
		{
			text: 'Строка Привет, мир! доступна в props.children в компоненте Welcome:',
			code: `
function Welcome(props) {
	return <p>{props.children}</p>;
}
			`
		},
		{
			text: 'Для классовых компонентов используйте this.props.children:',
			code: `
class Welcome extends React.Component {
	render() {
		 return <p>{this.props.children}</p>;
	}
}
			`
		},
	]
};

export default propsData;