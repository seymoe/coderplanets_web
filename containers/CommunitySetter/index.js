/*
 *
 * CommunitySetter
 *
 */

import React from 'react'

import { connectStore, makeDebugger } from '@utils'

import Modal from '@components/Modal'
import { ArticleContentLoading } from '@components/LoadingEffects'

import SearchBar from './SearchBar'
import Message from './Message'
import CommunitiesList from './CommunitiesList'

import { Wrapper, ContentWrapper, Divider } from './styles'
import { useInit, onClose } from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:CommunitySetter')

const CommunitySetterContainer = ({ communitySetter }) => {
  useInit(communitySetter)

  const {
    visible,
    curBelongIds,
    pagedCommunitiesData,
    searchValue,
  } = communitySetter

  return (
    <Modal width="700px" show={visible} showCloseBtn onClose={onClose}>
      <Wrapper>
        <ContentWrapper>
          <SearchBar value={searchValue} />
        </ContentWrapper>
        <Divider />
        <Message />
        <ContentWrapper>
          {pagedCommunitiesData ? (
            <CommunitiesList
              data={pagedCommunitiesData}
              curBelongIds={curBelongIds}
            />
          ) : (
            <ArticleContentLoading />
          )}
        </ContentWrapper>
      </Wrapper>
    </Modal>
  )
}

export default connectStore(CommunitySetterContainer)
