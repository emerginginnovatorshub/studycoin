import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsExpanded(window.innerWidth > window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`navbar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <Link href="/">Home</Link>
      <Link href="/learn">Learn</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/chat">Chat</Link>
      <Link href="/profile">Profile</Link>
      {isExpanded && (
        <div className="avatar-dropdown">
          <img src="/avatar.png" alt="Avatar" />
          <div className="dropdown-content">
            <Link href="/settings">Settings</Link>
            <Link href="/logout">Logout</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;