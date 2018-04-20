/*
 *
 * Header
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import { Affix } from 'antd'
import keydown from 'react-keydown'
// import Link from 'next/link'
import Navigator from '../../components/Navigator'

import { ICON_ASSETS } from '../../config/assets'

import {
  makeDebugger,
  storeSelector,
  getSVGIconPath,
  notEmpty,
} from '../../utils'

import {
  Header,
  RouterWrapper,
  MiniMapWrapper,
  CommunityLogo,
  MiniTab,
  Admin,
  Search,
  Notification,
  HeaderIcon,
  UserAvatar,
  StateIcon,
  StateButton,
  DividerIcon,
  Operations,
  User,
} from './styles'

import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:Header')
/* eslint-enable no-unused-vars */

const MiniMap = ({ curRoute }) => {
  const defaultIcon = 'js'
  const { mainQuery } = curRoute
  const iconKey = mainQuery.length > 1 ? mainQuery : defaultIcon

  return (
    <MiniMapWrapper>
      <CommunityLogo path={getSVGIconPath(iconKey)} />
      <MiniTab active>帖子</MiniTab>
      <MiniTab>教程</MiniTab>
      <MiniTab>动态</MiniTab>
      <MiniTab>视频</MiniTab>
      <MiniTab>地图</MiniTab>
      <MiniTab>cheatsheet</MiniTab>
    </MiniMapWrapper>
  )
}

class HeaderContainer extends React.Component {
  componentWillMount() {
    logic.init(this.props.header)
  }

  /* eslint-disable class-methods-use-this */
  @keydown(['ctrl+p'])
  openDoraemon() {
    // debug('openDoraemon')
    logic.openDoraemon()
  }
  /* eslint-enable class-methods-use-this */

  render() {
    const { fixed, curRoute, leftOffset, accountInfo } = this.props.header

    return (
      <Affix>
        <Header
          id="whereCallShowDoraemon"
          leftOffset={leftOffset}
          fixed={fixed}
        >
          <RouterWrapper>
            {fixed ? <MiniMap curRoute={curRoute} /> : <Navigator />}
          </RouterWrapper>
          <Admin>
            <div style={{ display: 'flex' }}>
              <StateButton
                size="small"
                type="primary"
                ghost
                onClick={logic.previewState.bind(this, 'mst-state')}
              >
                <StateIcon path={`${ICON_ASSETS}/cmd/header_state.svg`} />
                <div>STATE</div>
              </StateButton>

              <DividerIcon path={`${ICON_ASSETS}/cmd/more.svg`} />
            </div>
          </Admin>

          <Operations>
            <Search onClick={logic.openDoraemon}>
              <HeaderIcon path={`${ICON_ASSETS}/cmd/header_search.svg`} />
            </Search>
            <Notification onClick={logic.openPreview.bind(this, 'post')}>
              <HeaderIcon path={`${ICON_ASSETS}/cmd/notification_none.svg`} />
            </Notification>
            <User onClick={logic.previewAccount.bind(this, 'account')}>
              {notEmpty(accountInfo.nickname) ? (
                <UserAvatar src={accountInfo.avatar} />
              ) : (
                <HeaderIcon path={`${ICON_ASSETS}/cmd/header_user.svg`} />
              )}
            </User>
          </Operations>
        </Header>
      </Affix>
    )
  }
}

export default inject(storeSelector('header'))(observer(HeaderContainer))
