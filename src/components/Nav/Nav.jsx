import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const location = useLocation();

  function testLinks(numberOfLinks = 6) {
    const renderLinks = (index) => {
      const path = index === 0 ? '/' : '/test' + index;
      const name = index === 0 ? 'HOME' : 'Test ' + index;

      const style = [
        'border-gray-800',
        'px-2',
        'py-1',
        'rounded-lg',
        'bg-blue-600',
        'font-sans',
        'shadow-md',
        'hover:bg-blue-800',
        'font-semi-bold',
        location.pathname === path && 'outline-none',
        location.pathname === path && 'ring-4',
        location.pathname === path && 'ring-opactiy-75',
      ].join(' ');

      return (
        <li key={index}>
          <Link className={style} to={path} id={path}>
            {name}
          </Link>
        </li>
      );
    };

    const links = [];

    for (let x = 0; x <= numberOfLinks; x++) {
      links.push(renderLinks(x));
    }
    return links;
  }

  return (
    <header>
      <nav>
        <ul className='flex justify-around flex-wrap md:flex-nowrap px-6 lg:px-12  text-sm  text-white  my-4 py-4 border-b-4 border-slate-500  md:text-2xl h-28  items-center'>
          {testLinks()}
        </ul>
      </nav>
    </header>
  );
}
