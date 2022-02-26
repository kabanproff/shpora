const fragmentsData = {
   title: 'Фрагменты',
   blockTexts: [
      {
         text: [
            'С помощью фрагментов можно сгруппировать список дочерних элементов без добавления дополнительных узлов в DOM.',
            'Компонента не может возвращать несколько элементов, а может только один. И для этого нам нужно обернуть весь код в родительский элемент например div',
            'Используем React.Fragment или выполняем импорт, чтобы использовать Fragment:',
         ],
         code: `
import { Fragment } from 'react';
      `
      },
      {
         text: ['Заменяем теги div на Fragment:'],
         code: `
class ChildComponent extends React.Component {
   render() {
         return (
            <Fragment>
               <h1>Hello Child Component</h1>
            </Fragment>
         )
   }
}
         `
      },
      {
         text: [
            'Существует сокращенная запись (импортировать не нужно)',
            'Недостаток сокращенной записи: нельзя использовать атрибут key.',
         ],
         code: `
class ChildComponent extends React.Component {
   render() {
         return (
            <>
               <h1>Hello Child Component</h1>
            </>
         )
   }
}
         `
      },
      {
         text: ['Если нужен фрагмент с ключом, то можно использовать <Fragment /> напрямую. Вариант использования для этого — сопоставление коллекции с массивом фрагментов — например, для создания списка описаний:'],
         code: `
         
function Glossary(props) {
   return (
      <dl>
         {props.items.map(item => (
         <Fragment key={item.id}>
            <dt>{item.term}</dt>
            <dd>{item.description}</dd>
         </Fragment>
         ))}
      </dl>
   );
   }
         `
      },
   ]
}


export default fragmentsData

