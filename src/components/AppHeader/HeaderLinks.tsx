import Link from 'next/link';
import classNames from 'classnames';
import SwapIcon from 'src/icons/SwapIcon';
import RepoLogo from 'src/icons/RepoLogo';
import DiscordIcon from 'src/icons/DiscordIcon';

const HeaderLink = ({
  href,
  isActive,
  title,
  icon,
  className,
  external = false,
}: {
  href: string;
  isActive: boolean;
  title: string | React.ReactNode;
  icon: React.ReactNode;
  className?: string;
  external?: boolean;
}) => {
  return (
    <Link
      href={href}
      shallow
      className={classNames(
        'flex items-center font-semibold text-white/50 hover:text-white fill-current h-[60px] px-4',
        {
          'bg-v3-bg !text-v3-primary': isActive,
        },
        className,
      )}
      {...(external
        ? {
            target: '_blank',
            rel: 'noopener noreferrer',
          }
        : {})}
    >
      <span className="w-5">{icon}</span>
      <span className="ml-2 whitespace-nowrap">{title}</span>
    </Link>
  );
};

const HeaderLinks = () => {
  return (
    <div className="flex-1 justify-center hidden md:!flex text-sm h-full">
      <HeaderLink href="/" isActive title={'Demo'} icon={<SwapIcon width="20" height="20" />} />
      <HeaderLink
        href="#"
        isActive={false}
        external
        title={'Link 1'}
        icon={<RepoLogo width="20" height="20" />}
      />
      <HeaderLink
        href="#"
        isActive={false}
        external
        title={'Link 2'}
        icon={<RepoLogo width="20" height="20" />}
      />
      <HeaderLink
        href="#"
        isActive={false}
        external
        title={'Link 3'}
        icon={<DiscordIcon width="20" height="20" />}
      />
    </div>
  );
};

export default HeaderLinks;
