const stateData = {
	title: 'Стэйт',
	blockTexts: [
		{
			text: 'State нужен для того, чтобы хранить какое-то изменяющее значение. Например, с которым будет взаимодействовать пользователь.',
		},
		{
			text: 'Стейт обновляется всегда через setState()',
			code: `
setState(updater, [callback])
			`
		},
		{
			text: 'Метод setState() планирует изменение объекта состояния (state) компонента. Когда состояние меняется, компонент рендерится повторно.',
		},
		{
			text: 'В настоящее время setState работает асинхронно внутри обработчиков событий.',
		},
		{
			text: 'Менять состояние так нельзя:',
			code: `
this.state.username="Bob";
			`
		},
		{
			text: '2 способа изменить state в классовых компонентах, где предпочтительным является 2(он гарантирует что state будет актуальным на момент обновления):',
			code: `
this.setState({username:'Жорик'});

this.setState(() => ({ username: 'Жорж' }));
			`
		},
		{
			text: 'Cтэйт в классовой компоненте',
			code: `
class Components extends React.Component {
	state = {
		count: 0
	}
			
	hadlerState = () => {
		this.setState((state)=>({count:state.count+1}))
	}
			
	render() {
		return (
			<div>
				<p>{this.state.count}</p>
				<button onClick ={()=> this.hadlerState()}>Click me</button>
			</div>
		)
	}
}			
			`

		},
		{
			text: 'Cтэйт в функциональной компоненте',
			code: `
import {useState} from 'react'

const Components = () => {
	const [count, setCount] = useState();
	return (
		<div>
			<p>{count +1}</p>
			<button onClick={()=>setCount(count+1)}>Click me</button>
		</div>
	)
}
			`
		},
	]
}

export default stateData