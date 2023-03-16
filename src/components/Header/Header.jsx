import './Header.css';

export default function Header({userName}) {
  return (
    <div className='header'>
        <div className="logo">
            CD Timer
        </div>
        <div className="user__profile">
            <div className="user__profile-img">img</div>
            <p>{userName}</p>
        </div>
    </div>
  )
}
