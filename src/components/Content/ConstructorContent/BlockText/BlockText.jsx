import { Divider, Image, Typography, List } from "antd"
import { CaretRightOutlined } from '@ant-design/icons'
import CodeText from "./CodeText";
const { Paragraph, Title } = Typography;


function BlockText({ blockTexts }) {
	return (
		<div>
			{blockTexts.map((blockText, index) => {
				return <div key={index}>
					{blockText.subtitle && <Title level={3}>{blockText.subtitle}</Title>}
					<Paragraph>{blockText.text}</Paragraph>
					{blockText.image && <div className={"wrap-image"}> <Image src={blockText.image} /></div>}
					{blockText.code && <CodeText code={blockText.code} />}
					{blockText.list &&
						<List header={<Paragraph strong>{blockText.list.head}</Paragraph>}
							bordered
							dataSource={blockText.list.item}
							renderItem={item => (
								<List.Item>
									<Typography.Text >{<CaretRightOutlined />}</Typography.Text> {item}
								</List.Item>
							)}
						/>}
					<Divider />
				</div>
			})}
		</div>
	)
}

export default BlockText