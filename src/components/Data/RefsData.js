const refsData = {
	title: 'Рефы',
	blockTexts: [
		{
			text: 'Refs (далее просто «ссылки») предоставляет способ доступа к DOM-узлам или React-элементам, созданным в методе render().',
			list: {
				head: 'Есть несколько хороших примеров использования ссылок:',
				item: [
					'Управление фокусом, выделение текста или воспроизведение медиаресурсами.',
					'Выполнение анимаций в императивном подходе.',
					'Интеграция со сторонними библиотеками, взаимодействующие с DOM.',
				]
			},
		},
		{
			text: 'Ссылки создаются с использованием React.createRef() и добавляются к React-элементам с помощью атрибута ref. Ссылки обычно присваиваются свойству экземпляра, когда компонент создаётся таким образом, чтобы на них можно было ссылаться по всему компоненту.',
			code: `
class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}
	render() {
		return <div ref={this.myRef} />;
	}
}
		`
		},
		{
			text: 'Когда ref передается элементу в методе render(), ссылка на узел становится доступной в атрибуте current.',
			code: `
const node = this.myRef.current;
		`
		},
		{
			text: 'В функциональных компонентах используется хук useRef. useRef возвращает изменяемый ref-объект, свойство .current которого инициализируется переданным аргументом (initialValue). Возвращённый объект будет сохраняться в течение всего времени жизни компонента. Пример:',
			code: `
import { useRef } from 'react';

function MyComponent () {
	const refContainer = useRef(initialValue);
	return (
		<div ref={refContainer} />
	);
}
		`
		},
	]
}


export default refsData