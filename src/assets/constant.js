// 可选国家
const COUNTRYS = [
  {code: 'us', name: 'United States'},
  {code: 'cn', name: '中国'},
  {code: 'jp', name: '日本'},
  {code: 'kr', name: '한국'},
]

// footer 媒体链接
const SOCIAL_LINKS = [
  { label: 'twitter', link: '/' },
  { label: 'instagram', link: '/' },
  { label: 'reddit', link: '/' }
]

// footer 相关链接
const FOOTER_DIRECTORY = [
  {
    id: 'About',
    title: { label: 'About', link: '/' },
    links: [
      { label: 'Contact Us', link: '/' },
      { label: 'Join Us', link: '/' }
    ]
  },
  {
    id: 'Developer',
    title: { label: 'Developer', link: '/' },
    links: [
      { label: 'SDK Download', link: '/' },
      { label: 'Community', link: '/' },
      { label: 'Discord', link: '/' }
    ]
  }
]

export { COUNTRYS, SOCIAL_LINKS, FOOTER_DIRECTORY }