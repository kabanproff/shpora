import './CodeText.css';

function CodeText(p) {
	return (
		<div>
			<div className={'code'}>
				<pre style={{ marginBottom: 0 }}>
					<code>
						{p.code}
					</code>
				</pre>
			</div>
		</div>
	)
}

export default CodeText