import './CodeText.css';

function CodeText(p) {
	return (
		<div>
			<div className={'code'}>
				<pre>
					<code>
						{p.code}
					</code>
				</pre>
			</div>
		</div>
	)
}

export default CodeText