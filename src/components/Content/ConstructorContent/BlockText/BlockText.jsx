import { Divider, Image, Typography } from "antd"
import CodeText from "./CodeText";
const { Paragraph, Title } = Typography;

function BlockText({ blockTexts }) {
	// console.log(blockTexts)
	return (
		<div>
			{blockTexts.map((blockText, index) => {
				return <div key={index}>
					{blockText.subtitle && <Title level={3}>{blockText.subtitle}</Title>}
					<Paragraph>{blockText.text}</Paragraph>
					{blockText.image && <Image src={blockText.image} />}
					{blockText.code && <CodeText code={blockText.code} />}
					<Divider />
				</div>
			})}
		</div>
	)
}

export default BlockText