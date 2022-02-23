import './Code.css'

function Code(p) {
	return (
		<div className={'code'}>
			<pre>
				<code>
					{p.code}
				</code>
			</pre>
		</div>
	)
}

export default Code