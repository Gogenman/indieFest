/* eslint-disable no-unused-vars */
import { MainPage } from "pages/mainPage"
import { useState } from "react"
import './styles/index.scss'

function App() {
  const [modalActive, setModalActive] = useState({status: false, imgUrl: '', descr: '', title: ''})

  const [cards, setCards] = useState([
    {id: '1', descr: 'Donec faucibus turpis lacinia ultricies aliquam. Vestibulum posuere felis eu tellus tincidunt tempor consequat quis elit.', imgUrl: 'https://images.unsplash.com/photo-1549451371-64aa98a6f660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', title: 'события'},
    {id: '2', descr: 'Aenean condimentum risus in purus semper accumsan. In vitae risus vel libero pulvinar rhoncus.', imgUrl: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', title: 'контакты'},
    {id: '3', descr: 'Sed aliquam neque porttitor sollicitudin tristique. Duis in nibh tempor sagittis. Suspendisse lorem nisi dolor.', imgUrl: 'https://images.unsplash.com/photo-1560416313-414b33c856a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', title: 'инфо'},
    {id: '4', descr: 'Quisque vel elementum nunc. Nulla tempor, nisi a fringilla placerat. In sed varius purus, id luctus justo.', imgUrl: 'https://images.unsplash.com/photo-1546484458-6904289cd4f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', title: 'галерея'},
    {id: '5', descr: ' Nunc posuere diam erat. Nunc id varius sapien. Nam vel sollicitudin magna.', imgUrl: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', title: 'о нас'},
    {id: '6', descr: 'Orci montes, nascetur ridiculus mus. Morbi eu purus est. Donec massa ante, fringilla eu tincidunt quis justo.', imgUrl: 'https://images.unsplash.com/photo-1563802560775-445d06537a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', title: 'билеты'},
])
  return (
    <div className="app">
      <MainPage setActive={setModalActive} cards={cards} />
      {/* <CardModal active={modalActive} setActive={setModalActive}/> */}
    </div>
  );
}

export default App;
