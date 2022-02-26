const useEffectData = {
   title: 'useEffect',
   blockTexts: [
      {
         text: ['Для использования методов жизненного цикла в функциональных компонентах предназначек хук useEffect.'],
         list: {
            head: 'Хук useEffect решает задачи всех используемых в примерах ниже методов жизненного цикла',
            item: [
               'componentDidMount()',
               'componentDidUpdate()',
               'componentWillUnmount()'
            ]
         },
         code: `
// импортируем
import {useEffect} from 'react';
      `
      },
      {
         subtitle: 'componentDidMount()',
         text: ['UseEffect принимает в качестве первого параметра функцию, в качестве второго - [ ] (аналог componentDidMount).'],
         code: `
useEffect ( () => { }, [])
      `
      },
      {
         subtitle: 'componentDidUpdate()',
         text: ['UseEffect принимает в качестве первого параметра функцию, в качестве второго - массив с зависимостью (или несколькими) (аналог componentDidUpdate).'],
         code: `
useEffect ( () => { }, [name])
      `
      },
      {
         subtitle: 'componentDidMount() + componentDidUpdate()',
         text: ['UseEffect принимает в качестве первого параметра функцию, второго параметра - нет (аналог componentDidMount + componentDidUpdate).'],
         code: `
useEffect ( () => { } )
      `
      },
      {
         subtitle: 'componentWillUnmount()',
         text: ['UseEffect принимает в качестве первого параметра функцию, которая возвращает другую функцию (аналог componentWillUnmount).'],
         code: `
useEffect(() => {
   // стработает 1 раз при первом рендре компонента
   // здесь код работает как componentDidMount
   return () => {
      // return здесь работает как componentWillUnmount
   };
   }, []);
      `
      },
   ]
}


export default useEffectData