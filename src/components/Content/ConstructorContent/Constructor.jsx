import './Constructor.css'
import { Divider, Typography } from "antd"
import BlockText from "./BlockText/BlockText";
const { Title } = Typography;

const ConstructorContent = ({ textContent }) => {
	// console.log(textContent)
	return (
		<div>
			{textContent.title && <Title level={1}>{textContent.title}</Title>}
			<Divider />
			{textContent.blockTexts && <BlockText blockTexts={textContent.blockTexts} />}
		</div>
	)
}

export default ConstructorContent