import Image from 'next/image'
import { Anchor, CardHeading, classNames } from '../../components'

import ActionPanelImg from '../../src/assets/action-panels.png'
import AnchorImg from '../../src/assets/anchors.png'
import AnimatedBlogBackgroundImg from '../../src/assets/animated-blob-background.png'
import AvatarImg from '../../src/assets/avatars.png'
import BadgeImg from '../../src/assets/badges.png'
import BreadcrumbImg from '../../src/assets/breadcrumbs.png'
import ButtonImg from '../../src/assets/buttons.png'
import ButtonGroupImg from '../../src/assets/button-groups.png'
import CardHeadingImg from '../../src/assets/card-headings.png'
import CheckboxImg from '../../src/assets/checkboxes.png'
import CodeImg from '../../src/assets/code.png'
import DropdownImg from '../../src/assets/dropdowns.png'
import EmptyStateImg from '../../src/assets/empty-states.png'
import FilePreviewImg from '../../src/assets/file-previews.png'
import InputImg from '../../src/assets/inputs.png'
import ModalImg from '../../src/assets/modals.png'
import NavBarImg from '../../src/assets/nav-bars.png'
import NavigationImg from '../../src/assets/navigation.png'
import NotificationImg from '../../src/assets/notifications.png'
import PageHeaderImg from '../../src/assets/page-headers.png'

let colors = [
  'bg-rose-600',
  'bg-pink-600',
  'bg-fuchsia-500',
  'bg-purple-500',
  'bg-violet-500',
  'bg-indigo-500',
  'bg-blue-500',
  'bg-sky-500',
  'bg-cyan-500',
  'bg-teal-500',
  'bg-emerald-500',
  'bg-green-500',
  'bg-lime-500',
  'bg-yellow-500',
  'bg-amber-500',
  'bg-orange-500',
  'bg-red-500',
]

const components = [
  {
    name: 'Action Panel',
    initials: 'AP',
    to: '/components/action-panel',
    asset: ActionPanelImg,
  },
  {
    name: 'Anchor',
    initials: 'A',
    to: '/components/anchor',
    asset: AnchorImg,
  },
  {
    name: 'AnimatedBlobBackground',
    initials: 'ABB',
    to: '/components/animated-blob-background',
    asset: AnimatedBlogBackgroundImg,
  },
  {
    name: 'Avatar',
    initials: 'A',
    to: '/components/avatar',
    asset: AvatarImg,
  },
  {
    name: 'Badge',
    initials: 'B',
    to: '/components/badge',
    asset: BadgeImg,
  },
  {
    name: 'Breadcrumb',
    initials: 'B',
    to: '/components/breadcrumb',
    asset: BreadcrumbImg,
  },
  {
    name: 'Button',
    initials: 'B',
    to: '/components/button',
    asset: ButtonImg,
  },
  {
    name: 'ButtonGroup',
    initials: 'BG',
    to: '/components/button-group',
    asset: ButtonGroupImg,
  },
  {
    name: 'CardHeading',
    initials: 'CH',
    to: '/components/card-heading',
    asset: CardHeadingImg,
  },
  {
    name: 'CheckboxGroup',
    initials: 'CG',
    to: '/components/checkbox-group',
    asset: CheckboxImg,
  },
  {
    name: 'Code',
    initials: 'C',
    to: '/components/code',
    asset: CodeImg,
  },
  {
    name: 'Dropdown',
    initials: 'D',
    to: '/components/dropdown',
    asset: DropdownImg,
  },
  {
    name: 'EmptyState',
    initials: 'ES',
    to: '/components/empty-state',
    asset: EmptyStateImg,
  },
  {
    name: 'FilePreview',
    initials: 'FP',
    to: '/components/file-preview',
    asset: FilePreviewImg,
  },
  {
    name: 'Input',
    initials: 'I',
    to: '/components/input',
    asset: InputImg,
  },
  {
    name: 'Modal',
    initials: 'M',
    to: '/components/modal',
    asset: ModalImg,
  },
  {
    name: 'NavBar',
    initials: 'NB',
    to: '/components/navbar',
    asset: NavBarImg,
  },
  {
    name: 'Navigation',
    initials: 'N',
    to: '/components/navigation',
    asset: NavigationImg,
  },
  {
    name: 'Notification',
    initials: 'N',
    to: '/components/notification',
    asset: NotificationImg,
  },
  {
    name: 'PageHeading',
    initials: 'PH',
    to: '/components/page-heading',
    asset: PageHeaderImg,
  },
  {
    name: 'Pagination',
    initials: 'P',
    to: '/components/pagination',
  },
  {
    name: 'RadioGroup',
    initials: 'RG',
    to: '/components/radio-group',
  },
  {
    name: 'SectionHeading',
    initials: 'SH',
    to: '/components/section-heading',
  },
  {
    name: 'SelectMenu',
    initials: 'SM',
    to: '/components/select-menu',
  },
  {
    name: 'SidebarNavigation',
    initials: 'SN',
    to: '/components/sidebar-navigation',
  },
  {
    name: 'SlideOver',
    initials: 'SO',
    to: '/components/slideover',
  },
  {
    name: 'StepsNavigation',
    initials: 'SN',
    to: '/components/steps-navigation',
  },
  {
    name: 'Table',
    initials: 'T',
    to: '/components/table',
  },
  {
    name: 'Toggle',
    initials: 'T',
    to: '/components/toggle',
  },
].map((item, index) => ({ ...item, bgColor: colors[index % colors.length] }))

export const ComponentsSection = () => {
  return (
    <div>
      <CardHeading title="Components" />
      <ul
        role="list"
        className="mt-4 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {components.map((component) => (
          <li
            key={component.name}
            className="col-span-1 flex flex-col border border-gray-200 shadow-md rounded-md"
          >
            {component.asset && (
              <Image
                className="object-cover rounded-t-md"
                src={component.asset}
                alt={component.name}
              />
            )}

            <div className="flex">
              <div
                className={classNames(
                  component.bgColor,
                  'py-4 shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-bl-md',
                )}
              >
                {component.initials}
              </div>
              <div className="flex-1 flex items-center justify-between bg-white rounded-br-md truncate">
                <div className="flex-1 px-4 text-sm truncate">
                  <Anchor
                    to={component.to}
                    className="text-gray-900 font-medium hover:text-gray-600"
                  >
                    {component.name}
                  </Anchor>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ComponentsSection
