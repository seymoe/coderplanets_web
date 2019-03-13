/*
 * a theme inspired by dribble
 */
import { lighten, darken } from 'polished'

const primaryColor = '#756b49'

const bannerBg = '#3D3B3E'
const contentBg = '#2B292C'
const contentBoxBg = '#312f31'
const fontColor = primaryColor
const sidebarBg = '#211F22'
const markdownFont = '#7F8189'

const descText = '#736f6f'
const primaryMate = '#cc8651'

// https://www.slant.co/topics/7880/viewpoints/10/~dark-themes-for-text-editors~monokai-pro
const monokai = {
  name: 'monokai',
  logoText: descText,
  cover: '#2B292C',
  coverIndex: '#9e96c3',
  contrastFg: 'orange',
  htmlBg: contentBoxBg,
  loading: {
    basic: bannerBg,
    animate: lighten(0.03, bannerBg),
    // basic: '#113B4A',
    // animate: '#02495a',
  },
  error: {
    title: primaryColor,
    desc: darken(0.1, primaryColor),
    bg: lighten(0.02, contentBoxBg),
  },

  font: fontColor,
  link: '#269A95',
  main: '#7DC0C5',
  bodyBg: contentBg,
  selectionBg: '#839496',
  avatarOpacity: 0.8,
  baseColor: {
    error: '#a24e3f !important',
    errorBg: '#2d261e',
    green: '#699411 !important',
    pink: '#966475 !important',
    pinkLite: '#82606b',
    pinkBtnText: '#ded0d0 !important',
  },
  header: {
    fg: descText,
    bg: bannerBg,
    spliter: '#474548',
    fixed: bannerBg,
    tabActive: '#ab995e',
    tabOthers: descText,
    cardBg: '#39363a',
    cardBorder: '#555356',
    cardLogoText: descText,
    cardTitle: primaryColor,
  },
  banner: {
    title: '#9A9899',
    bg: bannerBg,
    desc: descText,
    spliter: '#474548',
    number: descText,
    active: primaryColor,
    numberDesc: descText,
    numberDivider: '#4d4b4e',
    numberHoverBg: lighten(0.03, bannerBg),
  },
  thread: {
    bg: contentBoxBg,
    filterResultHint: descText,
    articleTitle: '#989087',
    articleHover: '#363337',
    articleStrip: contentBoxBg,
    articleDigest: '#847473',
    articleTag: '#526482',
    articleLink: descText,
    articleDivider: '#464141',
    commentsUserBorder: contentBoxBg,
    extraInfo: primaryMate,
    articleSpliter: '#464141',

    // like github
    repoTitle: '#989087',
  },
  content: {
    bg: contentBoxBg,
    border: contentBoxBg,
    cardBg: bannerBg,
    cardBorder: lighten(0.08, contentBoxBg),
    cardBorderHover: lighten(0.1, contentBoxBg),
  },
  footer: {
    text: darken(0.05, descText),
    hover: lighten(0.1, descText),
    title: '#77706B',
    bottomBg: '#252325',
  },
  sidebar: {
    bg: sidebarBg,
    holder: lighten(0.15, sidebarBg),
    logoText: primaryColor,
    menuHover: lighten(0.1, sidebarBg),
    pinActive: '#849804',
    menuLink: '#93A1A1',
    borderColor: lighten(0.05, sidebarBg),
  },
  preview: {
    title: primaryColor,
    desc: lighten(0.05, descText),
    font: fontColor,
    bg: contentBoxBg,
    shadow: '-5px 0px 14px 0px rgba(41, 18, 18, 0.19)',
    closerShadow: '-5px 0px 14px 0px rgba(41, 18, 18, 0.19)',
    markdownHelperBg: lighten(0.04, contentBg),
    accountBg: lighten(0.04, contentBg),
    articleBg: lighten(0.04, contentBg),
    helper: lighten(0.2, contentBg),
    helperHover: lighten(0.3, contentBg),
    topLine: '#c387e8',
    icon: '#845145',
    divider: darken(0.07, descText),
  },
  article: {
    link: primaryMate,
    linkHover: lighten(0.05, primaryMate),
    reactionTitle: primaryColor,
    reactionHoverBg: lighten(0.04, contentBg),
  },
  comment: {
    icon: primaryColor,
    didIcon: primaryMate,
    title: primaryColor,
    username: primaryColor,
    number: primaryMate,
    floor: primaryMate,
    reply: primaryColor,
    replyBg: '#3d3644',
    placeholder: descText,
    filter: descText,
    filterActive: primaryColor,
    action: primaryColor,
    // mention text displayed in article
    mentionText: '#70768B',
    mentionTextBg: '#423a4a',
    // mention popover background
    mentionBg: contentBoxBg,
    mentionBorder: primaryColor,
    mentionActiveBg: lighten(0.1, contentBoxBg),
    mentionShadow: '0px 2px 10px 1px rgba(47, 46, 46, 0.8)',
  },
  editor: {
    title: primaryColor,
    content: '#6E717A',
    placeholder: darken(0.03, descText),
    headerBg: bannerBg,
    contentBg: bannerBg,
    border: bannerBg,
    borderAcitve: primaryColor,
    borderNormal: lighten(0.05, bannerBg),
    footer: descText,
    footerHover: lighten(0.05, descText),
  },
  pagination: {
    activeNum: 'white',
    itemBg: darken(0.1, descText),
    itemBorderColor: darken(0.06, descText),
    disableText: descText,
    text: primaryColor,
    inactiveNum: primaryColor,
  },
  heatmap: {
    activityLow: '#007D7C',
    activityHight: '#26A9A0',
    empty: '#342e3a',
    borderHover: primaryColor,
    monthLabel: descText,
    scale_1: lighten(0.04, '#342e3a'),
    scale_2: lighten(0.08, '#342e3a'),
    scale_3: lighten(0.12, '#342e3a'),
    scale_4: lighten(0.18, '#342e3a'),
    scale_5: lighten(0.3, '#342e3a'),
  },
  geoMap: {
    oceanColor: darken(0.05, '#3D3B3E'),
    regionBg: '#3D3B3E',
    restRegionBg: darken(0.02, '#3D3B3E'),
    borderStroke: darken(0.03, '#746F6D'),
    markerBg: '#AD9960',
    markerShadow: '#AD9960',
  },
  bannerHeatmap: {
    activityLow: '#007D7C',
    activityHight: '#26A9A0',
    empty: '#342e3a',
    borderHover: primaryColor,
    monthLabel: descText,
    scale_1: lighten(0.04, '#342e3a'),
    scale_2: lighten(0.08, '#342e3a'),
    scale_3: lighten(0.12, '#342e3a'),
    scale_4: lighten(0.18, '#342e3a'),
    scale_5: lighten(0.3, '#342e3a'),
  },
  markdown: {
    title: '#9a9899',
    fg: markdownFont,
    titleBottom: '#585454',
    hrColor: '#154452',
    blockquoteBorder: '0.25em solid #34535C',
    blockquoteFg: darken(0.09, markdownFont),
    strongFg: lighten(0.2, markdownFont),
    strongBg: '#34535C',
    link: '#a59958',
    tableBg: lighten(0.01, contentBoxBg),
    tableBg2n: lighten(0.05, contentBoxBg),
    tableborder: `1px solid ${lighten(0.07, contentBoxBg)}`,
    taskDone: '#528416',
    taskPeding: lighten(0.1, contentBoxBg),
    br: '#585454',
  },
  code: {
    bg: lighten(0.03, contentBoxBg),
  },
  shell: {
    link: lighten(0.2, contentBg),
    searchInput: lighten(0.1, contentBg),
    searchIcon: lighten(0.1, contentBg),
    barBg: darken(0.01, contentBg),
    border: lighten(0.05, contentBg),
    title: lighten(0.4, contentBg),
    desc: lighten(0.2, contentBg),
    activeBg: lighten(0.05, contentBg),
  },
  button: {
    primary: primaryColor,
    fg: lighten(0.4, primaryColor),
    hoverBg: lighten(0.1, primaryColor),
    activeBg: darken(0.01, primaryColor),
    clicked: primaryColor,
  },
  navigator: {
    activeBottom: primaryColor,
    borderRight: darken(0.05, bannerBg),
    hoverBg: lighten(0.05, bannerBg),
  },
  popover: {
    bg: bannerBg,
    borderColor: primaryColor,
    boxShadoe: '0 1px 4px rgba(0, 0, 0, 0.15)',
  },
  tags: {
    dotOpacity: 0.5,
    text: '#77726a',
  },
  tabs: {
    headerActive: '#ab995e',
    header: descText,
    contentBg: lighten(0.05, contentBoxBg),
    headerBg: lighten(0.03, contentBoxBg),
    headerActiveTop: primaryColor,
    border: descText,
    bottomLine: '#474548',
  },
  modal: {
    bg: bannerBg,
    border: primaryColor,
    innerSelectBg: '#333040',
  },
  form: {
    inputBg: lighten(0.03, contentBoxBg),
    text: descText,
    label: primaryColor,
    border: descText,
    shadow: 'rgba(184, 198, 192, 0.3)',
  },
  a: {
    hover: primaryColor,
    active: darken(0.1, primaryColor),
  },
  toast: {
    bg: contentBoxBg,
    border: descText,
    message: descText,
    title: primaryColor,
    infoBar: primaryColor,
    errorBar: '#f59381',
    successBar: '#9dd035',
    warnBar: '#f5a30e',
  },
  mailBox: {
    headHightBg: bannerBg,
  },
  alertWarn: {
    border: '#ffe58f',
    bg: '#fffbe6',
    text: '#c3ae8e',
  },
  table: {
    headerBg: '#484548',
    headTitle: '#999088',
    text: '#746F6F',
    border: '#5a5542',
    hoverBg: darken(0.05, '#484548'),
  },
  searchHighlight: {
    doramonFg: 'orange',
    doramonBg: 'transparent',
  },
}

export default monokai
