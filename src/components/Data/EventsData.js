const eventsData = {
   title: 'События',
   blockTexts: [
      {
         text: [
            'События в React именуются в стиле camelCase вместо нижнего регистра. С JSX вы передаёте функцию как обработчик события вместо строки.',
            'HTML:',
         ],
         code: `
<button onclick="activateLasers()">
   Активировать лазеры
</button>
         `
      },
      {
         text: ['React немного иначе:'],
         code: `
<button onClick={activateLasers}>
   Активировать лазеры
</button>
         `
      },
      {
         text: [
            'Популярные обработчики событий: onClick, onChange, где обычно onClick - на button,а onChange - на input',
            'В React нельзя предотвратить обработчик события по умолчанию, вернув false. Нужно явно вызвать preventDefault.',
         ],
         code: `
function Form() {
   function handleSubmit(e) {
      e.preventDefault();
      console.log('Отправлена форма.');
   }
   return (
      <form onSubmit={handleSubmit}>
         <button type="submit">Отправить</button>
      </form>
   );
}
         `
      },
      {
         text: ['В компоненте, определённом с помощью ES6-класса, в качестве обработчика события обычно выступает один из методов класса. Например, этот компонент Toggle рендерит кнопку, которая позволяет пользователю переключать состояния между «Включено» и «Выключено»:'],
         code: `
class Toggle extends React.Component {
   constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
   
      // Эта привязка обязательна для работы 'this' в колбэке.
         this.handleClick = this.handleClick.bind(this);
   }

   handleClick() {
         this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
         }));
   }

   render() {
         return (
            <button className={'toggle__btn'} onClick={this.handleClick}>
               {this.state.isToggleOn ? 'Включено' : 'Выключено'}
            </button>
         );
   }
}

         ReactDOM.render(
         <Toggle />,
         document.getElementById('root')
         );
         `
      },
      {
         text: ['Этот же код, но переписанный на функциональную компоненту:'],
         code: `
function Toggle() {
   let [isToggleOn, setIsToggleOn] = useState(true);
   function handleClick() {
      setIsToggleOn(!isToggleOn)
   }
   return (
      <button className={'toggle__btn'} onClick={() => handleClick()}>
         {isToggleOn ? 'Включено' : 'Выключено'}
      </button>
   );
   }
         `
      },
      {
         text: ['При использовании React обычно не нужно вызывать addEventListener, чтобы добавить обработчики в DOM-элемент после его создания. Вместо этого добавьте обработчик сразу после того, как элемент отрендерился  в DidMount-те'],
      },
      {
         subtitle: 'Передача аргументов в обработчики событий',
         text: ['Внутри цикла часто нужно передать дополнительный аргумент в обработчик события. Например, если id — это идентификатор строки, можно использовать следующие варианты:'],
         code: `
<button onClick={(e) => this.deleteRow(id, e)}>Удалить строку</button>
<button onClick={this.deleteRow.bind(this, id)}>Удалить строку</button>
      `
      },
      {
         text: ['Две строки выше — эквивалентны, и используют стрелочные функции и Function.prototype.bind соответственно. \n В обоих случаях аргумент e, представляющий событие React, будет передан как второй аргумент после идентификатора. Используя стрелочную функцию, необходимо передавать аргумент явно, но с bind любые последующие аргументы передаются автоматически.'],
         list: {
            head: 'Существует множество поддерживаемых событий, вот общий список:',
            item: [
               'Буфер обмена: onCopy, onCut, onPaste',
               'Составление/ввод данных: onCompositionEnd, onCompositionStart, onCompositionUpdate',
               'Клавиатура: onKeyDown, onKeyPress, onKeyUp',
               'Фокусировка: onFocus, onBlur',
               'Форма: onChange, onInput, onSubmit',
               'Мышь: onClick, onContextMenu, onDoubleClick, onDrag, onDragEnd, onDragEnter, onDragExit, onDragLeave, onDragOver, onDragStart, onDrop, onMouseDown, onMouseEnter, onMouseLeave, onMouseMove, onMouseOut, onMouseOver, onMouseUp',
               'Выделение: onSelect',
               'Касание: onTouchCancel, onTouchEnd, onTouchMove, onTouchStart',
               'UI: onScroll',
               'Колёсико мышки: onWheel',
               'Медиа: onAbort, onCanPlay, onCanPlayThrough, onDurationChange, onEmptied, onEncrypted, onEnded, onError, onLoadedData, onLoadedMetadata, onLoadStart, onPause, onPlay, onPlaying, onProgress, onRateChange, onSeeked, onSeeking, onStalled, onSuspend, onTimeUpdate, onVolumeChange, onWaiting',
               'Изображение: onLoad, onError',
               'Анимация: onAnimationStart, onAnimationEnd, onAnimationIteration',
               'Переход: onTransitionEnd',
            ]
         },
      }
   ]
}


export default eventsData