const reactMemoData = {
   title: 'React.memo',
   blockTexts: [
      {
         text: [
            'React.memo — это компонент высшего порядка.',
            'Компонент высшего порядка — это функция, которая принимает компонент и возвращает новый компонент.',
            'Если наш компонент всегда рендерит одно и то же при неменяющихся пропсах, мы можем обернуть его в вызов React.memo для повышения производительности в некоторых случаях, мемоизируя тем самым результат. Это значит, что React будет использовать результат последнего рендера, избегая повторного рендеринга.',
            'React.memo затрагивает только изменения пропсов. Если функциональный компонент обёрнут в React.memo и использует useState, useReducer или useContext, он будет повторно рендериться при изменении состояния или контекста.',
            'По умолчанию он поверхностно сравнивает вложенные объекты в объекте props. Если мы хотим контролировать сравнение, мы можем передать свою функцию сравнения в качестве второго аргумента.',
         ],
         code: `
const MyComponent = React.memo(function MyComponent(props) {
   /* рендер с использованием пропсов */
   });
         `
      },
      {
         text: ['или так'],
         code: `
function MyComponent(props) {
   /* рендер с использованием пропсов */
   }
   function areEqual(prevProps, nextProps) {
   /*
   возвращает true, если nextProps рендерит
   тот же результат что и prevProps,
   иначе возвращает false
   */
   }
export default React.memo(MyComponent, areEqual);
      `
      },
      {
         text: ['Этот метод предназначен только для оптимизации производительности. Не нужно полагаться на него, чтобы «предотвратить» рендер, так как это может привести к ошибкам.']
      },
      {
         text: ['Аналогом в классовых компонентах выступает метод shouldComponentUpdate()'],
         code: `
shouldComponentUpdate(nextProps, nextState) {
   return !shallowEqual (nextProps, this.props) ||
            !shallowEqual (nextState, this.state);
}
      `
      },
   ]
}


export default reactMemoData