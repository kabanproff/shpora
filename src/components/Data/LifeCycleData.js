const lifeCycleData = {
	title: 'Основные методы жизненного цикла',
	blockTexts: [
		{
			subtitle: 'constructor ()',
			text: 'Обычно в React конструкторы используются для инициализация локального состояния путем присвоения объекта this.state, и привязка методов обработчика событий к экземпляру.',
			code: `
constructor(props) {
	super(props);
	this.state = { counter: 0 };
	this.handleClick = this.handleClick.bind(this);
}
			`
		},
		{
			subtitle: 'render ()',
			text: 'Рендеринг компонента. Отдает JSX разметку',
			code: `
render() {
	return (
		<div>
			<p>{this.state.count}</p>
			<button onClick ={()=> this.hadlerState()}>Click me</button>
		</div>
	)
}
			`
		},
		{
			subtitle: 'componentDidMount()',
			text: 'componentDidMount() вызывается сразу после монтирования компонента (вставки в дерево). Используется для отправки запросов на серверк удаленным ресурсам, setTimeout, обращение к DOM-элементам.',
			code: `
fetchData = async () => {
	const user = await axios.get('https://api.github.com/users/kabanproff');
	this.setState({ user: user.data })
}

componentDidMount() {
	console.log('----didmount----')
	this.fetchData()
}
			`
		},
		{
			subtitle: 'componentDidUpdate(prevProps, prevState)',
			text: 'Вызывается после обновления компонента(ререндера). В качестве параметров передаются старые значения объектов: props и state.',
			code: `
componentDidUpdate(prevProps, prevState) {
	if (this.props.userID !== prevProps.userID) {
		 this.fetchData(this.props.userID);
	}
}
			`
		},
		{
			subtitle: 'componentWillUnmount()',
			text: 'Вызывается перед удалением компонента из DOM. Используется для закрытия асинхронных запросов, таймеров.',
			code: `
componentWillUnmount() {
	clearInterval(this.timerID)
}
			`
		},
		{
			text: 'Для использования методов жизненного цикла в функциональных компонентах предназначек хук useEffect.',
		},
		{
			subtitle: 'Иллюстрация жизненного цикла',
			text: 'На приведенной ниже диаграмме из официальной документации React показаны различные методы жизненного цикла React и когда они вызываются.',
			image: 'https://i1.wp.com/programmingwithmosh.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-31-at-1.44.28-PM.png'
		},
	]
}

export default lifeCycleData;