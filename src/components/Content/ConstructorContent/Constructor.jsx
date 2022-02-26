import './Constructor.css'
import { Divider, Typography } from "antd"
import BlockText from "./BlockText/BlockText";
import Logo from '../../Header/Logo/Logo';
const { Title } = Typography;

const ConstructorContent = ({ textContent }) => {
	return (
		<div>
			{textContent.title && <div className='wrapAnimate'>
				<div className={'leftA'}><Logo /></div>
				<Title level={1}>{textContent.title}</Title>
				<div className={'rightA'}><Logo /></div>
			</div>}
			<Divider />
			{textContent.blockTexts && <BlockText blockTexts={textContent.blockTexts} />}
		</div>
	)
}

export default ConstructorContent