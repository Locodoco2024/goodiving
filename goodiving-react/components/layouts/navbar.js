import { useState } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import { FaShoppingCart, FaUser, FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

import ButtonGray from '../buttons/btn-fill-gray';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useAuth } from '@/context/auth-context';
import { useUser } from '@/context/user-context';
import { UPLOAD_FILE } from '@/configs/api-path.js';
import toast from 'react-hot-toast';

export default function Navbar({ openModal }) {
  const { auth, logout } = useAuth();
  const { userData } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    isOpen && setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    menuOpen && setMenuOpen(false);
  };

  const router = useRouter();

  const putLogOutButton = (e) => {
    e.preventDefault();
    logout();
    setIsOpen(false);
    toast.success('已成功登出');
  };

  const handleCartClick = (e) => {
    if (auth.user_id) {
      router.push('/cart');
    } else {
      e.preventDefault();
      openModal();
    }
  };

  // 渲染已登入狀態的下拉選單
  const loginDropdown = (
    <>
      <div className={styles.dropdown}>
        <div className={styles.memberInfo}>
          <Image
            className={styles.memberImg}
            src={`${UPLOAD_FILE}${userData.profile_picture}`}
            alt="member"
            width={100}
            height={100}
          />
          <div className={styles.memberName}>
            <h6>{auth.user_full_name}</h6>
            <h6>您好</h6>
          </div>
        </div>
        <ul>
          <li>
            <Link className={styles.dropdownItem} href="/member">
              我的帳戶
            </Link>
          </li>
          <li>
            <Link className={styles.dropdownItem} href="#">
              訂單紀錄
            </Link>
          </li>
          <li>
            <Link className={styles.dropdownItem} href="/member/booking">
              預訂課程
            </Link>
          </li>
          <li>
            <Link className={styles.dropdownItem} href="/member/favorite">
              收藏清單
            </Link>
          </li>
          <li>
            <Link className={styles.dropdownItem} href="/member/chat">
              潛伴聊聊
            </Link>
          </li>
        </ul>
        <ButtonGray
          className={styles.dropdownButton}
          style={{ width: '-webkit-fill-available' }}
          onClick={(e) => {
            putLogOutButton(e);
          }}
        >
          登出
        </ButtonGray>
      </div>
    </>
  );

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbarOuter}>
          <div className={styles.navbar}>
            <Link className="" href="/">
              <Image
                className={styles.logoImg}
                src="/logo-primary.svg"
                alt="goodiving"
                width={100}
                height={100}
                priority
              />
            </Link>
            <div className={styles.navbarInner}>
              <button
                className={`
                  ${styles.menuButton} 
                  ${menuOpen ? styles.open : ''}`}
                onClick={toggleMenu}
              >
                {menuOpen ? <FaXmark /> : <FaBars />}
              </button>
              <ul className={`${styles.menu} ${menuOpen ? styles.show : ''}`}>
                <li>
                  <Link className={styles.menuItem} href="/lesson">
                    搜尋課程
                  </Link>
                </li>
                <li>
                  <Link className={styles.menuItem} href="/products">
                    購買裝備
                  </Link>
                </li>
                <li>
                  <Link
                    className={styles.menuItem}
                    href={auth.user_id ? '/member' : '#'}
                    onClick={() => {
                      if (!auth.user_id) openModal();
                    }}
                  >
                    會員中心
                  </Link>
                </li>
              </ul>
              <ul className={styles.nav}>
                <li>
                  <button className={styles.navItem} onClick={handleCartClick}>
                    <FaShoppingCart />
                  </button>
                </li>

                {/* 會員中心 */}
                <li>
                  <button
                    className={styles.navItem}
                    onClick={auth.user_id ? toggleDropdown : openModal} // 正確觸發下拉選單切換
                  >
                    <FaUser />
                  </button>
                  {/* 根據 isOpen 和 auth 狀態渲染下拉選單 */}
                  {isOpen && (auth.user_id ? loginDropdown : '')}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
