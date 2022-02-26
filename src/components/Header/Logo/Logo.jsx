import logo from '../../../logo.svg';
import './Logo.css'

function Logo() {
	return (
		<div className="logo" >
			<img className={'App-logo'} src={logo} alt={'App-logo'}></img>
		</div>
	)
}

export default Logo