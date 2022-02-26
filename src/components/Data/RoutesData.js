const routesData = {
   title: 'Роуты',
   blockTexts: [
      {
         text: [
            'В React имеется своя система маршрутизации, которая позволяет сопоставлять запросы к приложению с определенными компонентами. Ключевым звеном в работе маршрутизации является модуль react-router, который содержит основной функционал по работе с маршрутизацией. Однако если мы собираемся работать в браузере, то нам также надо использовать модуль react-router-dom.',
            'Устанавливаем react-router-dom в командной строке(терминале):',
         ],
         code: `
npm i react-router-dom
         `
      },
      {
         text: ['После установки нужно импортировать BrowserRouter, Routes, Route:'],
         code: `
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
      `
      },
      {
         subtitle: 'Router',
         text: [
            'Вместо рендеринга компонента App мы рендерим компонент Router. Компонент Router передает информацию о текущем местоположении всем дочерним элементам, вложенным в него. Его следует использовать один раз и поместить рядом с корнем дерева компонентов:',
            'Router определяет набор маршрутов и, когда к приложению, приходит запрос, то Router выполняет сопоставление запроса с маршрутами. И если какой-то маршрут совпадает с URL запроса, то этот маршрут выбирается для обработки запроса.',
         ],
         code: `
render(
   <Router>
      <App />
   </Router>,
   document.getElementById("root")
); 
      `
      },
      {
         subtitle: 'Routes',
         text: [
            'Компонент-оболочка для любых маршрутов, которые мы хотим отобразить, называется Routes. Внутри Routes мы будем использовать компонент Route для каждой страницы, которую хотим отобразить.',

         ],
         code: `
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Events, Products, Contact } from "./pages";
function App() {
      return (
         <div>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route  path="/about"  element={<About />} />
                  <Route  path="/events"  element={<Events />}  />
                  <Route  path="/products"  element={<Products />}  />
                  <Route  path="/contact"  element={<Contact />}  />
                  <Route  path="*"  element={<NotFound />}  />
            </Routes>
         </div>
      );
}
      `,
         list: {
            head: 'Каждый маршрут представляет объект Route. Он имеет ряд атрибутов. В частности, в примерах для маршрута устанавливаются два атрибута:',
            item: [
               'element - тот компонент, который отвечает за обработку запроса по этому маршруту',
               'path: шаблон адреса, с которым будет сопоставляться запрошенный адрес URL',
            ]
         }
      },
      {
         text: [
            'Когда расположение браузера совпадает с path, отобразится element.',
            'Если местоположение равно /, маршрутизатор отобразит компонент Home.',
            'Если расположение является /products, маршрутизатор отобразит компонент Products.',
         ],
      },
      {
         text: [
            'Особо следует выделить маршрут со звёздочкой - * -:',
            'Путь в виде звездочки - "*" указывает, что этот маршрут будет сопоставляться со всеми адресами URL, которые не соответствуют предыдущим маршрутам. И он будет обрабатываться компонентом NotFound. Таким образом мы можем задать обработку при обращении к несуществующим ресурсам в приложении.',
         ],
      },
      {
         text: [
            'У react-router-dom есть компонент Link и NavLink, которые мы можем использовать для создания ссылок для браузера',
            'NavLink - этот объект во многом аналогичен Link за тем исключением, что позволяет использовать состояние ссылки. В частности, с помощью атрибутов className и style можно установить стиль активной ссылки',
         ],
         code: `
import { Link, NavLink } from "react-router-dom";
export function Home() {
      return (
         <div>
               <h1>[Company Website]</h1>
                  <nav>
                     // пример NavLink
                     <NavLink to="/" className={({ isActive }) =>(isActive ? " active" : "")}>Главная</NavLink>
                     // пример Link
                     <Link to="about">About</Link>
                     <Link to="events">Events</Link>
                     <Link to="products">Products</Link>
                     <Link to="contact">Contact Us</Link>
                  </nav>
         </div>
      );
} 
      `
      },
      {
         subtitle: 'useLocation()',
         text: [
            'Мы также можем отображать значение маршрута, который мы посетили, используя значение местоположения.',
            'Поскольку мы живем в мире, где есть хуки React, используем хук useLocation().',
            'В компоненте Whoops404 создадим переменную с именем location, которая возвращает значение текущего местоположения (то есть свойство с информацией о том, на какую страницу мы перешли).',
            'Затем используем значение location.pathname для рендеринга посещаемого маршрута:'
         ],
         code: `
import { useLocation } from "react-router-dom";

export function Whoops404() {
   let location = useLocation();
   console.log(location);
   return (
         <div>
            <h1>
               Resource not found at {location.pathname}
            </h1>
         </div>
   );
}
      `
      },
      {
         text: ['Пример списка навигации с AntDesign'],
         code: `
<Menu theme="dark" mode="horizontal" >
   <Menu.Item key="1"><NavLink to='/home'>Home</NavLink></Menu.Item>
   <Menu.Item key="2"><NavLink to='/Antdesing'>Components</NavLink></Menu.Item>
   <Menu.Item key="3"><NavLink to='/None'>Components</NavLink></Menu.Item>
</Menu>
      `
      },
   ]
}


export default routesData